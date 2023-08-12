/**
 * The Update Public Data Request class.
 * @export
 * @interface UpdatePublicDataRequest
 */
export interface UpdatePublicDataRequest {
  /**
   * User\' Public Data
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePublicDataRequest
   */
  public_data: Record<string, any>;
}
