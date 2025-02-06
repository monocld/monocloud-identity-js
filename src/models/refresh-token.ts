/**
 * The Refresh Token response class
 * @export
 * @interface RefreshToken
 */
export interface RefreshToken {
  /**
   * The unique ID of the grant.
   * @type {string}
   * @memberof RefreshToken
   */
  id: string;
  /**
   * The unique ID of the client for which the grant was issued.
   * @type {string}
   * @memberof RefreshToken
   */
  client_id: string;
  /**
   * The time (in Epoch) at which the grant was created.
   * @type {number}
   * @memberof RefreshToken
   */
  creation_time: number;
  /**
   * The unique ID of the session
   * @type {string}
   * @memberof RefreshToken
   */
  session_id?: string | null;
  /**
   * A list of scopes associated with the token.
   * @type {string[]}
   * @memberof RefreshToken
   */
  scopes: string[];
  /**
   * The time (in Epoch) at which the token will expire.
   * @type {number}
   * @memberof RefreshToken
   */
  expiration?: number | null;
  /**
   * The audiences for which the token was issued.
   * @type {string[]}
   * @memberof RefreshToken
   */
  audiences: string[];
  /**
   * The issuer of the token.
   * @type {string}
   * @memberof RefreshToken
   */
  issuer?: string | null;
}
