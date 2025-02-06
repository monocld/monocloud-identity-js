/**
 * The User Client Grants response class
 * @export
 * @interface UserClientGrants
 */
export interface UserClientGrants {
  /**
   * The unique ID of the client for which the grants were issued.
   * @type {string}
   * @memberof UserClientGrants
   */
  client_id: string;
  /**
   * Specifies whether or not the user has consented any scopes for the client.
   * @type {boolean}
   * @memberof UserClientGrants
   */
  consented: boolean;
  /**
   * The number of refresh tokens issued.
   * @type {number}
   * @memberof UserClientGrants
   */
  refresh_tokens: number;
  /**
   * The number of reference tokens issued.
   * @type {number}
   * @memberof UserClientGrants
   */
  reference_tokens: number;
  /**
   * The number of authorization codes issued.
   * @type {number}
   * @memberof UserClientGrants
   */
  authorization_codes: number;
}
