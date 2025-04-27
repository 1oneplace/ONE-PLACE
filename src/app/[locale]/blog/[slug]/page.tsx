'use client';
import {useTranslations} from 'next-intl';
import {use} from 'react';
import {notFound} from 'next/navigation';
import {motion} from 'framer-motion';
import {fadeUp, staggerContainer} from '@/lib/animations';
import {Separator} from '@/components/ui/separator';

type BlogContent = {
  title: string;
  content: string[];
};

export default function BlogPostPage({
  params
}: {
  params: Promise<{slug: string}>;
}) {
  const t = (useTranslations as any)('Blog');
  const {slug} = use(params);

  const blogMap: Record<string, BlogContent> = {
    'strategic-planning': {
      title: t('blog1Title'),
      content: t.raw('blog1Content') as string[]
    },
    'brand-identity': {
      title: t('blog2Title'),
      content: t.raw('blog2Content') as string[]
    },
    'purposeful-marketing': {
      title: t('blog3Title'),
      content: t.raw('blog3Content') as string[]
    },
    'scalable-operations': {
      title: t('blog4Title'),
      content: t.raw('blog4Content') as string[]
    },
    'Growth-Synergy': {
      title: t('blog5Title'),
      content: t.raw('blog5Content') as string[]
    },
    'Seamless-Transformation': {
      title: t('blog6Title'),
      content: t.raw('blog6Content') as string[]
    }
  };

  const blog = blogMap[slug];

  if (!blog) return notFound();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-12 max-w-3xl space-y-6  h-[80vh]"
    >
      <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
        {blog.title}
      </motion.h1>

      <Separator />

      {blog.content.map((paragraph, idx) => (
        <motion.p
          key={idx}
          variants={fadeUp}
          transition={{delay: idx * 0.1}}
          className="text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.section>
  );
}
