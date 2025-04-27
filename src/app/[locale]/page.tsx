'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import TypingText from '@/components/TypingText';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import InrefaceCarousel from '@/components/sections/InrefaceCarousel';
import CtaButton from '@/components/CtaButton';

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
      <section className="space-y-4 text-center ">
        <div className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            width={200}
            height={100}
            alt="logo"
            className="rounded-xl "
          ></Image>
        </div>
        <p className="text-5xl font-extrabold text-[#4D4D4D] inline">
          ONE {'   '}
          <span className="text-5xl font-extrabold text-primary inline">
            PLACE
          </span>
        </p>
        <TypingText></TypingText>

        <CtaButton></CtaButton>
      </section>
      <section>
        <InrefaceCarousel></InrefaceCarousel>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <h2 className="text-center text-4xl">{t('ourServices')}</h2>

        <div className="grid gap-6 md:grid-cols-3 ">
          {services.slice(0, 3).map((service, index) => (
            <Card
              key={index}
              className=" hover:scale-105 hover:shadow-md bg-background/40 backdrop-blur-sm cursor-default transition-all"
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
          <Card className=" group transition-all bg-background/40 backdrop-blur-sm hover:bg-secondary max-w-[300px] mt-4 mx-auto duration-400 ">
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

      {/* Our Approach Section */}
      <section className="space-y-8">
        <h2 className="text-center text-4xl">{t('ourApproachTitle')}</h2>
        <p className="text-center max-w-3xl mx-auto text-muted-foreground">
          {t('ourApproachDescription')}
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {t
            .raw('approachSteps')
            .map(
              (step: {title: string; description: string}, index: number) => (
                <Card
                  key={index}
                  className="hover:scale-105 hover:shadow-md transition-all bg-background/40 backdrop-blur-sm cursor-default"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              )
            )}
        </div>

        <div className="flex relative h-[80vh]  justify-center items-center mt-8">
          <Image
            src="/images/en.approach-infographic.png"
            fill
            alt="Approach Infographic"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-8">
        <h2 className="text-center text-4xl">{t('useCasesTitle')}</h2>
        <p className="text-center max-w-3xl mx-auto text-muted-foreground">
          {t('useCasesDescription')}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {t
            .raw('useCases')
            .map(
              (
                useCase: {title: string; description: string},
                index: number
              ) => (
                <Card
                  key={index}
                  className="hover:scale-105 bg-background/40 backdrop-blur-sm hover:shadow-md transition-all cursor-default"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
        </div>
      </section>
    </main>
  );
}
