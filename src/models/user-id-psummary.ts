import { ExternalIDPs } from './external-idps';

/**
 * The User IDP Summary response class
 * @export
 * @interface UserIdPSummary
 */
export interface UserIdPSummary {
  /**
   * Specifies the IDP name.
   * @type {ExternalIDPs}
   * @memberof UserIdPSummary
   */
  idp: ExternalIDPs;
  /**
   * Specifies the idp user Id.
   * @type {string}
   * @memberof UserIdPSummary
   */
  provider_user_id: string;
}
