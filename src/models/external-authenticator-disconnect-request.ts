import { ExternalAuthenticators } from './external-authenticators';

/**
 * The External Authenticator Disconnect Request class.
 * @export
 * @interface ExternalAuthenticatorDisconnectRequest
 */
export interface ExternalAuthenticatorDisconnectRequest {
  /**
   * The external authenticator to be disconnected.
   * @type {ExternalAuthenticators}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  authenticator: ExternalAuthenticators;
  /**
   * The ID of the user in the external provider\'s system.
   * @type {string}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  provider_user_id: string;
}
