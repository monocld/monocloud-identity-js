/**
 * The Unblock Ip Request class.
 * @export
 * @interface UnblockIpRequest
 */
export interface UnblockIpRequest {
  /**
   * The ip address to be unblocked. Use \'all\' for unblocking all the ip addresses.
   * @type {string}
   * @memberof UnblockIpRequest
   */
  ip_address: string;
}
