import { UserConnection } from './user-connection';
import { UserEmail } from './user-email';
import { UserExternalProvider } from './user-external-provider';
import { UserPasskey } from './user-passkey';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * The User Response
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
   * List of providers that the user account is connected to
   * @type {UserConnection[]}
   * @memberof User
   */
  connections: UserConnection[];
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
   * List of registered passkeys of user
   * @type {UserPasskey[]}
   * @memberof User
   */
  passkeys: UserPasskey[];
  /**
   * A flag indicating that the user must change their password on next sign-in
   * @type {boolean}
   * @memberof User
   */
  force_password_reset: boolean;
  /**
   * List of registered external providers of user
   * @type {UserExternalProvider[]}
   * @memberof User
   */
  external_providers: UserExternalProvider[];
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
  /**
   * Specifies the time (in Epoch) at which the user will be unblocked.
   * @type {number}
   * @memberof User
   */
  block_until?: number | null;
  /**
   * Total number of sign-in failures since the last sign-in was successful.
   * @type {number}
   * @memberof User
   */
  failure_count: number;
  /**
   * Total number of sign-in attempts.
   * @type {number}
   * @memberof User
   */
  sign_in_attempts_count: number;
  /**
   * Specifies the time (in Epoch) at which the last sign in attempt was made.
   * @type {number}
   * @memberof User
   */
  last_sign_in_attempt?: number | null;
  /**
   * Specifies the ip address from which the last sign in attempt was made.
   * @type {string}
   * @memberof User
   */
  last_sign_in_attempt_ip?: string | null;
  /**
   * Total number of successful sign-ins.
   * @type {number}
   * @memberof User
   */
  sign_in_success_count: number;
  /**
   * Specifies the time (in Epoch) of the last successful sign-in.
   * @type {number}
   * @memberof User
   */
  last_sign_in_success?: number | null;
  /**
   * Specifies the ip address of the last successful sign-in.
   * @type {string}
   * @memberof User
   */
  last_sign_in_success_ip?: string | null;
  /**
   * Specifies the time (in Epoch) at which the last activity of the user was recorded.
   * @type {number}
   * @memberof User
   */
  last_activity?: number | null;
  /**
   * The last known city of the user.
   * @type {string}
   * @memberof User
   */
  last_known_city?: string | null;
  /**
   * The last known country of the user.
   * @type {string}
   * @memberof User
   */
  last_known_country?: string | null;
  /**
   * The last known region of the user.
   * @type {string}
   * @memberof User
   */
  last_known_region?: string | null;
}
