/**
 * The User Passkey response class
 * @export
 * @interface UserPasskey
 */
export interface UserPasskey {
  /**
   * Id of the passkey
   * @type {string}
   * @memberof UserPasskey
   */
  id: string;
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
  authenticator_id: string;
  /**
   * Indicates whether the passkey is backed up by the authenticator
   * @type {boolean}
   * @memberof UserPasskey
   */
  is_backed_up: boolean;
  /**
   * Indicates whether the passkey is a multi device key. A passkey is multi-device when the passkey is backup eligible.
   * @type {boolean}
   * @memberof UserPasskey
   */
  is_multi_device: boolean;
  /**
   * The user agent user used to register the passkey.
   * @type {string}
   * @memberof UserPasskey
   */
  user_agent: string;
  /**
   * Specifies the creation time of the user (in Epoch).
   * @type {number}
   * @memberof UserPasskey
   */
  creation_time: number;
}
