import {useTranslations} from 'next-intl';
import NavigationLink from './NavigationLink';
import LanguageSwitcher from './LanguageSwitcher';
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

export default function Navigation() {
  const t = (useTranslations as any)('NavItems');

  return (
    <div className=" bg-background text-foreground border-b border-border">
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
                <NavigationLink href="/about">{t('about')}</NavigationLink>
                <NavigationLink href="/services">
                  {t('services')}
                </NavigationLink>
                <NavigationLink href="/profile">{t('profile')}</NavigationLink>
                <NavigationLink href="/blog">{t('blog')}</NavigationLink>
                <NavigationLink href="/contact">{t('contact')}</NavigationLink>
                <LanguageSwitcher></LanguageSwitcher>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex  justify-between items-center">
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/about">{t('about')}</NavigationLink>
          <NavigationLink href="/services">{t('services')}</NavigationLink>
          <NavigationLink href="/profile">{t('profile')}</NavigationLink>
          <NavigationLink href="/blog">{t('blog')}</NavigationLink>
          <NavigationLink href="/contact">{t('contact')}</NavigationLink>
          <LanguageSwitcher></LanguageSwitcher>
        </div>
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            className="rounded-xl"
            width={80}
            height={40}
            alt="one place logo "
          ></Image>
        </Link>
      </nav>
    </div>
  );
}
