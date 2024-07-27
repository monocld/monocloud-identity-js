import { UserEmail } from './user-email';
import { UserIdP } from './user-id-p';
import { UserPasskey } from './user-passkey';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * The User With Access Details Response Class
 * @export
 * @interface UserWithAccessDetails
 */
export interface UserWithAccessDetails {
  /**
   * Unique identifier of the user
   * @type {string}
   * @memberof UserWithAccessDetails
   */
  user_id: string;
  /**
   * Specifies whether the account has been disabled
   * @type {boolean}
   * @memberof UserWithAccessDetails
   */
  disabled: boolean;
  /**
   * User\'s Claims
   * @type {{ [key: string]: any; }}
   * @memberof UserWithAccessDetails
   */
  claims: Record<string, any>;
  /**
   * User\'s Public Data
   * @type {{ [key: string]: any; }}
   * @memberof UserWithAccessDetails
   */
  public_data: Record<string, any>;
  /**
   * User\'s Private Data
   * @type {{ [key: string]: any; }}
   * @memberof UserWithAccessDetails
   */
  private_data: Record<string, any>;
  /**
   * List of registered emails of user
   * @type {UserEmail[]}
   * @memberof UserWithAccessDetails
   */
  emails: UserEmail[];
  /**
   * List of registered phones of user
   * @type {UserPhone[]}
   * @memberof UserWithAccessDetails
   */
  phone_numbers: UserPhone[];
  /**
   * List of registered passkeys of user
   * @type {UserPasskey[]}
   * @memberof UserWithAccessDetails
   */
  passkeys: UserPasskey[];
  /**
   * List of registered idps of user
   * @type {UserIdP[]}
   * @memberof UserWithAccessDetails
   */
  idps: UserIdP[];
  /**
   * Specifies the creation time of the user (in Epoch)
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  creation_time: number;
  /**
   * Specifies the last update time of the user (in Epoch)
   * @type {number}
   * @memberof UserWithAccessDetails
   */
  last_updated: number;
  /**
   * Registered username of the user.
   * @type {UserUsername}
   * @memberof UserWithAccessDetails
   */
  username?: UserUsername | null;
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
  /**
   * Specifies whether the user has been locked out.
   * @type {boolean}
   * @memberof UserWithAccessDetails
   */
  blocked: boolean;
}
