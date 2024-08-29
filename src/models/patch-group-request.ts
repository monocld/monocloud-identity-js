/**
 * The Patch Group class.
 * @export
 * @interface PatchGroupRequest
 */
export interface PatchGroupRequest {
  /**
   * The name of the group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  name?: string;
  /**
   * The description of the group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  description?: string | null;
  /**
   * Specifies whether the group should be assigned to new users by default.
   * @type {boolean}
   * @memberof PatchGroupRequest
   */
  is_auto_assigned?: boolean;
}
