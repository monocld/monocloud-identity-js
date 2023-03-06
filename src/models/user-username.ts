import { AuthenticationMethods } from './authentication-methods';
import { IDPs } from './idps';

/**
 * The User Username response class
 * @export
 * @interface UserUsername
 */
export interface UserUsername {
  /**
   * Unique identifier of the user email.
   * @type {string}
   * @memberof UserUsername
   */
  id: string;
  /**
   * Specifies whether the username is the primary username of the user.
   * @type {boolean}
   * @memberof UserUsername
   */
  primary: boolean;
  /**
   * A list of identity providers the username is connected to.
   * @type {Array<IDPs>}
   * @memberof UserUsername
   */
  idps: Array<IDPs>;
  /**
   * A list of authentication methods the username is connected to.
   * @type {Array<AuthenticationMethods>}
   * @memberof UserUsername
   */
  authentication_methods: Array<AuthenticationMethods>;
  /**
   * The username.
   * @type {string}
   * @memberof UserUsername
   */
  username: string;
}
