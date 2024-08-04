/**
 * The User Passkey response class
 * @export
 * @interface UserPasskey
 */
export interface UserPasskey {
  /**
   * A human-readable name for the passkey
   * @type {string}
   * @memberof UserPasskey
   */
  name?: string | null;
  /**
   * Unique identifier of the passkey received from the authenticator
   * @type {string}
   * @memberof UserPasskey
   */
  passkey_id: string;
  /**
   * Public key of passkey
   * @type {string}
   * @memberof UserPasskey
   */
  public_key: string;
  /**
   * Authenticator Guid of the passkey
   * @type {string}
   * @memberof UserPasskey
   */
  aa_guid: string;
  /**
   * Indicates whether the passkey is backed up by the authenticator
   * @type {boolean}
   * @memberof UserPasskey
   */
  backup_state: boolean;
  /**
   * Indicates whether the passkey is backup eligible. A passkey is considered as a multi-device when it is backup eligible.
   * @type {boolean}
   * @memberof UserPasskey
   */
  backup_eligibility: boolean;
  /**
   * Specifies whether there was a user interaction while authenticating using the passkey.
   * @type {boolean}
   * @memberof UserPasskey
   */
  user_present: boolean;
  /**
   * Specifies whether there was a user verification while authenticating using the passkey.
   * @type {boolean}
   * @memberof UserPasskey
   */
  user_verified: boolean;
  /**
   * The user agent user used to register the passkey.
   * @type {string}
   * @memberof UserPasskey
   */
  user_agent: string;
}
