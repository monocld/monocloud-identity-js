import { UserConnection } from './user-connection';
import { UserEmail } from './user-email';
import { UserExternalProviderSummary } from './user-external-provider-summary';
import { UserPasskey } from './user-passkey';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * The User Summary response class
 * @export
 * @interface UserSummary
 */
export interface UserSummary {
  /**
   * Unique identifier of the user
   * @type {string}
   * @memberof UserSummary
   */
  user_id: string;
  /**
   * Specifies whether the account has been disabled
   * @type {boolean}
   * @memberof UserSummary
   */
  disabled: boolean;
  /**
   * List of providers that the user account is connected to
   * @type {UserConnection[]}
   * @memberof UserSummary
   */
  connections: UserConnection[];
  /**
   * User\'s Claims
   * @type {{ [key: string]: any; }}
   * @memberof UserSummary
   */
  claims: Record<string, any>;
  /**
   * List of registered emails of user
   * @type {UserEmail[]}
   * @memberof UserSummary
   */
  emails: UserEmail[];
  /**
   * List of registered phones of user
   * @type {UserPhone[]}
   * @memberof UserSummary
   */
  phone_numbers: UserPhone[];
  /**
   * List of registered passkeys of user
   * @type {UserPasskey[]}
   * @memberof UserSummary
   */
  passkeys: UserPasskey[];
  /**
   * A flag indicating that the user must change their password on next sign-in
   * @type {boolean}
   * @memberof UserSummary
   */
  force_password_reset: boolean;
  /**
   * List of registered external providers of user
   * @type {UserExternalProviderSummary[]}
   * @memberof UserSummary
   */
  external_providers: UserExternalProviderSummary[];
  /**
   * Specifies the creation time of the user (in Epoch)
   * @type {number}
   * @memberof UserSummary
   */
  creation_time: number;
  /**
   * Specifies the last update time of the user (in Epoch)
   * @type {number}
   * @memberof UserSummary
   */
  last_updated: number;
  /**
   * Registered username of the user.
   * @type {UserUsername}
   * @memberof UserSummary
   */
  username?: UserUsername | null;
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
  /**
   * Specifies the time (in Epoch) at which the user will be unblocked.
   * @type {number}
   * @memberof UserSummary
   */
  block_until?: number | null;
  /**
   * Total number of sign-in failures since the last sign-in was successful.
   * @type {number}
   * @memberof UserSummary
   */
  failure_count: number;
  /**
   * Total number of sign-in attempts.
   * @type {number}
   * @memberof UserSummary
   */
  sign_in_attempts_count: number;
  /**
   * Specifies the time (in Epoch) at which the last sign in attempt was made.
   * @type {number}
   * @memberof UserSummary
   */
  last_sign_in_attempt?: number | null;
  /**
   * Specifies the ip address from which the last sign in attempt was made.
   * @type {string}
   * @memberof UserSummary
   */
  last_sign_in_attempt_ip?: string | null;
  /**
   * Total number of successful sign-ins.
   * @type {number}
   * @memberof UserSummary
   */
  sign_in_success_count: number;
  /**
   * Specifies the time (in Epoch) of the last successful sign-in.
   * @type {number}
   * @memberof UserSummary
   */
  last_sign_in_success?: number | null;
  /**
   * Specifies the ip address of the last successful sign-in.
   * @type {string}
   * @memberof UserSummary
   */
  last_sign_in_success_ip?: string | null;
  /**
   * Specifies the time (in Epoch) at which the last activity of the user was recorded.
   * @type {number}
   * @memberof UserSummary
   */
  last_activity?: number | null;
  /**
   * The last known city of the user.
   * @type {string}
   * @memberof UserSummary
   */
  last_known_city?: string | null;
  /**
   * The last known country of the user.
   * @type {string}
   * @memberof UserSummary
   */
  last_known_country?: string | null;
  /**
   * The last known region of the user.
   * @type {string}
   * @memberof UserSummary
   */
  last_known_region?: string | null;
}
