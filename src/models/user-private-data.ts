/**
 * The User Private Data response class
 * @export
 * @interface UserPrivateData
 */
export interface UserPrivateData {
  /**
   * Custom Private Data.
   * @type {{ [key: string]: any; }}
   * @memberof UserPrivateData
   */
  private_data: Record<string, any>;
}
