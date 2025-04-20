'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '@/i18n/navigation';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <div
      className={clsx(
        'group inline-block px-2 py-3 transition-colors font-medium',
        isActive
          ? 'text-foreground'
          : 'text-foreground/50 hover:text-foreground'
      )}
    >
      <Link
        aria-current={isActive ? 'page' : undefined}
        href={href}
        {...rest}
      />

      <span
        className={clsx(
          'block max-w-0 group-hover:max-w-full transition-all duration-600 h-1 bg-foreground ',
          isActive && 'max-w-full'
        )}
      ></span>
    </div>
  );
}
