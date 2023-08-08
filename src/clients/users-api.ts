import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import {
  UnblockIpRequest,
  UpdatePrivateDataRequest,
  UpdatePublicDataRequest,
  User,
  UserIpAccessDetails,
  UserPrivateData,
  UserPublicData,
  UserSummary,
  UserWithAccessDetails,
} from '../models';

export class UsersClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get all users
   * @param {number} [page]
   * @param {number} [size]
   * @returns UserSummary[] - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUsers(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<UserSummary[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/users`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<UserSummary[]>(request);
  }

  /**
   *
   * @summary Get a user
   * @param {string} userId User Id
   * @returns UserWithAccessDetails - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public findUserById(
    userId: string
  ): Promise<MonoCloudResponse<UserWithAccessDetails>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<UserWithAccessDetails>(request);
  }

  /**
   *
   * @summary Delete a user
   * @param {string} userId User Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public deleteUser(userId: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Enable a user
   * @param {string} userId User Id
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public enableUser(userId: string): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/enable`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Disable a user
   * @param {string} userId User Id
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public disableUser(userId: string): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/disable`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Unblock a user
   * @param {string} userId User Id
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public unblockUser(userId: string): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/unblock`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Set a user\'s primary email
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the email to be set a primary.
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPrimaryEmail(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/emails/{identifier_id}/primary`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Set a user\'s primary phone
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the phone to be set a primary.
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPrimaryPhone(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/phones/{identifier_id}/primary`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Get a user\'s private data
   * @param {string} userId User Id
   * @returns UserPrivateData - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getPrivateData(
    userId: string
  ): Promise<MonoCloudResponse<UserPrivateData>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/users/{user_id}/private_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<UserPrivateData>(request);
  }

  /**
   *
   * @summary Update a user\'s private data
   * @param {string} userId User Id
   * @param {UpdatePrivateDataRequest} updatePrivateDataRequest Data to be updated
   * @returns UserPrivateData - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public updatePrivateData(
    userId: string,
    updatePrivateDataRequest: UpdatePrivateDataRequest
  ): Promise<MonoCloudResponse<UserPrivateData>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/private_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    request.data = JSON.stringify(updatePrivateDataRequest);

    return this.processRequest<UserPrivateData>(request);
  }

  /**
   *
   * @summary Get a user\'s public data
   * @param {string} userId User Id
   * @returns UserPublicData - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getPublicData(
    userId: string
  ): Promise<MonoCloudResponse<UserPublicData>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/users/{user_id}/public_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<UserPublicData>(request);
  }

  /**
   *
   * @summary Update a user\'s public data
   * @param {string} userId User Id
   * @param {UpdatePublicDataRequest} updatePublicDataRequest Data to be updated
   * @returns UserPublicData - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public updatePublicData(
    userId: string,
    updatePublicDataRequest: UpdatePublicDataRequest
  ): Promise<MonoCloudResponse<UserPublicData>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/public_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    request.data = JSON.stringify(updatePublicDataRequest);

    return this.processRequest<UserPublicData>(request);
  }

  /**
   *
   * @summary Get a list of blocked ips
   * @param {string} userId User Id
   * @param {number} [page]
   * @param {number} [size]
   * @returns UserIpAccessDetails[] - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllBlockedIps(
    userId: string,
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<UserIpAccessDetails[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/users/{user_id}/blocked_ips`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<UserIpAccessDetails[]>(request);
  }

  /**
   *
   * @summary Unblock an ip address
   * @param {string} userId User Id
   * @param {UnblockIpRequest} unblockIpRequest The unblock ip request
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public unblockIp(
    userId: string,
    unblockIpRequest: UnblockIpRequest
  ): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/users/{user_id}/blocked_ips/unblock`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    request.data = JSON.stringify(unblockIpRequest);

    return this.processRequest<User>(request);
  }
}
