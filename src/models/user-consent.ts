import { UserConsentScope } from './user-consent-scope';

/**
 * The User Consent response class
 * @export
 * @interface UserConsent
 */
export interface UserConsent {
  /**
   * The unique ID of the grant.
   * @type {string}
   * @memberof UserConsent
   */
  id: string;
  /**
   * The unique ID of the client for which the grant was issued.
   * @type {string}
   * @memberof UserConsent
   */
  client_id: string;
  /**
   * The time (in Epoch) at which the grant was created.
   * @type {number}
   * @memberof UserConsent
   */
  creation_time: number;
  /**
   * A list of consented scopes.
   * @type {UserConsentScope[]}
   * @memberof UserConsent
   */
  scopes: UserConsentScope[];
}
