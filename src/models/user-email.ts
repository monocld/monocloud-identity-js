import { Authenticators } from './authenticators';
import { IdPs } from './id-ps';

/**
 * The User Email response class
 * @export
 * @interface UserEmail
 */
export interface UserEmail {
  /**
   * Unique identifier of the user email.
   * @type {string}
   * @memberof UserEmail
   */
  id: string;
  /**
   * Specifies whether the email is the primary email of the user.
   * @type {boolean}
   * @memberof UserEmail
   */
  primary: boolean;
  /**
   * A list of identity providers the email is connected to.
   * @type {IdPs[]}
   * @memberof UserEmail
   */
  idps: IdPs[];
  /**
   * A list of authenticators the email is connected to.
   * @type {Authenticators[]}
   * @memberof UserEmail
   */
  authenticators: Authenticators[];
  /**
   * Specifies whether the email is verified or not.
   * @type {boolean}
   * @memberof UserEmail
   */
  verified: boolean;
  /**
   * The email id.
   * @type {string}
   * @memberof UserEmail
   */
  email: string;
}
