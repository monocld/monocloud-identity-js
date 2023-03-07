import { AuthenticationMethods } from './authentication-methods';
import { IDPs } from './idps';

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
   * @type {IDPs[]}
   * @memberof UserPhone
   */
  idps: IDPs[];
  /**
   * A list of authentication methods the phone is connected to.
   * @type {AuthenticationMethods[]}
   * @memberof UserPhone
   */
  authentication_methods: AuthenticationMethods[];
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
