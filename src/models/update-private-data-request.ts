/**
 * The Update Private Data Request class.
 * @export
 * @interface UpdatePrivateDataRequest
 */
export interface UpdatePrivateDataRequest {
  /**
   * An object containing fields to update within the user\'s private data. Only the data provided in the object will be updated. Field values can be strings, booleans, numbers, arrays, or objects. To unset a key, pass a null value for that key.
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePrivateDataRequest
   */
  private_data: Record<string, any>;
}
