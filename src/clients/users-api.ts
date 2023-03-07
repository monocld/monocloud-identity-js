import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import { User, UserSummary, UserWithAccessDetails } from '../models';

export class UsersClient extends MonoCloudClientBase {
  /**
   *
   * @summary Delete a User by Id
   * @param {string} userId User Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public deleteUser(userId: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/v1/users/{userId}`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Disable a user.
   * @param {string} userId User Id
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public disableUser(userId: string): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/users/{userId}/disable`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Enable a user.
   * @param {string} userId User Id
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public enableUser(userId: string): Promise<MonoCloudResponse<User>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/users/{userId}/enable`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Find a user by Id.
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

    const url = `/v1/users/{userId}`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<UserWithAccessDetails>(request);
  }

  /**
   *
   * @summary Get summary of all Users.
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

    const url = `/v1/users`;

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
   * @summary Get private data of a user.
   * @param {string} userId User Id
   * @returns { [key: string]: any; } - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getPrivateData(
    userId: string
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/users/{userId}/private_data`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<{ [key: string]: any }>(request);
  }

  /**
   *
   * @summary Get public data of a user.
   * @param {string} userId User Id
   * @returns { [key: string]: any; } - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getPublicData(
    userId: string
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/users/{userId}/public_data`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    return this.processRequest<{ [key: string]: any }>(request);
  }

  /**
   *
   * @summary Set the specified email as the primary email address for the user.
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

    const url = `/v1/users/{userId}/emails/{identifierId}/primary`
      .replace(`{${'userId'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'identifierId'}}`, encodeURIComponent(String(identifierId)));

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Set the specified phone as the primary phone number for the user.
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

    const url = `/v1/users/{userId}/phones/{identifierId}/primary`
      .replace(`{${'userId'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'identifierId'}}`, encodeURIComponent(String(identifierId)));

    request.url = url;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Update the private data of a user.
   * @param {string} userId User Id
   * @param {{ [key: string]: any; }} requestBody Data to be updated
   * @returns { [key: string]: any; } - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public updatePrivateData(
    userId: string,
    requestBody: { [key: string]: any }
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/users/{userId}/private_data`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    request.data = JSON.stringify(requestBody);

    return this.processRequest<{ [key: string]: any }>(request);
  }

  /**
   *
   * @summary Update the public data of a user.
   * @param {string} userId User Id
   * @param {{ [key: string]: any; }} requestBody Data to be updated
   * @returns { [key: string]: any; } - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public updatePublicData(
    userId: string,
    requestBody: { [key: string]: any }
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/users/{userId}/public_data`.replace(
      `{${'userId'}}`,
      encodeURIComponent(String(userId))
    );

    request.url = url;

    request.data = JSON.stringify(requestBody);

    return this.processRequest<{ [key: string]: any }>(request);
  }
}
