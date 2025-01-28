/**
 * The User Phone response class
 * @export
 * @interface UserPhone
 */
export interface UserPhone {
  /**
   * Unique identifier of the user phone.
   * @type {string}
   * @memberof UserPhone
   */
  id: string;
  /**
   * Specifies whether the phone is the primary phone of the user.
   * @type {boolean}
   * @memberof UserPhone
   */
  primary: boolean;
  /**
   * Specifies whether the phone is verified or not.
   * @type {boolean}
   * @memberof UserPhone
   */
  verified: boolean;
  /**
   * Specifies where the phone was originally collected from.
   * @type {string}
   * @memberof UserPhone
   */
  source?: string | null;
  /**
   * Specifies where the phone verification was done.
   * @type {string}
   * @memberof UserPhone
   */
  verification_source?: string | null;
  /**
   * The phone number.
   * @type {string}
   * @memberof UserPhone
   */
  phone: string;
}
