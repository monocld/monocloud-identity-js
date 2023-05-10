import { ExternalAuthenticators } from './external-authenticators';

/**
 * The User IDP response class
 * @export
 * @interface UserIdP
 */
export interface UserIdP {
  /**
   * Specifies the External Authenticator.
   * @type {ExternalAuthenticators}
   * @memberof UserIdP
   */
  authenticator: ExternalAuthenticators;
  /**
   * Specifies the idp user Id.
   * @type {string}
   * @memberof UserIdP
   */
  provider_user_id: string;
  /**
   * Claims related to the idp.
   * @type {{ [key: string]: any; }}
   * @memberof UserIdP
   */
  claims: { [key: string]: any };
}
