import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  CreateUserRequest,
  DisableUserRequest,
  ExternalAuthenticatorDisconnectRequest,
  UnblockIpRequest,
  UpdatePrivateDataRequest,
  UpdatePublicDataRequest,
  User,
  UserIpAccessDetails,
  UserPrivateData,
  UserPublicData,
  UserSession,
  UserSummary,
  UserWithAccessDetails,
} from '../models';

export class UsersClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get all users
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the users needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'given_name\', \'middle_name\', \'family_name\', \'name\', \'creation_time\', and \'last_updated\'
   * @returns UserSummary[] - Successfully retrieved users
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUsers(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserSummary[]>> {
    const url = `/users`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSummary[]>(request);
  }

  /**
   *
   * @summary Create a user
   * @param {CreateUserRequest} createUserRequest User\'s data
   * @returns User - Created
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public createUser(
    createUserRequest: CreateUserRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createUserRequest;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Get a user
   * @param {string} userId User Id
   * @returns UserWithAccessDetails - Successfully retrieved the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public findUserById(
    userId: string
  ): Promise<MonoCloudResponse<UserWithAccessDetails>> {
    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserWithAccessDetails>(request);
  }

  /**
   *
   * @summary Delete a user
   * @param {string} userId User Id
   * @returns Successfully deleted the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public deleteUser(userId: string): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Enable a user
   * @param {string} userId User Id
   * @returns User - Successfully enabled the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public enableUser(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/enable`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Disable a user
   * @param {string} userId User Id
   * @param {DisableUserRequest} disableUserRequest The disable user request.
   * @returns User - Successfully disabled the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public disableUser(
    userId: string,
    disableUserRequest: DisableUserRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/disable`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = disableUserRequest;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Unblock a user
   * @param {string} userId User Id
   * @returns User - Successfully unblocked the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public unblockUser(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/unblock`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Set a user\'s primary email
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the email to be set a primary.
   * @returns User - Successfully updated user\&#39;s primary email
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPrimaryEmail(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}/primary`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Marks the specified email as verified.
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the email to be marked as verified.
   * @returns User - Successfully updated user\&#39;s primary email
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setEmailVerifiedEndpoint(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}/verify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Enables the Email Authenticator for a user\'s email
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the email for which the email authenticator should be enabled.
   * @returns User - Successfully enabled the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public enableEmailAuthenticator(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url =
      `/users/{user_id}/emails/{identifier_id}/email_authenticator/enable`
        .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
        .replace(
          `{${'identifier_id'}}`,
          encodeURIComponent(String(identifierId))
        );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Set a user\'s primary phone
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the phone to be set a primary.
   * @returns User - Successfully updated user\&#39;s primary phone
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPrimaryPhone(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}/primary`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Marks the specified phone as verified.
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the phone to be set verified.
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPhoneVerifiedEndpoint(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}/verify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Enables the Phone Authenticator for a user\'s phone
   * @param {string} userId User Id
   * @param {string} identifierId The Id of the phone for which the phone authenticator should be enabled.
   * @returns User - Successfully enabled the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public enablePhoneAuthenticator(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url =
      `/users/{user_id}/phones/{identifier_id}/phone_authenticator/enable`
        .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
        .replace(
          `{${'identifier_id'}}`,
          encodeURIComponent(String(identifierId))
        );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Get a user\'s private data
   * @param {string} userId User Id
   * @returns UserPrivateData - Successfully retrieved user\&#39;s private data
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getPrivateData(
    userId: string
  ): Promise<MonoCloudResponse<UserPrivateData>> {
    const url = `/users/{user_id}/private_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserPrivateData>(request);
  }

  /**
   *
   * @summary Updates fields for the user\'s private data
   * @param {string} userId User Id
   * @param {UpdatePrivateDataRequest} updatePrivateDataRequest Data to be updated
   * @returns UserPrivateData - Successfully updated the fields for the user\&#39;s private data
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public patchPrivateData(
    userId: string,
    updatePrivateDataRequest: UpdatePrivateDataRequest
  ): Promise<MonoCloudResponse<UserPrivateData>> {
    const url = `/users/{user_id}/private_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updatePrivateDataRequest;

    return this.processRequest<UserPrivateData>(request);
  }

  /**
   *
   * @summary Get a user\'s public data
   * @param {string} userId User Id
   * @returns UserPublicData - Successfully retrieved user\&#39;s public data
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getPublicData(
    userId: string
  ): Promise<MonoCloudResponse<UserPublicData>> {
    const url = `/users/{user_id}/public_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserPublicData>(request);
  }

  /**
   *
   * @summary Updates fields for the user\'s public data
   * @param {string} userId User Id
   * @param {UpdatePublicDataRequest} updatePublicDataRequest Data to be updated
   * @returns UserPublicData - Successfully updated the fields for the user\&#39;s public data
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public patchPublicData(
    userId: string,
    updatePublicDataRequest: UpdatePublicDataRequest
  ): Promise<MonoCloudResponse<UserPublicData>> {
    const url = `/users/{user_id}/public_data`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updatePublicDataRequest;

    return this.processRequest<UserPublicData>(request);
  }

  /**
   *
   * @summary Get a list of blocked ips
   * @param {string} userId User Id
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Ip address by which the blocked ips needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'block_until\' and \'last_login_attempt\'
   * @returns UserIpAccessDetails[] - Successfully retrieved user\&#39;s blocked ips
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllBlockedIps(
    userId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserIpAccessDetails[]>> {
    const url = `/users/{user_id}/blocked_ips`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserIpAccessDetails[]>(request);
  }

  /**
   *
   * @summary Unblock an ip address
   * @param {string} userId User Id
   * @param {UnblockIpRequest} unblockIpRequest The unblock ip request
   * @returns User - Successfully unblocked an ip
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public unblockIp(
    userId: string,
    unblockIpRequest: UnblockIpRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/blocked_ips/unblock`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = unblockIpRequest;

    return this.processRequest<User>(request);
  }

  /**
   *
   * @summary Get all sessions for the specified user
   * @param {string} userId User Id
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Client Id by which the user sessions needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'session_id\', \'initiated_at\', \'expires_at\' and \'last_updated\'
   * @returns UserSession[] - Successfully retrieved users
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUserSessions(
    userId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserSession[]>> {
    const url = `/users/{user_id}/sessions`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSession[]>(request);
  }

  /**
   *
   * @summary Revoke a user session
   * @param {string} userId User Id
   * @param {string} sessionId Session Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public revokeUserSession(
    userId: string,
    sessionId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/sessions/{session_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'session_id'}}`, encodeURIComponent(String(sessionId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Disconnect an External Authenticator from a user
   * @param {string} userId User Id
   * @param {ExternalAuthenticatorDisconnectRequest} externalAuthenticatorDisconnectRequest Idp disconnect data
   * @returns User - Success
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public externalAuthenticatorDisconnectEndpoint(
    userId: string,
    externalAuthenticatorDisconnectRequest: ExternalAuthenticatorDisconnectRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/external_authenticator/disconnect`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = externalAuthenticatorDisconnectRequest;

    return this.processRequest<User>(request);
  }
}
