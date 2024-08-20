/**
 * The User Group response class
 * @export
 * @interface UserGroup
 */
export interface UserGroup {
  /**
   * Unique ID of the group
   * @type {string}
   * @memberof UserGroup
   */
  group_id: string;
  /**
   * The user ID
   * @type {string}
   * @memberof UserGroup
   */
  user_id: string;
  /**
   * Specifies the creation time of the user group (in Epoch).
   * @type {number}
   * @memberof UserGroup
   */
  creation_time: number;
  /**
   * Name of the group
   * @type {string}
   * @memberof UserGroup
   */
  group_name: string;
}
