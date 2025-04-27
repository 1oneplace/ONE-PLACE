import {useTranslations} from 'next-intl';
import {Mail, Phone, MapPin} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const t = (useTranslations as any)('Footer');

  return (
    <footer className=" text-center text-foreground border-t border-border ">
      <div className="container mx-auto mt-4  px-4 py-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-lg font-bold">{t('brand')}</h2>
          <p className="text-secondary-foreground/70  mt-2">{t('slogan')}</p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-2">{t('contact')}</h3>
          <ul className="text-sm text-secondary-foreground/70  space-y-1">
            <li className="flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${t('email')}`}>{t('email')}</a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${t('phone')}`}>{t('phone')}</a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{t('location')}</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">
            {t('social.follow_us')}
          </h3>
          <div className="flex gap-4 justify-center ">
            <Link
              href={t('social.twitter')}
              target="_blank"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5 text-secondary-foreground/70 hover:text-primary transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.89-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.38 0-4.31 1.93-4.31 4.31 0 .34.04.68.11 1A12.17 12.17 0 013 5.13a4.31 4.31 0 001.33 5.74 4.2 4.2 0 01-1.95-.54v.05c0 2.01 1.43 3.68 3.33 4.06a4.32 4.32 0 01-1.94.07c.55 1.7 2.14 2.94 4.02 2.97A8.62 8.62 0 013 19.54 12.15 12.15 0 009.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0022.46 6z" />
              </svg>
            </Link>
            <Link
              href={t('social.instagram')}
              target="_blank"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-secondary-foreground/70 hover:text-primary transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
              </svg>
            </Link>
            <Link
              href={t('social.linkedin')}
              target="_blank"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-secondary-foreground/70 hover:text-primary transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3a2 2 0 100 4 2 2 0 000-4zM3 8h4v12H3zM8.5 8h3.5v1.837c.497-.94 1.736-1.837 3.375-1.837C18.43 8 20 9.477 20 13.012V20h-4v-6.5c0-1.197-.303-2-1.49-2S13 12.303 13 13.5V20h-4V8z" />
              </svg>
            </Link>
            <Link
              href={t('social.whatsapp')}
              target="_blank"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-secondary-foreground/70 hover:text-primary transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.72 13.06c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.5.06-.24-.12-1-.38-1.9-1.22-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.82-.2-.48-.4-.42-.54-.42h-.46c-.18 0-.46.06-.7.34s-.92.9-.92 2.2.94 2.54 1.08 2.74c.14.18 1.86 2.92 4.5 4.1.63.27 1.12.44 1.5.56.63.2 1.2.18 1.64.1.5-.08 1.52-.62 1.74-1.22.22-.6.22-1.12.16-1.22-.06-.1-.24-.16-.54-.3zM12 2C6.48 2 2 6.48 2 12c0 2.12.56 4.18 1.64 6L2 22l4.16-1.1A9.963 9.963 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.84 0-3.62-.5-5.16-1.44l-.36-.22-2.54.68.68-2.48-.24-.38A7.962 7.962 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />{' '}
              </svg>
            </Link>
            <Link
              href={t('social.facebook')}
              target="_blank"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-secondary-foreground/70 hover:text-primary transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.93H7.5V12h2.5V9.8c0-2.5 1.5-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.87h-2.33V21.8c4.56-.93 8-4.96 8-9.8z" />{' '}
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-4 py-2 text-center text-sm text-secondary-foreground/75">
        {t('copyright')}
      </div>
    </footer>
  );
}
