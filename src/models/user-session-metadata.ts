/**
 * The User Session Metadata response class
 * @export
 * @interface UserSessionMetadata
 */
export interface UserSessionMetadata {
  /**
   * The City.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  city?: string | null;
  /**
   * The Country.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  country?: string | null;
  /**
   * The Region.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  region?: string | null;
  /**
   * Latitude.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  latitude?: string | null;
  /**
   * Longitude.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  longitude?: string | null;
  /**
   * Ip Address from which the authentication request was made.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  ip_address?: string | null;
  /**
   * Device information of the authentication request.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  user_agent?: string | null;
}
