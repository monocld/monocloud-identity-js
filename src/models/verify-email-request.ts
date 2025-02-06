/**
 * The Verify Email Request.
 * @export
 * @interface VerifyEmailRequest
 */
export interface VerifyEmailRequest {
  /**
   * Specifies the expiry time for the verification link (in seconds).
   * @type {number}
   * @memberof VerifyEmailRequest
   */
  expiry?: number | null;
}
