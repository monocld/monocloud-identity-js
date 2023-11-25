/**
 * The Create User Request class.
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * The user\'s username
   * @type {string}
   * @memberof CreateUserRequest
   */
  username?: string | null;
  /**
   * The User\'s email
   * @type {string}
   * @memberof CreateUserRequest
   */
  email?: string | null;
  /**
   * Specifies whether the email is verified or not.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  email_verified?: boolean | null;
  /**
   * The user\'s phone number
   * @type {string}
   * @memberof CreateUserRequest
   */
  phone_number?: string | null;
  /**
   * Specifies whether the phone number is verified or not.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  phone_number_verified?: boolean | null;
  /**
   * The password for the user
   * @type {string}
   * @memberof CreateUserRequest
   */
  password?: string | null;
  /**
   * The user\'s name
   * @type {string}
   * @memberof CreateUserRequest
   */
  name?: string | null;
  /**
   * The user\'s first name
   * @type {string}
   * @memberof CreateUserRequest
   */
  given_name?: string | null;
  /**
   * The user\'s middle name
   * @type {string}
   * @memberof CreateUserRequest
   */
  middle_name?: string | null;
  /**
   * The user\'s family name
   * @type {string}
   * @memberof CreateUserRequest
   */
  family_name?: string | null;
  /**
   * The user\'s nickname
   * @type {string}
   * @memberof CreateUserRequest
   */
  nickname?: string | null;
  /**
   * The uri pointing to the user\'s picture
   * @type {string}
   * @memberof CreateUserRequest
   */
  picture?: string | null;
}
