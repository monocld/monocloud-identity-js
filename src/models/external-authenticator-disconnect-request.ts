import { ExternalAuthenticators } from './external-authenticators';

/**
 * The External Authenticator Disconnect Request class.
 * @export
 * @interface ExternalAuthenticatorDisconnectRequest
 */
export interface ExternalAuthenticatorDisconnectRequest {
  /**
   * External Authenticator to be disconnected
   * @type {ExternalAuthenticators}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  authenticator: ExternalAuthenticators;
  /**
   * Provider User Id of the external authenticator.
   * @type {string}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  provider_user_id: string;
}
