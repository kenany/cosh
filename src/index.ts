/**
 * Calculate the hyperbolic cosine of a number.
 *
 * Uses the native {@link Math.cosh} when available, falling back to a
 * definition in terms of {@link Math.exp} otherwise.
 *
 * @param x The number to calculate the hyperbolic cosine of.
 * @returns The hyperbolic cosine of `x`.
 *
 * @example
 * ```typescript
 * cosh(1);
 * // => 1.5430806348152437
 * ```
 */
export const cosh: (x: number) => number =
  Math.cosh ??
  function cosh(x: number): number {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  };
