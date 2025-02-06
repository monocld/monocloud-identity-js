/**
 * The Add Email Request.
 * @export
 * @interface AddEmailRequest
 */
export interface AddEmailRequest {
  /**
   * The email address to add.
   * @type {string}
   * @memberof AddEmailRequest
   */
  email: string;
  /**
   * Indicates whether the email address is verified.
   * @type {boolean}
   * @memberof AddEmailRequest
   */
  is_verified: boolean;
  /**
   * Specifies whether the email restriction checks should be skipped.
   * @type {boolean}
   * @memberof AddEmailRequest
   */
  skip_restriction_checks: boolean;
}
