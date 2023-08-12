/**
 * The Update Private Data Request class.
 * @export
 * @interface UpdatePrivateDataRequest
 */
export interface UpdatePrivateDataRequest {
  /**
   * User\'s Private Data
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePrivateDataRequest
   */
  private_data: Record<string, any>;
}
