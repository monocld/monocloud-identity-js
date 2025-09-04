import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  AddEmailRequest,
  AddPhoneRequest,
  AuthorizationCode,
  CreateUserRequest,
  DisableUserRequest,
  ExternalAuthenticatorDisconnectRequest,
  ReferenceToken,
  RefreshToken,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SetPasswordRequest,
  UnblockIpRequest,
  UpdateClaimsRequest,
  UpdatePrivateDataRequest,
  UpdatePublicDataRequest,
  UpdateUsernameRequest,
  User,
  UserClientGrants,
  UserConsent,
  UserGroup,
  UserIpAccessDetails,
  UserPrivateData,
  UserPublicData,
  UserSession,
  UserSummary,
  VerifyEmailRequest,
  VerifyEmailResponse,
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
   * @returns User - Successfully retrieved the user
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public findUserById(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<User>(request);
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
   * Adds or updates the user\'s username for the specified user.
   * @summary Add or update username
   * @param {string} userId The ID of the user whose username should be set.
   * @param {UpdateUsernameRequest} updateUsernameRequest The request body.
   * @returns User - Successfully removed user\&#39;s phone
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public updateUsername(
    userId: string,
    updateUsernameRequest: UpdateUsernameRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/username`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    request.body = updateUsernameRequest;

    return this.processRequest<User>(request);
  }

  /**
   * Removes the username from the user profile.
   * @summary Remove username
   * @param {string} userId The ID of the user whose username should be removed.
   * @returns User - Successfully removed user\&#39;s email
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removeUsername(userId: string): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/username`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<User>(request);
  }

  /**
   * Adds the specified email address to the user profile.
   * @summary Add an email
   * @param {string} userId The ID of the user for whom the email should be added.
   * @param {AddEmailRequest} addEmailRequest The request body
   * @returns User - Successfully added the email to user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public addEmail(
    userId: string,
    addEmailRequest: AddEmailRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addEmailRequest;

    return this.processRequest<User>(request);
  }

  /**
   * Removes the specified email from the user profile.
   * @summary Remove an email
   * @param {string} userId The ID of the user whose email should be removed.
   * @param {string} identifierId The ID of the email to be removed.
   * @returns User - Successfully removed user\&#39;s email
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removeEmail(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

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
   * Marks a specific email address for the specified user\'s account as unverified, indicating that the email has not been confirmed and can\'t be trusted for authentication and communication.
   * @summary Mark email as unverified
   * @param {string} userId The ID of the user whose email is to be marked as unverified.
   * @param {string} identifierId The ID of the email to be marked as unverified.
   * @returns User - Successfully marked user\&#39;s email as unverified
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setEmailUnverified(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/emails/{identifier_id}/unverify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * Generates a link and send out an email which can be used to verify the user\'s email.
   * @summary Verify Email
   * @param {string} userId The ID of the user whose email verification link is requested.
   * @param {string} identifierId The ID of the email to be verified.
   * @param {VerifyEmailRequest} verifyEmailRequest
   * @returns VerifyEmailResponse - Successfully generated email verification link for the user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public verifyEmail(
    userId: string,
    identifierId: string,
    verifyEmailRequest: VerifyEmailRequest
  ): Promise<MonoCloudResponse<VerifyEmailResponse>> {
    const url = `/users/{user_id}/emails/{identifier_id}/verify/link`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = verifyEmailRequest;

    return this.processRequest<VerifyEmailResponse>(request);
  }

  /**
   * Adds the specified phone number to the user profile.
   * @summary Add a phone number
   * @param {string} userId The ID of the user for whom the phone number should be added.
   * @param {AddPhoneRequest} addPhoneRequest The request body
   * @returns User - Successfully added the phone to user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public addPhone(
    userId: string,
    addPhoneRequest: AddPhoneRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addPhoneRequest;

    return this.processRequest<User>(request);
  }

  /**
   * Removes the specified phone number from the user profile.
   * @summary Remove a phone number
   * @param {string} userId The ID of the user whose phone number should be removed.
   * @param {string} identifierId The ID of the phone number to be removed.
   * @returns User - Successfully removed user\&#39;s phone
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removePhone(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

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
   * Marks a specific phone number for the specified user\'s account as unverified, indicating that the phone has not been confirmed and can\'t be trusted for authentication and communication.
   * @summary Mark phone as unverified
   * @param {string} userId The ID of the user whose phone is to be marked as unverified.
   * @param {string} identifierId The ID of the phone to be marked as unverified.
   * @returns User - Successfully marked user\&#39;s phone as unverified
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPhoneUnverified(
    userId: string,
    identifierId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/phones/{identifier_id}/unverify`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(
        `{${'identifier_id'}}`,
        encodeURIComponent(String(identifierId))
      );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
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
   * Sets the password for the user with the specified value.
   * @summary Set password
   * @param {string} userId The ID of the user whose password should be set.
   * @param {SetPasswordRequest} setPasswordRequest The set password request.
   * @returns User - Successfully set the password
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPassword(
    userId: string,
    setPasswordRequest: SetPasswordRequest
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/password`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    request.body = setPasswordRequest;

    return this.processRequest<User>(request);
  }

  /**
   * Removes the password from the specified user.
   * @summary Remove password
   * @param {string} userId The ID of the user whose password should be removed.
   * @returns Successfully removed password from the user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removePassword(userId: string): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/password`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Requires the user to reset their password on the next password sign-in.
   * @summary Require user password reset
   * @param {string} userId The ID of the user.
   * @returns User - Successfully marked password reset as required for the user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public setPasswordResetRequired(
    userId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/password/force_reset`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<User>(request);
  }

  /**
   * Removes the requirement for the user to reset their password on the next password sign-in.
   * @summary Remove user password reset requirement
   * @param {string} userId The ID of the user.
   * @returns User - Successfully marked password reset as not required for the user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public removePasswordResetRequired(
    userId: string
  ): Promise<MonoCloudResponse<User>> {
    const url = `/users/{user_id}/password/force_reset`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<User>(request);
  }

  /**
   * Generates a link and send out an email which can be used to reset the user password.
   * @summary Password Reset
   * @param {string} userId The ID of the user whose password reset link is requested.
   * @param {ResetPasswordRequest} resetPasswordRequest
   * @returns ResetPasswordResponse - Successfully generated password reset link for the user.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public resetPassword(
    userId: string,
    resetPasswordRequest: ResetPasswordRequest
  ): Promise<MonoCloudResponse<ResetPasswordResponse>> {
    const url = `/users/{user_id}/password/reset`.replace(
      `{${'user_id'}}`,
      encodeURIComponent(String(userId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = resetPasswordRequest;

    return this.processRequest<ResetPasswordResponse>(request);
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
   * Retrieves a paginated list of IP addresses that have been blocked for the specified user. Each blocked IP entry includes details about the sign-in attempts and the block duration. The endpoint allows you to specify optional search parameters to filter and refine the results.
   * @summary Get all blocked IPs
   * @param {string} userId The ID of the user whose blocked IP addresses should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [filter] A query filter to apply when searching for blocked IPs.
   * @param {string} [sort] The sort criteria in \'sort_key:sort_order\' format. Sort order can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'block_until\' and \'last_sign_in_attempt\'.
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
      request.queryParams.client_id = String(clientId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserSession[]>(request);
  }

  /**
   * Retrieves a specific user session.
   * @summary Get a user session
   * @param {string} userId The ID of the user whose session should be retrieved.
   * @param {string} sessionId The ID of the user session to be retrieved
   * @returns UserSession - Successfully retrieved the user session
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public findUserSession(
    userId: string,
    sessionId: string
  ): Promise<MonoCloudResponse<UserSession>> {
    const url = `/users/{user_id}/sessions/{session_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'session_id'}}`, encodeURIComponent(String(sessionId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<UserSession>(request);
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
   * @returns UserGroup - Successfully assigned the user to the group
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public assignUserToGroup(
    userId: string,
    groupId: string
  ): Promise<MonoCloudResponse<UserGroup>> {
    const url = `/users/{user_id}/groups/{group_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<UserGroup>(request);
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

  /**
   * Retrieves a paginated list of client grants for a specific user.
   * @summary Get all client grants
   * @param {string} userId The ID of the user whose grants should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @returns UserClientGrants[] - Successfully retrieved user\&#39;s client grants
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUserClientGrants(
    userId: string,
    page?: number,
    size?: number
  ): Promise<MonoCloudPageResponse<UserClientGrants[]>> {
    const url = `/users/{user_id}/grants/clients`.replace(
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

    return this.processPaginatedRequest<UserClientGrants[]>(request);
  }

  /**
   * Retrieves a paginated list of consents for a specific user.
   * @summary Get all consents
   * @param {string} userId The ID of the user whose consents should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [clientId] The client ID by which the grants should be filtered.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'creation_time\' and \'expiration\'.
   * @returns UserConsent[] - Successfully retrieved user\&#39;s consents
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllUserConsents(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<UserConsent[]>> {
    const url = `/users/{user_id}/grants/consents`.replace(
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
      request.queryParams.client_id = String(clientId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<UserConsent[]>(request);
  }

  /**
   * Retrieves a paginated list of reference tokens for a specific user.
   * @summary Get all reference tokens
   * @param {string} userId The ID of the user whose tokens should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [clientId] The client ID by which the grants should be filtered.
   * @param {string} [sessionId] The session ID by which the grants should be filtered.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'creation_time\' and \'expiration\'.
   * @returns ReferenceToken[] - Successfully retrieved user\&#39;s reference tokens
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllReferenceTokens(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sessionId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<ReferenceToken[]>> {
    const url = `/users/{user_id}/grants/reference_tokens`.replace(
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
      request.queryParams.client_id = String(clientId);
    }

    if (sessionId !== undefined && sessionId !== null) {
      request.queryParams.session_id = String(sessionId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<ReferenceToken[]>(request);
  }

  /**
   * Retrieves a paginated list of refresh tokens for a specific user.
   * @summary Get all refresh tokens
   * @param {string} userId The ID of the user whose tokens should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [clientId] The client ID by which the grants should be filtered.
   * @param {string} [sessionId] The session ID by which the grants should be filtered.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'creation_time\' and \'expiration\'.
   * @returns RefreshToken[] - Successfully retrieved user\&#39;s refresh tokens
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllRefreshTokens(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sessionId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<RefreshToken[]>> {
    const url = `/users/{user_id}/grants/refresh_tokens`.replace(
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
      request.queryParams.client_id = String(clientId);
    }

    if (sessionId !== undefined && sessionId !== null) {
      request.queryParams.session_id = String(sessionId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<RefreshToken[]>(request);
  }

  /**
   * Retrieves a paginated list of authorization codes for a specific user.
   * @summary Get all authorization codes
   * @param {string} userId The ID of the user whose authorization codes should be retrieved.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [clientId] The client ID by which the grants should be filtered.
   * @param {string} [sessionId] The session ID by which the grants should be filtered.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'creation_time\' and \'expiration\'.
   * @returns AuthorizationCode[] - Successfully retrieved user\&#39;s authorization codes
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public getAllAuthorizationCodes(
    userId: string,
    page?: number,
    size?: number,
    clientId?: string,
    sessionId?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<AuthorizationCode[]>> {
    const url = `/users/{user_id}/grants/codes`.replace(
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
      request.queryParams.client_id = String(clientId);
    }

    if (sessionId !== undefined && sessionId !== null) {
      request.queryParams.session_id = String(sessionId);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<AuthorizationCode[]>(request);
  }

  /**
   * Revokes all grants for the specified client.
   * @summary Revoke client grants
   * @param {string} userId The ID of the user whose token should be revoked.
   * @param {string} clientId The ID of the client whose grants should be revoked.
   * @returns Successfully revoked all grants.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public revokeUserClientGrants(
    userId: string,
    clientId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/clients/{client_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Revokes the consent for the specified user.
   * @summary Revoke a consent
   * @param {string} userId The ID of the user whose consent should be revoked.
   * @param {string} consentId The ID of the consent to be revoked.
   * @returns Successfully revoked user\&#39;s consent
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public revokeUserConsent(
    userId: string,
    consentId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/consents/{consent_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'consent_id'}}`, encodeURIComponent(String(consentId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Revokes the specified reference token for the user.
   * @summary Revoke a reference token
   * @param {string} userId The ID of the user whose token should be revoked.
   * @param {string} tokenId The ID of the token to be revoked.
   * @returns Successfully revoked reference token.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public revokeReferenceToken(
    userId: string,
    tokenId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/reference_tokens/{token_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'token_id'}}`, encodeURIComponent(String(tokenId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Revokes the specified refresh token for the user.
   * @summary Revoke a refresh token
   * @param {string} userId The ID of the user whose token should be revoked.
   * @param {string} tokenId The ID of the token to be revoked.
   * @returns Successfully revoked refresh token.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public revokeRefreshToken(
    userId: string,
    tokenId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/refresh_tokens/{token_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'token_id'}}`, encodeURIComponent(String(tokenId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Revokes the specified authorization code for the user.
   * @summary Revoke an authorization code
   * @param {string} userId The ID of the user whose authorization code should be revoked.
   * @param {string} codeId The ID of the authorization code to be revoked.
   * @returns Successfully revoked the authorization code.
   * @throws {MonoCloudException}
   * @memberof UsersClient
   *
   */
  public revokeAuthorizationCode(
    userId: string,
    codeId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/users/{user_id}/grants/codes/{code_id}`
      .replace(`{${'user_id'}}`, encodeURIComponent(String(userId)))
      .replace(`{${'code_id'}}`, encodeURIComponent(String(codeId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
