/**
 * The Update Public Data Request class.
 * @export
 * @interface UpdatePublicDataRequest
 */
export interface UpdatePublicDataRequest {
  /**
   * The public data of the user.
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePublicDataRequest
   */
  public_data: Record<string, any>;
}
