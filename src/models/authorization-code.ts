/**
 * The Authorization Code response class
 * @export
 * @interface AuthorizationCode
 */
export interface AuthorizationCode {
  /**
   * The unique ID of the grant.
   * @type {string}
   * @memberof AuthorizationCode
   */
  id: string;
  /**
   * The unique ID of the client for which the grant was issued.
   * @type {string}
   * @memberof AuthorizationCode
   */
  client_id: string;
  /**
   * The time (in Epoch) at which the grant was created.
   * @type {number}
   * @memberof AuthorizationCode
   */
  creation_time: number;
  /**
   * The unique ID of the session
   * @type {string}
   * @memberof AuthorizationCode
   */
  session_id?: string | null;
  /**
   * A list of scopes that were requested.
   * @type {string[]}
   * @memberof AuthorizationCode
   */
  authorized_scopes: string[];
  /**
   * The time (in Epoch) at which the code will expire.
   * @type {number}
   * @memberof AuthorizationCode
   */
  expiration?: number | null;
}
