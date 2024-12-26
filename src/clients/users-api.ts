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
  UpdateClaimsRequest,
  UpdatePrivateDataRequest,
  UpdatePublicDataRequest,
  User,
  UserGroup,
  UserIpAccessDetails,
  UserPrivateData,
  UserPublicData,
  UserSession,
  UserSummary,
  UserWithAccessDetails,
} from '../models';

export class UsersClient extends MonoCloudClientBase {
  /**
   * Retrieves a paginated list of users, including their profile information. The endpoint allows you to specify optional search parameters to filter and refine the results.
   * @summary Get all users
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [filter] A query filter to apply when searching for users.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'creation_time\', and \'last_updated\'.
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
   * Creates a new user by specifying either a password, verified email address or phone number. Along with the required identifiers, you can also provide additional user profile information, such as the user\'s given name and last name.
   * @summary Create a user
   * @param {CreateUserRequest} createUserRequest The create user request.
   * @returns User - Successfully created the user
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
   * Retrieves profile information about a specific user, including attributes such as identifiers, first name, last name, and other relevant data associated with the user.
   * @summary Get a user
   * @param {string} userId The ID of the user whose profile information should be retrieved.
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
   * Permanently deletes a user and all associated data. This action is irreversible.
   * @summary Delete a user
   * @param {string} userId The ID of the user to be deleted.
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
   * Enables a previously disabled user, restoring their access to the system.
   * @summary Enable a user
   * @param {string} userId The ID of the user to be enabled.
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
   * Disables a user, preventing them from accessing the system. Optionally, all active sessions of the user can also be revoked.
   * @summary Disable a user
   * @param {string} userId The ID of the user to be disabled.
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
   * Removes the block on a user\'s account, allowing them to regain access to the system and authenticate.
   * @summary Unblock a user
   * @param {string} userId The ID of the user whose account should be unblocked.
   * @returns User - Successfully unblocked the user account
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
   * Designates the specified email as the primary email for the user\'s account, making it the default address for communication and authentication purposes.
   * @summary Set email as primary
   * @param {string} userId The ID of the user whose email should be set as primary.
   * @param {string} identifierId The ID of the email to be set as primary.
   * @returns User - Successfully set the user\&#39;s email as primary
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
   * Marks a specific email address for the specified user\'s account as verified, indicating that the email has been confirmed and can be trusted for authentication and communication.
   * @summary Mark email as verified
   * @param {string} userId The ID of the user whose email is to be marked as verified.
   * @param {string} identifierId The ID of the email to be marked as verified.
   * @returns User - Successfully marked user\&#39;s email as verified
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setEmailVerified(
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
   * Designates the specified phone as the primary phone for the user\'s account, making it the default number for communication and authentication purposes.
   * @summary Set phone as primary
   * @param {string} userId The ID of the user whose phone should be set as primary.
   * @param {string} identifierId The ID of the phone to be set as primary.
   * @returns User - Successfully set the user\&#39;s phone as primary
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
   * Marks a specific phone number for the specified user\'s account as verified, indicating that the phone has been confirmed and can be trusted for authentication and communication.
   * @summary Mark phone as verified
   * @param {string} userId The ID of the user whose phone is to be marked as verified.
   * @param {string} identifierId The ID of the phone to be marked as verified.
   * @returns User - Successfully marked user\&#39;s phone as verified
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPhoneVerified(
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
   * Updates specified claims for the user. Only fields provided in the request will be updated. To unset a field, pass a null value.
   * @summary Update user claims
   * @param {string} userId The ID of the user whose claims should be updated.
   * @param {UpdateClaimsRequest} updateClaimsRequest The update claims request.
   * @returns User - Successfully updated the user claims
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public patchClaims(
    userId: string,
    updateClaimsRequest: UpdateClaimsRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/claims`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updateClaimsRequest;

    return this.processRequest<User>(request);
  }

  /**
   * Returns the private data associated with the specified user. This data is typically restricted to backend applications due to its sensitive nature.
   * @summary Get user private data
   * @param {string} userId The ID of the user whose private data should be retrieved.
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
   * Updates specified fields within the user\'s private data. Only the data provided in the request will be updated. Field values can be strings, booleans, numbers, arrays, or objects. To unset a key, pass a `null` value for that key. Due to the sensitive nature of this data, ensure that only authorized backend applications have access to this endpoint.
   * @summary Update user private data
   * @param {string} userId The ID of the user whose private data should be updated.
   * @param {UpdatePrivateDataRequest} updatePrivateDataRequest The update private data request.
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
   * Returns the public data associated with the specified user. This data is typically non-sensitive and may be user-editable.
   * @summary Get user public data
   * @param {string} userId The ID of the user whose public data should be retrieved.
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
   * Updates specified fields within the user\'s public data. Only the data provided in the request will be updated. Field values can be strings, booleans, numbers, arrays, or objects. To unset a key, pass a `null` value for that key.
   * @summary Update user public data
   * @param {string} userId The ID of the user whose public data should be updated.
   * @param {UpdatePublicDataRequest} updatePublicDataRequest The update public data request.
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
   * Retrieves a paginated list of IP addresses that have been blocked for the specified user. Each blocked IP entry includes details about the login attempts and the block duration. The endpoint allows you to specify optional search parameters to filter and refine the results.
   * @summary Get all blocked IPs
   * @param {string} userId The ID of the user whose blocked IP addresses should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [filter] A query filter to apply when searching for blocked IPs.
   * @param {string} [sort] The sort criteria in \'sort_key:sort_order\' format. Sort order can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'block_until\' and \'last_login_attempt\'.
   * @returns UserIpAccessDetails[] - Successfully retrieved user\&#39;s blocked IP addresses
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
   * Removes the block on a specified IP address associated with the user, restoring the ability for the IP address to authenticate the user. If \'all\' is passed in the IP address field, all blocked IP addresses associated with the user will be unblocked.
   * @summary Unblock an IP address
   * @param {string} userId The ID of the user whose IP address should be unblocked.
   * @param {UnblockIpRequest} unblockIpRequest The unblock IP request
   * @returns User - Successfully unblocked an IP address
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
   * Retrieves a paginated list of sessions for a specific user. Each entry includes details about the session, including its activity, location, IP address, and other relevant information. The endpoint allows you to specify optional search parameters to filter and refine the results.
   * @summary Get all sessions
   * @param {string} userId The ID of the user whose sessions should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [clientId] The client ID by which the user sessions should be filtered.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'session_id\', \'initiated_at\', \'expires_at\', and \'last_updated\'.
   * @returns UserSession[] - Successfully retrieved user\&#39;s sessions
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUserSessions(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
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

    if (clientId !== undefined && clientId !== null) {
      request.queryParams.clientId = String(clientId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSession[]>(request);
  }

  /**
   * Revokes the specified session, effectively logging the user out of that session and invalidating any tokens associated with it.
   * @summary Revoke a session
   * @param {string} userId The ID of the user whose session should be revoked.
   * @param {string} sessionId The ID of the session to revoke.
   * @returns Successfully revoked user\&#39;s session
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
   * Removes the specified passkey from the user\'s account, thereby revoking the ability to authenticate using that passkey.
   * @summary Remove passkey
   * @param {string} userId The ID of the user from whose account the passkey should be removed.
   * @param {string} passkeyId The ID of the passkey to remove.
   * @returns Successfully removed a passkey from the user\&#39;s account
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removePasskey(
    userId: string,
    passkeyId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/passkeys/{passkey_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'passkey_id'}}`, encodeURIComponent(String(passkeyId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Removes an external authenticator, such as Google, from the user\'s account, thereby revoking the ability to authenticate using the provider.
   * @summary Disconnect external authenticator
   * @param {string} userId The ID of the user from whom the external authenticator should be disconnected.
   * @param {ExternalAuthenticatorDisconnectRequest} externalAuthenticatorDisconnectRequest The disconnected external authenticator request.
   * @returns User - Successfully disconnected the external authenticator
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public externalAuthenticatorDisconnect(
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

  /**
   * Retrieves a paginated list of groups that the specified user is assigned to.
   * @summary Get all user\'s groups
   * @param {string} userId The ID of the user whose group assignments should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  The acceptable sort key is \'creation_time\'.
   * @returns UserGroup[] - Successfully retrieved user\&#39;s group assignments
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUserGroups(
    userId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserGroup[]>> {
    const url = `/users/{user_id}/groups`.replace(
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

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserGroup[]>(request);
  }

  /**
   * Fetches details about a user\'s association with a group, including the group\'s name and the time when the user was added to the group.
   * @summary Get a user group
   * @param {string} userId The ID of the user whose group association should be retrieved.
   * @param {string} groupId The ID of the group to which the user is assigned.
   * @returns UserGroup - Successfully retrieved the user\&#39;s group association
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public findUserGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<UserGroup>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserGroup>(request);
  }

  /**
   * Assigns a user to a group.
   * @summary Assign user to group
   * @param {string} userId The ID of the user to be assigned to the group.
   * @param {string} groupId The ID of the group to which the user will be assigned.
   * @returns Successfully assigned the user to the group
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public assignUserToGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<null>(request);
  }

  /**
   * Removes the user from the specified group.
   * @summary Remove user from group
   * @param {string} userId The ID of the user to be removed from the group.
   * @param {string} groupId The ID of the group from which the user should be removed.
   * @returns Successfully removed user from group
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removeUserFromGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Retrieves a paginated list of users assigned to a specific group, including their profile information. The endpoint allows you to specify optional search parameters to filter and refine the results.
   * @summary Get all users in group
   * @param {string} groupId The ID of the group whose users should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [filter] A query filter to apply when searching for users.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'creation_time\', and \'last_updated\'.
   * @returns UserSummary[] - Successfully retrieved users in group
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllGroupAssignedUsers(
    groupId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserSummary[]>> {
    const url = `/users/groups/{group_id}/assigned`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
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

    return this.processPaginatedRequest<UserSummary[]>(request);
  }
}
