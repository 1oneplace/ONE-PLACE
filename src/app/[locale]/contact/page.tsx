'use client';

import {useEffect} from 'react';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import toast from 'react-hot-toast';
import CtaButton from '@/components/CtaButton';
import {useForm} from 'react-hook-form';

export default function ContactPage() {
  const {
    register,
    formState: {errors, isSubmitting},
    reset,
    handleSubmit
  } = useForm();
  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email?.message as string);
    }
    if (errors.name) {
      toast.error(errors.name?.message as string);
    }
    if (errors.message) {
      toast.error(errors.message?.message as string);
    }
  }, [errors]);
  const t = (useTranslations as any)('Contact');

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if (res.ok) {
        toast.success('Message Sent Successfully');
      } else {
        toast.error('Newtwork Error');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Server Connection Error');
    } finally {
      reset();
    }
  };

  return (
    <main className="px-6 py-12 space-y-6">
      <motion.section
        initial={{opacity: 0, y: 60}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-secondary-foreground/75 max-w-xl mx-auto mb-2">
          {t('description')}
        </p>

        <CtaButton></CtaButton>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                const form = event.target as HTMLElement;
                const closestForm = form.closest('form') as HTMLFormElement;
                closestForm?.requestSubmit(); // This will submit the form and trigger the server action
              }
            }}
            className="space-y-4"
          >
            <input
              {...(register('name'), {required: true})}
              placeholder={t('form.name')}
              className="w-full border rounded-lg p-3"
            />
            <input
              type="email"
              {...(register('email'), {required: true})}
              placeholder={t('form.email')}
              className="w-full border rounded-lg p-3"
            />
            <textarea
              {...(register('message'), {required: true})}
              placeholder={t('form.message')}
              className="w-full border rounded-lg p-3 h-32"
            />
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-blue-600 text-primary-foreground px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {isSubmitting ? 'sending ...' : t('form.submit')}
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          className="space-y-4 text-sm text-secondary-foreground/75"
        >
          {t('values.mapEmbed') && (
            <iframe
              src={t('values.mapEmbed')}
              loading="lazy"
              className="w-full h-64 rounded-lg "
              allowFullScreen
            ></iframe>
          )}
          <p>
            <strong> {t('info.phone')}:</strong> {t('values.phone')}
          </p>
          <p>
            <strong> {t('info.email')}:</strong> {t('values.email')}
          </p>
        </motion.div>
      </section>
    </main>
  );
}
