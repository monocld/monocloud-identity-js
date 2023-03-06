import { AuthenticationMethods } from './authentication-methods';
import { IDPs } from './idps';

/**
 * The User Email response class
 * @export
 * @interface UserEmail
 */
export interface UserEmail {
  /**
   * Unique identifier of the user email.
   * @type {string}
   * @memberof UserEmail
   */
  id: string;
  /**
   * Specifies whether the email is the primary email of the user.
   * @type {boolean}
   * @memberof UserEmail
   */
  primary: boolean;
  /**
   * A list of identity providers the email is connected to.
   * @type {Array<IDPs>}
   * @memberof UserEmail
   */
  idps: Array<IDPs>;
  /**
   * A list of authentication methods the email is connected to.
   * @type {Array<AuthenticationMethods>}
   * @memberof UserEmail
   */
  authentication_methods: Array<AuthenticationMethods>;
  /**
   * Specifies whether the email is verified or not.
   * @type {boolean}
   * @memberof UserEmail
   */
  verified: boolean;
  /**
   * The email id.
   * @type {string}
   * @memberof UserEmail
   */
  email: string;
}
