import { UserEmail } from './user-email';
import { UserIdP } from './user-id-p';
import { UserPasskey } from './user-passkey';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * The User Summary response class
 * @export
 * @interface User
 */
export interface User {
  /**
   * Unique identifier of the user
   * @type {string}
   * @memberof User
   */
  user_id: string;
  /**
   * Specifies whether the account has been disabled
   * @type {boolean}
   * @memberof User
   */
  disabled: boolean;
  /**
   * User\'s Claims
   * @type {{ [key: string]: any; }}
   * @memberof User
   */
  claims: Record<string, any>;
  /**
   * User\'s Public Data
   * @type {{ [key: string]: any; }}
   * @memberof User
   */
  public_data: Record<string, any>;
  /**
   * User\'s Private Data
   * @type {{ [key: string]: any; }}
   * @memberof User
   */
  private_data: Record<string, any>;
  /**
   * List of registered emails of user
   * @type {UserEmail[]}
   * @memberof User
   */
  emails: UserEmail[];
  /**
   * List of registered phones of user
   * @type {UserPhone[]}
   * @memberof User
   */
  phone_numbers: UserPhone[];
  /**
   * Passkey
   * @type {UserPasskey[]}
   * @memberof User
   */
  passkeys: UserPasskey[];
  /**
   * List of registered idps of user
   * @type {UserIdP[]}
   * @memberof User
   */
  idps: UserIdP[];
  /**
   * Specifies the creation time of the user (in Epoch)
   * @type {number}
   * @memberof User
   */
  creation_time: number;
  /**
   * Specifies the last update time of the user (in Epoch)
   * @type {number}
   * @memberof User
   */
  last_updated: number;
  /**
   * Registered username of the user.
   * @type {UserUsername}
   * @memberof User
   */
  username?: UserUsername | null;
  /**
   * Specifies whether the user has a password.
   * @type {boolean}
   * @memberof User
   */
  has_password: boolean;
  /**
   * Specifies the time (in Epoch) of last password update.
   * @type {number}
   * @memberof User
   */
  password_updated_at?: number | null;
}
