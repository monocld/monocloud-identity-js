/**
 * The User Ip Access Details response class
 * @export
 * @interface UserIpAccessDetails
 */
export interface UserIpAccessDetails {
  /**
   * Number of unsuccessful sign-ins.
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  failure_count: number;
  /**
   * Specifies the time upto which the user is blocked.
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  block_until?: number | null;
  /**
   * Total number of sign-in attempts.
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  sign_in_attempts_count: number;
  /**
   * Specifies the ip address from which the sign in attempt was made.
   * @type {string}
   * @memberof UserIpAccessDetails
   */
  ip: string;
  /**
   * Specifies the time (in Epoch) at which the last sign in attempt was made.
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  last_sign_in_attempt: number;
}
