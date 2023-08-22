/**
 *
 * @export
 * @enum {string}
 */

export const IdPs = {
  /**
   *
   */
  Monocloud: 'monocloud',
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
  /**
   *
   */
  Microsoft: 'microsoft',
  /**
   *
   */
  Github: 'github',
  /**
   *
   */
  Gitlab: 'gitlab',
  /**
   *
   */
  Twitter: 'twitter',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type IdPs = (typeof IdPs)[keyof typeof IdPs];
