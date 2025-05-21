'use client';
import {useTranslations} from 'next-intl';
import TypeIt from 'typeit-react';

const TypingText = () => {
  const t = (useTranslations as any)('home');
  return (
    <div className="text-foreground font-semibold text-xl">
      <TypeIt
        options={{
          cursor: false,
          speed: 50,
          deleteSpeed: 50,
          loop: true,
          breakLines: false // Prevents new lines
        }}
        getBeforeInit={(instance) => {
          instance.type(t('slogan')).pause(1300).delete().go();
          return instance;
        }}
      />
    </div>
  );
};

export default TypingText;
