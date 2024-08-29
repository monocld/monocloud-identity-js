import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import { CreateGroupRequest, Group, PatchGroupRequest } from '../models';

export class GroupsClient extends MonoCloudClientBase {
  /**
   * Retrieves a paginated list of groups. The endpoint allows you to specify optional search parameters to filter and refine the results.
   * @summary Get all groups
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of items per page.
   * @param {string} [filter] A query filter to apply when searching for groups.
   * @param {string} [sort] Specifies the sort criteria in the \'sort_key:sort_order\' format. The sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'type\', \'clients_assigned\', \'users_assigned\', \'last_assigned\', \'creation_time\', and \'last_updated\'.
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
   * Creates a group that can be used to organize users, and manage access control.
   * @summary Create a group
   * @param {CreateGroupRequest} createGroupRequest The create group request.
   * @returns Group - Successfully created the group
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
   * Retrieves details about a specific group using its ID.
   * @summary Get a group
   * @param {string} groupId The ID of the group to retrieve.
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
   * Permanently deletes a group and unassigns all users associated with it. This action is irreversible.
   * @summary Delete a group
   * @param {string} groupId The ID of the group to be deleted.
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
   * Updates specified fields within the group. Only the data provided in the request will be updated.
   * @summary Update a group
   * @param {string} groupId The ID of the group to be updated.
   * @param {PatchGroupRequest} patchGroupRequest The update group request.
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
