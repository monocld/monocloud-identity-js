/**
 * The Disable User Request class.
 * @export
 * @interface DisableUserRequest
 */
export interface DisableUserRequest {
  /**
   * Indicates whether to revoke all sessions associated with the user when disabling the account.
   * @type {boolean}
   * @memberof DisableUserRequest
   */
  revoke_sessions?: boolean;
}
