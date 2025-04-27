'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {useRef} from 'react';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';

export default function AboutPage() {
  const t = (useTranslations as any)('About');
  const ref = useRef(null);

  const iconVariants = {
    rest: {rotate: 0},
    hover: {
      rotate: [0, -20, 20, -10, 10, 0],
      transition: {duration: 1, ease: 'easeInOut'}
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-4 space-y-16 relative"
      ref={ref}
    >
      {/* About Us */}
      <motion.div
        initial={{opacity: 0.2, y: 80, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          {t('aboutTitle')}
        </h2>
        <p className="text-lg leading-relaxed text-secondary-foreground/75 whitespace-pre-line text-center">
          {t('aboutP1')}
        </p>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{opacity: 0.2, y: 80, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          {t('valuesTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              initial={{opacity: 0, y: 35}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.9}}
              whileHover="hover"
              animate="rest"
            >
              <Card className="rounded-2xl  cursor-default shadow-md bg-background/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <motion.span variants={iconVariants}>🚀</motion.span>
                    {t(`value${num}Title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-foreground/75 text-sm leading-relaxed">
                    {t(`value${num}`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why One Place */}
      <motion.div
        initial={{opacity: 0.2, y: 80, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        <h2 className="text-4xl font-bold text-center mb-6">{t('whyTitle')}</h2>
        <p className="text-lg leading-relaxed text-secondary-foreground/75  whitespace-pre-line text-center">
          {t('whyP1')}
        </p>
        <p className="mt-6 text-xl font-semibold text-secondary-foreground/75 text-center">
          {t('whyCallToAction')}
        </p>
      </motion.div>
    </section>
  );
}
