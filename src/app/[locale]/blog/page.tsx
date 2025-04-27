'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {fadeUp, staggerContainer} from '@/lib/animations';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

const blogPosts = (t: (key: string) => string) => [
  {
    slug: 'strategic-planning',
    title: t('Blog.blog1Title'),
    intro: t('Blog.blog1Intro')
  },
  {
    slug: 'brand-identity',
    title: t('Blog.blog2Title'),
    intro: t('Blog.blog2Intro')
  },
  {
    slug: 'purposeful-marketing',
    title: t('Blog.blog3Title'),
    intro: t('Blog.blog3Intro')
  },
  {
    slug: 'scalable-operations',
    title: t('Blog.blog4Title'),
    intro: t('Blog.blog4Intro')
  },
  {
    slug: 'Growth-Synergy',
    title: t('Blog.blog5Title'),
    intro: t('Blog.blog5Intro')
  },
  {
    slug: 'Seamless-Transformation',
    title: t('Blog.blog6Title'),
    intro: t('Blog.blog6Intro')
  }
];

export default function BlogPage() {
  const t = useTranslations();
  const posts = blogPosts(t);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-12 space-y-8"
    >
      <motion.h1 variants={fadeUp} className="text-4xl font-bold text-center">
        {t('Blog.pageTitle')}
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            transition={{delay: index * 0.1}}
          >
            <Card className="group bg-background/40 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)] dark:hover:bg-muted transition-all duration-300">
              <Link href={`/blog/${post.slug}`}>
                <CardContent className="p-6 space-y-4 ">
                  <div className="h-[240px] overflow-hidden">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground ">{post.intro}</p>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm  font-medium text-primary">
                      Read more
                    </span>
                    <ArrowRight className="group-hover:translate-x-3 transition-all"></ArrowRight>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
