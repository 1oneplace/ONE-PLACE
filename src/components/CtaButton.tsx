'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Button} from './ui/button';

const CtaButton = () => {
  const t = (useTranslations as any)('Contact');
  return (
    <div className=" ">
      <Button className="">
        <div className="flex justify-between items-center gap-3">
          <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.72 13.06c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.5.06-.24-.12-1-.38-1.9-1.22-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.82-.2-.48-.4-.42-.54-.42h-.46c-.18 0-.46.06-.7.34s-.92.9-.92 2.2.94 2.54 1.08 2.74c.14.18 1.86 2.92 4.5 4.1.63.27 1.12.44 1.5.56.63.2 1.2.18 1.64.1.5-.08 1.52-.62 1.74-1.22.22-.6.22-1.12.16-1.22-.06-.1-.24-.16-.54-.3zM12 2C6.48 2 2 6.48 2 12c0 2.12.56 4.18 1.64 6L2 22l4.16-1.1A9.963 9.963 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.84 0-3.62-.5-5.16-1.44l-.36-.22-2.54.68.68-2.48-.24-.38A7.962 7.962 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />{' '}
          </svg>
          <Link href={t('values.whatsapp')} target="_blank">
            {t('info.ctaText')}
          </Link>
        </div>
      </Button>
    </div>
  );
};

export default CtaButton;
