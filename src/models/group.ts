import { GroupTypes } from './group-types';

/**
 * The Group response class
 * @export
 * @interface Group
 */
export interface Group {
  /**
   * Unique identifier of the group
   * @type {string}
   * @memberof Group
   */
  group_id: string;
  /**
   * Specifies the type of the group
   * @type {GroupTypes}
   * @memberof Group
   */
  type: GroupTypes;
  /**
   * The name of the group.
   * @type {string}
   * @memberof Group
   */
  name: string;
  /**
   * The description of the group.
   * @type {string}
   * @memberof Group
   */
  description?: string | null;
  /**
   * Specifies whether the group should be assigned to new users by default.
   * @type {boolean}
   * @memberof Group
   */
  is_auto_assigned: boolean;
  /**
   * The number of users assigned to the group
   * @type {number}
   * @memberof Group
   */
  users_assigned: number;
  /**
   * The number of clients assigned to the group
   * @type {number}
   * @memberof Group
   */
  clients_assigned: number;
  /**
   * Specifies the creation time of the group (in Epoch)
   * @type {number}
   * @memberof Group
   */
  creation_time: number;
  /**
   * Specifies the last update time of the group (in Epoch)
   * @type {number}
   * @memberof Group
   */
  last_updated: number;
  /**
   * Specifies the last assigned time of the group (in Epoch)
   * @type {number}
   * @memberof Group
   */
  last_assigned: number;
}
