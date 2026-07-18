/**
 * Tiny classname joiner — filters falsy values so conditional classes stay
 * readable without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
