import { Authenticators } from './authenticators';
import { IdPs } from './id-ps';

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
   * A list of identity providers the phone is connected to.
   * @type {IdPs[]}
   * @memberof UserPhone
   */
  idps: IdPs[];
  /**
   * A list of authenticators the phone is connected to.
   * @type {Authenticators[]}
   * @memberof UserPhone
   */
  authenticators: Authenticators[];
  /**
   * Specifies whether the phone is verified or not.
   * @type {boolean}
   * @memberof UserPhone
   */
  verified: boolean;
  /**
   * The phone number.
   * @type {string}
   * @memberof UserPhone
   */
  phone: string;
}
