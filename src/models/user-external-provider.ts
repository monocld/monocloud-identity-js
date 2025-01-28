import { ExternalAuthenticators } from './external-authenticators';

/**
 * The User External Provider response class
 * @export
 * @interface UserExternalProvider
 */
export interface UserExternalProvider {
  /**
   * Specifies the External Authenticator.
   * @type {ExternalAuthenticators}
   * @memberof UserExternalProvider
   */
  authenticator: ExternalAuthenticators;
  /**
   * Specifies the idp user Id.
   * @type {string}
   * @memberof UserExternalProvider
   */
  provider_user_id: string;
  /**
   * Claims related to the idp.
   * @type {{ [key: string]: any; }}
   * @memberof UserExternalProvider
   */
  claims: Record<string, any>;
}
