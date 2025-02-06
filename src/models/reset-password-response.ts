/**
 * The Reset Password Response
 * @export
 * @interface ResetPasswordResponse
 */
export interface ResetPasswordResponse {
  /**
   * The generated magic link for the password reset request.
   * @type {string}
   * @memberof ResetPasswordResponse
   */
  link: string;
  /**
   * The expiry date for the generated magic link (in epoch).
   * @type {number}
   * @memberof ResetPasswordResponse
   */
  expires_at: number;
  /**
   * Specifies whether the password reset email was sent to the user.
   * @type {boolean}
   * @memberof ResetPasswordResponse
   */
  email_sent: boolean;
}
