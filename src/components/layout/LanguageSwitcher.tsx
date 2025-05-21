'use client';

import {useTransition} from 'react';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import {Button} from '@/components/ui/button';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale = locale === 'en' ? 'ar' : 'en';

  const toggleLocale = () => {
    startTransition(() => {
      // This will replace the locale without nesting paths
      router.replace(pathname, {locale: otherLocale});
    });
  };

  return (
    <div className="fixed bottom-8 left-3 z-50">
      <Button
        variant="outline"
        className="rounded-full uppercase h-16 w-16"
        onClick={toggleLocale}
        disabled={isPending}
      >
        {otherLocale}
      </Button>
    </div>
  );
}
