/**
 * The Patch Group class.
 * @export
 * @interface PatchGroupRequest
 */
export interface PatchGroupRequest {
  /**
   * Gets or sets the name for this group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  name?: string;
  /**
   * Gets or sets the description for this group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  description?: string | null;
  /**
   * Specifies if the group should be assigned to new users by default
   * @type {boolean}
   * @memberof PatchGroupRequest
   */
  is_auto_assigned?: boolean;
}
