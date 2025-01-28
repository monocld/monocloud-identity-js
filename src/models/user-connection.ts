import { IdPs } from './id-ps';

/**
 * The User Connection response class
 * @export
 * @interface UserConnection
 */
export interface UserConnection {
  /**
   * The identity providers the account is connected to.
   * @type {IdPs}
   * @memberof UserConnection
   */
  idp: IdPs;
  /**
   * Specifies the ID of the user in the identity provider.
   * @type {string}
   * @memberof UserConnection
   */
  connection_id: string;
}
