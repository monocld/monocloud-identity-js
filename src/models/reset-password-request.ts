/**
 * The Reset Password Request.
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
  /**
   * Specifies whether to send the password reset email to the user.
   * @type {boolean}
   * @memberof ResetPasswordRequest
   */
  send_email: boolean;
  /**
   * Specifies the expiry time for the password reset link (in seconds).
   * @type {number}
   * @memberof ResetPasswordRequest
   */
  expiry?: number | null;
}
