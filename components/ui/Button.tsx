import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'min-h-[44px] px-6 text-sm tracking-tight transition-all duration-200 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-deep ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-surface ' +
  'disabled:cursor-not-allowed disabled:opacity-45';

const variants: Record<Variant, string> = {
  primary:
    'bg-amber-deep text-white shadow-[0_8px_20px_-8px_rgba(217,119,6,0.6)] ' +
    'hover:bg-[#c2410c] hover:shadow-[0_10px_26px_-8px_rgba(217,119,6,0.7)] ' +
    'active:translate-y-px active:bg-[#b45309]',
  outline:
    'border border-hairline bg-surface text-ink ' +
    'hover:border-ink/25 hover:bg-offwhite active:translate-y-px active:bg-mist',
  ghost:
    'text-ink hover:bg-mist active:translate-y-px active:bg-hairline',
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
} & (
  | ({ as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a' } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (props.as === 'a') {
    const { as: _as, ...rest } = props;
    return <a className={classes} {...rest} />;
  }

  const { as: _as, ...rest } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };
  return <button className={classes} {...rest} />;
}
