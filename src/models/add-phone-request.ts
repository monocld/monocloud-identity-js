/**
 * The Add Phone Request.
 * @export
 * @interface AddPhoneRequest
 */
export interface AddPhoneRequest {
  /**
   * The phone number to add, starting with a `+` followed by the country code.
   * @type {string}
   * @memberof AddPhoneRequest
   */
  phone_number: string;
  /**
   * Indicates whether the phone number is verified.
   * @type {boolean}
   * @memberof AddPhoneRequest
   */
  is_verified: boolean;
  /**
   * Specifies whether the phone restriction checks should be skipped.
   * @type {boolean}
   * @memberof AddPhoneRequest
   */
  skip_restriction_checks: boolean;
}
