import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import { CreateGroupRequest, Group, PatchGroupRequest } from '../models';

export class GroupsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get all groups
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the groups needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'type\', \'name\', \'clients_assigned\', \'users_assigned\', \'last_assigned\', \'creation_time\', and \'last_updated\'
   * @returns Group[] - Successfully retrieved groups
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public getAllGroups(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Group[]>> {
    const url = `/groups`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<Group[]>(request);
  }

  /**
   *
   * @summary Create a group
   * @param {CreateGroupRequest} createGroupRequest Group\'s data
   * @returns Group - Created
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public createGroup(
    createGroupRequest: CreateGroupRequest
  ): Promise<MonoCloudResponse<Group>> {
    const url = `/groups`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createGroupRequest;

    return this.processRequest<Group>(request);
  }

  /**
   *
   * @summary Get a group
   * @param {string} groupId Group Id
   * @returns Group - Successfully retrieved the group
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public findGroupById(groupId: string): Promise<MonoCloudResponse<Group>> {
    const url = `/groups/{group_id}`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Group>(request);
  }

  /**
   *
   * @summary Delete a group
   * @param {string} groupId Group Id
   * @returns Successfully deleted the group
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public deleteGroup(groupId: string): Promise<MonoCloudResponse<null>> {
    const url = `/groups/{group_id}`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update a group
   * @param {string} groupId Group Id
   * @param {PatchGroupRequest} patchGroupRequest Data to be updated
   * @returns Group - Successfully updated the fields for the group
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public patchGroup(
    groupId: string,
    patchGroupRequest: PatchGroupRequest
  ): Promise<MonoCloudResponse<Group>> {
    const url = `/groups/{group_id}`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchGroupRequest;

    return this.processRequest<Group>(request);
  }
}
