import { UserEmail } from './user-email';
import { UserIdPSummary } from './user-id-psummary';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * The User Summary response class
 * @export
 * @interface UserSummary
 */
export interface UserSummary {
  /**
   * Unique identifier of the user.
   * @type {string}
   * @memberof UserSummary
   */
  user_id: string;
  /**
   * Specifies whether the account has been disabled.
   * @type {boolean}
   * @memberof UserSummary
   */
  disabled: boolean;
  /**
   * User Claims.
   * @type {{ [key: string]: any; }}
   * @memberof UserSummary
   */
  claims: { [key: string]: any };
  /**
   * List of registered emails of user.
   * @type {UserEmail[]}
   * @memberof UserSummary
   */
  emails: UserEmail[];
  /**
   * List of registered phones of user.
   * @type {UserPhone[]}
   * @memberof UserSummary
   */
  phone_numbers: UserPhone[];
  /**
   * List of registered usernames of user.
   * @type {UserUsername[]}
   * @memberof UserSummary
   */
  usernames: UserUsername[];
  /**
   * List of registered idps of user.
   * @type {UserIdPSummary[]}
   * @memberof UserSummary
   */
  idps: UserIdPSummary[];
  /**
   * Specifies the creation time of the user (in Epoch).
   * @type {number}
   * @memberof UserSummary
   */
  creation_time: number;
  /**
   * Specifies the last update time of the user (in Epoch).
   * @type {number}
   * @memberof UserSummary
   */
  last_updated: number;
  /**
   * Specifies whether the user has a password.
   * @type {boolean}
   * @memberof UserSummary
   */
  has_password: boolean;
  /**
   * Specifies the time (in Epoch) of last password update.
   * @type {number}
   * @memberof UserSummary
   */
  password_updated_at?: number | null;
}
