import { PasswordAlgorithms } from './password-algorithms';

/**
 * The Set Password Request class.
 * @export
 * @interface SetPasswordRequest
 */
export interface SetPasswordRequest {
  /**
   * The password for the user, which will be used for authentication.
   * @type {string}
   * @memberof SetPasswordRequest
   */
  password?: string | null;
  /**
   * The password hash for the user, which will be used for authentication.
   * @type {string}
   * @memberof SetPasswordRequest
   */
  password_hash?: string | null;
  /**
   * The algorithm used the hash the password for the user.
   * @type {PasswordAlgorithms}
   * @memberof SetPasswordRequest
   */
  password_hash_algorithm?: PasswordAlgorithms;
  /**
   * Specifies whether the specified password is temporary and will require the user to reset their password on the next sign-in.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  is_temporary_password?: boolean;
  /**
   * Specifies whether the password policy check should be skipped.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  skip_password_policy_checks?: boolean;
  /**
   * Indicates whether to revoke all sessions associated with the user when updating the password.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  revoke_sessions?: boolean;
}
