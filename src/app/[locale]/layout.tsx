import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {routing} from '@/i18n/routing';
import Navigation from '@/components/Layout/Navigation';
import './styles.css';
import FloatingModeSwitch from '@/components/Layout/FloatingModeSwitch';
import Footer from '@/components/Layout/Footer';
import {ThemeProvider} from '@/components/Layout/ThemeProvider';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

const inter = Inter({subsets: ['latin']});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

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
      className="h-full"
      dir={direction}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={clsx(inter.className, 'flex  flex-col mx-4 ')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <FloatingModeSwitch></FloatingModeSwitch>
            <Navigation />
            {children}
          </NextIntlClientProvider>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
