'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CtaButton from '@/components/CtaButton';

const iconVariants = {
  rest: {rotate: 0},
  hover: {
    rotate: [0, -20, 20, -10, 10, 0],
    transition: {duration: 1, ease: 'easeInOut'}
  }
};
const cardVariants = {
  rest: {scale: 1},
  hover: {
    scale: 1.05,
    transition: {duration: 0.1, ease: 'easeInOut'}
  }
};
export default function ServicesPage() {
  const t = (useTranslations as any)('Services');

  const serviceAreas = [
    {key: 'area1', emoji: '🧠'},
    {key: 'area2', emoji: '🎨'},
    {key: 'area3', emoji: '📈'},
    {key: 'area4', emoji: '⚙️'},
    {key: 'area5', emoji: '🤝'}
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 space-y-20 relative">
      {/* Intro */}
      <motion.div
        initial={{opacity: 0.2, y: 80, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {t('whatTitle')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto whitespace-pre-line">
          {t('whatP1')}
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial={{opacity: 0.2, y: 80, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
        className="grid md:grid-cols-3 gap-8 cursor-default "
      >
        {serviceAreas.map(({key, emoji}) => (
          <motion.div
            key={key}
            variants={cardVariants}
            whileHover="hover"
            className="group"
          >
            <Card className="rounded-3xl overflow-hidden bg-background/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-3">
                  <motion.span
                    variants={iconVariants}
                    className="inline-block text-2xl"
                  >
                    {emoji}
                  </motion.span>
                  {t(`${key}Title`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="">
                  {t(`${key}List`)
                    .split('\n')
                    .map((item: string, idx: number) => (
                      <p
                        key={idx}
                        className="text-muted-foreground text-sm md:text-base"
                      >
                        • {item}
                      </p>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="">
                  <CtaButton></CtaButton>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{opacity: 0.2, y: 80, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}
      >
        {/* Testimonial Section */}

        <TestimonialCarousel></TestimonialCarousel>
      </motion.div>
    </section>
  );
}
