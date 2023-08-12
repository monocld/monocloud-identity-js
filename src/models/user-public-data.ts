/**
 * The User Public Data response class
 * @export
 * @interface UserPublicData
 */
export interface UserPublicData {
  /**
   * User\' Public Data
   * @type {{ [key: string]: any; }}
   * @memberof UserPublicData
   */
  public_data: Record<string, any>;
}
