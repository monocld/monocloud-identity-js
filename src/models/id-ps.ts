/**
 *
 * @export
 * @enum {string}
 */

export const IdPs = {
  /**
   *
   */
  MonoCloud: 'mono_cloud',
  /**
   *
   */
  Google: 'google',
  /**
   *
   */
  Apple: 'apple',
  /**
   *
   */
  Facebook: 'facebook',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type IdPs = (typeof IdPs)[keyof typeof IdPs];
