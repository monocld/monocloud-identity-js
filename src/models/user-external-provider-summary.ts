import { ExternalAuthenticators } from './external-authenticators';

/**
 * The User External Provider summary response class
 * @export
 * @interface UserExternalProviderSummary
 */
export interface UserExternalProviderSummary {
  /**
   * Specifies the External Authenticator.
   * @type {ExternalAuthenticators}
   * @memberof UserExternalProviderSummary
   */
  authenticator: ExternalAuthenticators;
  /**
   * Specifies the idp user Id.
   * @type {string}
   * @memberof UserExternalProviderSummary
   */
  provider_user_id: string;
}
