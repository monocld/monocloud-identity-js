/**
 * The Update Claims Request.
 * @export
 * @interface UpdateClaimsRequest
 */
export interface UpdateClaimsRequest {
  /**
   * The user\'s full name.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  name?: string | null;
  /**
   * The user\'s given (first) name.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  given_name?: string | null;
  /**
   * The user\'s middle name or initial.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  middle_name?: string | null;
  /**
   * The user\'s family (last) name.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  family_name?: string | null;
  /**
   * The user\'s preferred nickname.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  nickname?: string | null;
  /**
   * The URI pointing to the user\'s profile picture.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  picture?: string | null;
}
