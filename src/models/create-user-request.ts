import { PasswordAlgorithms } from './password-algorithms';

/**
 * The Create User Request class.
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * The unique username for the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  username?: string | null;
  /**
   * The user\'s email address.
   * @type {string}
   * @memberof CreateUserRequest
   */
  email?: string | null;
  /**
   * Indicates whether the user\'s email address is verified.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  email_verified?: boolean | null;
  /**
   * The user\'s phone number, starting with a `+` followed by the country code.
   * @type {string}
   * @memberof CreateUserRequest
   */
  phone_number?: string | null;
  /**
   * Indicates whether the user\'s phone number is verified.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  phone_number_verified?: boolean | null;
  /**
   * The password for the user, which will be used for authentication.
   * @type {string}
   * @memberof CreateUserRequest
   */
  password?: string | null;
  /**
   * The password hash for the user, which will be used for authentication.
   * @type {string}
   * @memberof CreateUserRequest
   */
  password_hash?: string | null;
  /**
   * The algorithm used the hash the password for the user.
   * @type {PasswordAlgorithms}
   * @memberof CreateUserRequest
   */
  password_hash_algorithm?: PasswordAlgorithms;
  /**
   * Specifies whether the specified password is temporary and will require the user to reset their password on the next sign-in.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  is_temporary_password?: boolean;
  /**
   * The user\'s full name.
   * @type {string}
   * @memberof CreateUserRequest
   */
  name?: string | null;
  /**
   * The user\'s given (first) name.
   * @type {string}
   * @memberof CreateUserRequest
   */
  given_name?: string | null;
  /**
   * The user\'s middle name or initial.
   * @type {string}
   * @memberof CreateUserRequest
   */
  middle_name?: string | null;
  /**
   * The user\'s family (last) name.
   * @type {string}
   * @memberof CreateUserRequest
   */
  family_name?: string | null;
  /**
   * The user\'s preferred nickname.
   * @type {string}
   * @memberof CreateUserRequest
   */
  nickname?: string | null;
  /**
   * The URI pointing to the user\'s profile picture.
   * @type {string}
   * @memberof CreateUserRequest
   */
  picture?: string | null;
  /**
   * Specifies whether the password policy check should be skipped.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_password_policy_checks?: boolean;
  /**
   * Specifies whether the identifier restriction checks should be skipped.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_identifier_restriction_checks?: boolean;
  /**
   * Specifies whether the users profile should conform to the options requirements.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_conformance_checks?: boolean;
}
