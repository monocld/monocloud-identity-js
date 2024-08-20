/**
 * The Create Group Request class.
 * @export
 * @interface CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * Gets or sets the name for this group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  name: string;
  /**
   * Gets or sets the description for this group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  description?: string | null;
  /**
   * Specifies if the group should be assigned to new users by default
   * @type {boolean}
   * @memberof CreateGroupRequest
   */
  is_auto_assigned?: boolean;
}
