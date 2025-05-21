import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet';
import {List} from 'lucide-react';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = (useTranslations as any)('NavItems');

  return (
    <div className="text-foreground border-b border-border">
      <nav className="flex justify-between items-center p-2 ">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <div className="hover:translate-y-1 duration-700 transition-all">
                <List size={32} strokeWidth={2.5} className="cursor-pointer" />
              </div>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <SheetContent side="top">
              <div className="flex flex-col justify-center items-center gap-6 text-lg font-medium mt-5">
                <NavigationLink href="/">{t('home')}</NavigationLink>

                <NavigationLink href={'/services' as any}>
                  {t('services')}
                </NavigationLink>

                <NavigationLink href={'/blog' as any}>
                  {t('blog')}
                </NavigationLink>
                <NavigationLink href={'/contact' as any}>
                  {t('contact')}
                </NavigationLink>
                <NavigationLink href={'/about' as any}>
                  {t('about')}
                </NavigationLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex  justify-between items-center">
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href={'/services' as any}>
            {t('services')}
          </NavigationLink>

          <NavigationLink href={'/blog' as any}>{t('blog')}</NavigationLink>
          <NavigationLink href={'/contact' as any}>
            {t('contact')}
          </NavigationLink>
          <NavigationLink href={'/about' as any}>{t('about')}</NavigationLink>
        </div>
        <Link href="/">
          <div className="relative w-20 h-16">
            <Image
              src="/images/nav-logo.png"
              className="rounded-xl object-cover"
              fill
              alt="one place logo "
            ></Image>
          </div>
        </Link>
      </nav>
    </div>
  );
}
