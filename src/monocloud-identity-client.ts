import { MonoCloudConfig, Fetcher } from '@monocloud/sdk-js-core';
import { GroupsClient, UsersClient } from './clients';

export class MonoCloudIdentityClient {
  public readonly groups: GroupsClient;

  public readonly users: UsersClient;

  private constructor(options: MonoCloudConfig, fetcher?: Fetcher) {
    this.groups = new GroupsClient(options, fetcher);

    this.users = new UsersClient(options, fetcher);
  }

  public static init(
    options?: MonoCloudConfig,
    fetcher?: Fetcher
  ): MonoCloudIdentityClient {
    const envTimeout = parseInt(process.env.MC_IDENTITY_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      domain: options?.domain ?? process.env.MC_IDENTITY_DOMAIN ?? '',
      apiKey: options?.apiKey ?? process.env.MC_IDENTITY_API_KEY ?? '',
      config: options?.config ?? {
        timeout:
          (options?.config?.timeout ??
          (Number.isInteger(envTimeout) && envTimeout > 0))
            ? envTimeout
            : undefined,
      },
    };

    return new MonoCloudIdentityClient(opt, fetcher);
  }
}
