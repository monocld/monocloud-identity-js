/**
 * The Unblock Ip Request class.
 * @export
 * @interface DisableUserRequest
 */
export interface DisableUserRequest {
  /**
   * Specifies whether to revoke all sessions associated with the user.
   * @type {boolean}
   * @memberof DisableUserRequest
   */
  revoke_sessions?: boolean;
}
