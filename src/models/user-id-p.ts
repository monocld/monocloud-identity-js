import { ExternalIDPs } from './external-idps';

/**
 * The User IDP response class
 * @export
 * @interface UserIdP
 */
export interface UserIdP {
  /**
   * Specifies the IDP name.
   * @type {ExternalIDPs}
   * @memberof UserIdP
   */
  idp: ExternalIDPs;
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
