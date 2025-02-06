/**
 * The User Consent Scope response class
 * @export
 * @interface UserConsentScope
 */
export interface UserConsentScope {
  /**
   * The consented scope name.
   * @type {string}
   * @memberof UserConsentScope
   */
  scope: string;
  /**
   * The time (in Epoch) at which the consent was granted for the scope.
   * @type {number}
   * @memberof UserConsentScope
   */
  granted_on: number;
  /**
   * The time (in Epoch) at which the consent will expire.
   * @type {number}
   * @memberof UserConsentScope
   */
  expiration?: number | null;
}
