import { UserSessionMetadata } from './user-session-metadata';

/**
 * The User Session response class
 * @export
 * @interface UserSession
 */
export interface UserSession {
  /**
   * Unique identifier of the session
   * @type {string}
   * @memberof UserSession
   */
  session_id: string;
  /**
   * Specifies the creation time of the session (in Epoch)
   * @type {number}
   * @memberof UserSession
   */
  creation_time: number;
  /**
   * Specifies the last update time of the session (in Epoch)
   * @type {number}
   * @memberof UserSession
   */
  last_updated: number;
  /**
   * Specifies the expiry time of the session (in Epoch)
   * @type {number}
   * @memberof UserSession
   */
  expires: number;
  /**
   * Specifies the metadata associated with the session (in Epoch)
   * @type {UserSessionMetadata}
   * @memberof UserSession
   */
  metadata: UserSessionMetadata;
}
