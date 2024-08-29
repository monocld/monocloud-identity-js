/**
 * The Create Group Request class.
 * @export
 * @interface CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * The name of the group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  name: string;
  /**
   * The description of the group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  description?: string | null;
  /**
   * Specifies whether the group should be assigned to new users by default.
   * @type {boolean}
   * @memberof CreateGroupRequest
   */
  is_auto_assigned?: boolean;
}
