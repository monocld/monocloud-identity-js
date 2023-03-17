import { AxiosInstance } from 'axios';
import { MonoCloudConfig } from '@monocloud/sdk-js-core';
import { UsersClient } from './clients';

export class MonoCloudUsersBackendClient extends UsersClient {
  private constructor(
    options: MonoCloudConfig,
    baseDomain: string,
    instance?: AxiosInstance
  ) {
    super(options, `https://${baseDomain}`, instance);
  }

  public static init(
    options?: MonoCloudConfig,
    instance?: AxiosInstance
  ): MonoCloudUsersBackendClient {
    const envTimeout = parseInt(process.env.MC_MANAGE_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      apiKey: options?.apiKey ?? process.env.MC_MANAGE_API_KEY ?? '',
      tenantId: options?.tenantId ?? process.env.MC_TENANT_ID ?? '',
      config: options?.config ?? {
        retry: options?.config?.retry ?? process.env.MC_MANAGE_RETRY === 'true',
        timeout:
          options?.config?.timeout ??
          (Number.isInteger(envTimeout) && envTimeout > 0)
            ? envTimeout
            : undefined,
      },
    };

    return new MonoCloudUsersBackendClient(
      opt,
      process.env.MC_MANAGE_BASE_DOMAIN ?? 'api.monocloud.com',
      instance
    );
  }
}
