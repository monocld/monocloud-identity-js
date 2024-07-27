import { MonoCloudConfig, Fetcher } from '@monocloud/sdk-js-core';
import { UsersClient } from './clients';

export class MonoCloudUsersBackendClient extends UsersClient {
  private constructor(options: MonoCloudConfig, fetcher?: Fetcher) {
    super(options, fetcher);
  }

  public static init(
    options?: MonoCloudConfig,
    fetcher?: Fetcher
  ): MonoCloudUsersBackendClient {
    const envTimeout = parseInt(process.env.MC_USERS_BACKEND_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      domain: options?.domain ?? process.env.MC_USERS_BACKEND_DOMAIN ?? '',
      apiKey: options?.apiKey ?? process.env.MC_USERS_BACKEND_API_KEY ?? '',
      config: options?.config ?? {
        timeout:
          (options?.config?.timeout ??
          (Number.isInteger(envTimeout) && envTimeout > 0))
            ? envTimeout
            : undefined,
      },
    };

    return new MonoCloudUsersBackendClient(opt, fetcher);
  }
}
