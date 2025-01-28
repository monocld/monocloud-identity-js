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
   * The username.
   * @type {string}
   * @memberof UserUsername
   */
  username: string;
  /**
   * Specifies where the username was originally collected from.
   * @type {string}
   * @memberof UserUsername
   */
  source?: string | null;
}
