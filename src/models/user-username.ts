import { Authenticators } from './authenticators';
import { IdPs } from './id-ps';

/**
 * The User Username response class
 * @export
 * @interface UserUsername
 */
export interface UserUsername {
  /**
   * Unique identifier of the user email.
   * @type {string}
   * @memberof UserUsername
   */
  id: string;
  /**
   * Specifies whether the username is the primary username of the user.
   * @type {boolean}
   * @memberof UserUsername
   */
  primary: boolean;
  /**
   * A list of identity providers the username is connected to.
   * @type {IdPs[]}
   * @memberof UserUsername
   */
  idps: IdPs[];
  /**
   * A list of authenticators the username is connected to.
   * @type {Authenticators[]}
   * @memberof UserUsername
   */
  authenticators: Authenticators[];
  /**
   * The username.
   * @type {string}
   * @memberof UserUsername
   */
  username: string;
}
