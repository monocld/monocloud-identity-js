/**
 * The Update Public Data Request class.
 * @export
 * @interface UpdatePublicDataRequest
 */
export interface UpdatePublicDataRequest {
  /**
   * An object containing fields to update within the user\'s public data. Only the data provided in the object will be updated. Field values can be strings, booleans, numbers, arrays, or objects. To unset a key, pass a null value for that key.
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePublicDataRequest
   */
  public_data: Record<string, any>;
}
