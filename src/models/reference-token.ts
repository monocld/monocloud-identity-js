/**
 * The Reference Token response class
 * @export
 * @interface ReferenceToken
 */
export interface ReferenceToken {
  /**
   * The unique ID of the grant.
   * @type {string}
   * @memberof ReferenceToken
   */
  id: string;
  /**
   * The unique ID of the client for which the grant was issued.
   * @type {string}
   * @memberof ReferenceToken
   */
  client_id: string;
  /**
   * The time (in Epoch) at which the grant was created.
   * @type {number}
   * @memberof ReferenceToken
   */
  creation_time: number;
  /**
   * The unique ID of the session
   * @type {string}
   * @memberof ReferenceToken
   */
  session_id?: string | null;
  /**
   * A list of scopes associated with the token.
   * @type {string[]}
   * @memberof ReferenceToken
   */
  scopes: string[];
  /**
   * The time (in Epoch) at which the token will expire.
   * @type {number}
   * @memberof ReferenceToken
   */
  expiration?: number | null;
  /**
   * The audiences for which the token was issued.
   * @type {string[]}
   * @memberof ReferenceToken
   */
  audiences: string[];
  /**
   * The issuer of the token.
   * @type {string}
   * @memberof ReferenceToken
   */
  issuer?: string | null;
}
