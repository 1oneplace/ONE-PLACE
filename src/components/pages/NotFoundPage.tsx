import {useTranslations} from 'next-intl';
import {Button} from '../ui/button';
import Link from 'next/link';

export default function NotFoundPage() {
  const t = (useTranslations as any)('NotFoundPage');

  return (
    <div className="h-[65vh] flex justify-center items-center flex-col gap-6">
      <h1 className=" max-w-[360px] text-4xl font-semibold ">{t('title')}</h1>
      <p className=" max-w-[360px] ">{t('description')}</p>

      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
