/**
 * The Update Private Data Request class.
 * @export
 * @interface UpdatePrivateDataRequest
 */
export interface UpdatePrivateDataRequest {
  /**
   * The private data of the user.
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePrivateDataRequest
   */
  private_data: Record<string, any>;
}
