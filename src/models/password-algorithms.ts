/**
 *
 * @export
 * @enum {string}
 */

export const PasswordAlgorithms = {
  /**
   *
   */
  BCrypt: 'b_crypt',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PasswordAlgorithms =
  (typeof PasswordAlgorithms)[keyof typeof PasswordAlgorithms];
