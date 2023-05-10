import { ExternalAuthenticators } from './external-authenticators';

/**
 * The User IDP Summary response class
 * @export
 * @interface UserIdPSummary
 */
export interface UserIdPSummary {
  /**
   * Specifies the External Authenticator.
   * @type {ExternalAuthenticators}
   * @memberof UserIdPSummary
   */
  authenticator: ExternalAuthenticators;
  /**
   * Specifies the idp user Id.
   * @type {string}
   * @memberof UserIdPSummary
   */
  provider_user_id: string;
}
