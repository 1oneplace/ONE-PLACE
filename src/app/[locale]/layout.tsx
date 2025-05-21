import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {clsx} from 'clsx';
import {Toaster} from 'react-hot-toast';
import {Inter} from 'next/font/google';
import {routing} from '@/i18n/routing';
import Navigation from '@/components/layout/Navigation';
import './styles.css';
// import FloatingModeSwitch from '@/components/layout/FloatingModeSwitch';
import Footer from '@/components/layout/Footer';
import {ThemeProvider} from '@/components/layout/ThemeProvider';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import FloatingCta from '@/components/FloatingCta';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

const inter = Inter({subsets: ['latin']});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata() {
  const t = await (getTranslations as any)('LocaleLayout');
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html
      className="h-full "
      dir={direction}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={clsx(inter.className, 'flex  flex-col relative ')}>
        <NextIntlClientProvider>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false} // set to true if you want to respect OS preference
            disableTransitionOnChange
          >
            <LanguageSwitcher></LanguageSwitcher>
            <FloatingCta></FloatingCta>
            {/* <FloatingModeSwitch></FloatingModeSwitch> */}
            <Navigation></Navigation>
            {children}
            <Footer></Footer>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
