import { UserEmail } from './user-email';
import { UserIdP } from './user-id-p';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * The User With Access Details Response Class
 * @export
 * @interface UserWithAccessDetails
 */
export interface UserWithAccessDetails {
  /**
   * Unique identifier of the user.
   * @type {string}
   * @memberof UserWithAccessDetails
   */
  user_id: string;
  /**
   * Specifies whether the account has been disabled.
   * @type {boolean}
   * @memberof UserWithAccessDetails
   */
  disabled: boolean;
  /**
   * User Claims.
   * @type {{ [key: string]: any; }}
   * @memberof UserWithAccessDetails
   */
  claims: { [key: string]: any };
  /**
   * User Public Data.
   * @type {{ [key: string]: any; }}
   * @memberof UserWithAccessDetails
   */
  public_data: { [key: string]: any };
  /**
   * Custom Private Data.
   * @type {{ [key: string]: any; }}
   * @memberof UserWithAccessDetails
   */
  private_data: { [key: string]: any };
  /**
   * List of registered emails of user.
   * @type {Array<UserEmail>}
   * @memberof UserWithAccessDetails
   */
  emails: Array<UserEmail>;
  /**
   * List of registered phones of user.
   * @type {Array<UserPhone>}
   * @memberof UserWithAccessDetails
   */
  phone_numbers: Array<UserPhone>;
  /**
   * List of registered usernames of user.
   * @type {Array<UserUsername>}
   * @memberof UserWithAccessDetails
   */
  usernames: Array<UserUsername>;
  /**
   * List of registered idps of user.
   * @type {Array<UserIdP>}
   * @memberof UserWithAccessDetails
   */
  idps: Array<UserIdP>;
  /**
   * Specifies the creation time of the user (in Epoch).
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  creation_time: number;
  /**
   * Specifies the last update time of the user (in Epoch).
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  last_updated: number;
  /**
   * Specifies whether the user has a password.
   * @type {boolean}
   * @memberof UserWithAccessDetails
   */
  has_password: boolean;
  /**
   * Specifies the time (in Epoch) of last password update.
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  password_updated_at?: number | null;
  /**
   * Total number of sign-in attempts.
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  sign_in_count: number;
  /**
   * Specifies the ip address from which the last sign in attempt was made.
   * @type {string}
   * @memberof UserWithAccessDetails
   */
  last_sign_in_ip?: string | null;
  /**
   * Specifies the time (in Epoch) at which the last sign in attempt was made.
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  last_sign_in_attempt?: number | null;
}
