'use client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {ChevronLeft, ChevronRight, Quote} from 'lucide-react';
import {arAboutCarousel, enAboutCarousel} from '@/constant';
import {useLocale} from 'next-intl';
export default function InrefaceCarousel() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const content = locale === 'en' ? enAboutCarousel : arAboutCarousel;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-2xl  px-4 mx-auto    ">
      <Card className="relative p-4  border rounded-2xl bg-background/60">
        <Quote className="absolute top-4 right-4  text-secondary-foreground w-8 h-8" />
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-16 h-16 border">
            <AvatarImage
              src={content[currentIndex].avatar}
              alt={content[currentIndex].name}
            />
            <AvatarFallback>
              {content[currentIndex].name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-1 text-lg">
            {content[currentIndex].name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-secondary-foreground text-base ">
          <div className="space-y-4 leading-relaxed  whitespace-pre-line">
            {content[currentIndex].paragraph}
          </div>
          <div className="flex justify-between gap-4 mt-1">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              {isRTL ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              {isRTL ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
