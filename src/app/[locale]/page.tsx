'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import TypingText from '@/components/TypingText';
import {ArrowRight} from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function HomePage() {
  const t = (useTranslations as any)('home');

  const services = t.raw('services') as {
    icon: string;
    title: string;
    description: string;
  }[];

  return (
    <main className="space-y-16 px-6 py-12 ">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <h1 className="text-6xl font-bold text-primary">{t('name')}</h1>
        <TypingText></TypingText>
        <Button asChild className="mt-4 text-xl">
          <Link href="/contact">{t('ctaText')}</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <h2 className="text-center text-4xl">{t('ourServices')}</h2>

        <div className="grid gap-6 md:grid-cols-3 ">
          {services.slice(0, 3).map((service, index) => (
            <Card
              key={index}
              className=" hover:scale-105 hover:shadow-md cursor-default transition-all"
            >
              <CardHeader>
                <div className="text-6xl">{service.icon}</div>
                <CardTitle className="text-xl font-medium">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link href="/services ">
          <Card className=" group transition-all hover:bg-secondary max-w-[300px] mt-4 mx-auto duration-400 ">
            <div className="flex justify-between items-center  p-4">
              <div className="flex justify-start items-center  gap-4">
                <p className="my-auto text-primary group-hover:text-foreground">
                  {t('viewAllServices')}
                </p>
              </div>
              <ArrowRight className="text-primary group-hover:translate-x-2 duration-500 group-hover:text-foreground transition-all"></ArrowRight>
            </div>
          </Card>
        </Link>
      </section>
      {/* Testimonial  Section */}

      <section>
        <TestimonialCarousel></TestimonialCarousel>
      </section>

      {/* How We work Section */}
      <section className="rounded-2xl bg-secondary p-10 text-center">
        <h3 className="mb-4 text-2xl font-medium">{t('ctaTitle')}</h3>
        <Button asChild>
          <Link href="/howWeWork">{t('howWeWork')}</Link>
        </Button>
      </section>
    </main>
  );
}
