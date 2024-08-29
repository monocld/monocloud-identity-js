/**
 * The Unblock IP Request class.
 * @export
 * @interface UnblockIpRequest
 */
export interface UnblockIpRequest {
  /**
   * The IP address to be unblocked. Use \'all\' to unblock all IP addresses associated with the user.
   * @type {string}
   * @memberof UnblockIpRequest
   */
  ip_address: string;
}
