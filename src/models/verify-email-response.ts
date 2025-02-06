/**
 * The Verify Email Response
 * @export
 * @interface VerifyEmailResponse
 */
export interface VerifyEmailResponse {
  /**
   * The expiry date for the generated magic link (in epoch).
   * @type {number}
   * @memberof VerifyEmailResponse
   */
  expires_at: number;
  /**
   * Specifies whether the verification email was sent to the user.
   * @type {boolean}
   * @memberof VerifyEmailResponse
   */
  email_sent: boolean;
}
