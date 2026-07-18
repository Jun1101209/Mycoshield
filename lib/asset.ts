/**
 * Prefix a public asset path with the deploy base path so images resolve
 * correctly both at the domain root (local dev) and under /mycoshield on
 * GitHub Pages. Pass paths that start with "/".
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}
