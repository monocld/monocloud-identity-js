import { UserSessionMetadata } from './user-session-metadata';

/**
 * The User Session response class
 * @export
 * @interface UserSession
 */
export interface UserSession {
  /**
   * The unique ID of the session
   * @type {string}
   * @memberof UserSession
   */
  session_id: string;
  /**
   * The list of client ids which are associated with the session
   * @type {string[]}
   * @memberof UserSession
   */
  client_ids: string[];
  /**
   * The initial time when the session was created
   * @type {number}
   * @memberof UserSession
   */
  initiated_at: number;
  /**
   * The expiration time of the session
   * @type {number}
   * @memberof UserSession
   */
  expires_at: number;
  /**
   * The last updated time
   * @type {number}
   * @memberof UserSession
   */
  last_updated: number;
  /**
   * The last session metadata
   * @type {UserSessionMetadata}
   * @memberof UserSession
   */
  last_metadata: UserSessionMetadata;
}
