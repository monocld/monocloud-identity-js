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
   * Specifies whether the email is verified or not.
   * @type {boolean}
   * @memberof UserEmail
   */
  verified: boolean;
  /**
   * Specifies where the email was originally collected from.
   * @type {string}
   * @memberof UserEmail
   */
  source?: string | null;
  /**
   * Specifies where the email verification was done.
   * @type {string}
   * @memberof UserEmail
   */
  verification_source?: string | null;
  /**
   * The email id.
   * @type {string}
   * @memberof UserEmail
   */
  email: string;
}
