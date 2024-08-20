/**
 *
 * @export
 * @enum {string}
 */

export const GroupTypes = {
  /**
   *
   */
  BuiltIn: 'built_in',
  /**
   *
   */
  Custom: 'custom',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type GroupTypes = (typeof GroupTypes)[keyof typeof GroupTypes];
