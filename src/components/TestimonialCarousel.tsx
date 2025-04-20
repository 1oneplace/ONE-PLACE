'use client';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {ChevronLeft, ChevronRight, Quote} from 'lucide-react';
import {arTestimonials, enTestimonials} from '@/constant';
import {useLocale} from 'next-intl';
export default function TestimonialCarousel() {
  const testimonials = useLocale() === 'en' ? enTestimonials : arTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-2xl  px-4 mx-auto   text-center">
      <Card className="relative p-4  border rounded-2xl bg-secondary">
        <Quote className="absolute top-4 right-4  text-secondary-foreground w-8 h-8" />
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-16 h-16 border">
            <AvatarImage
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
            />
            <AvatarFallback>
              {testimonials[currentIndex].name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="mt-1 text-lg">
            {testimonials[currentIndex].name}
          </CardTitle>
          <p className="text-sm text-secondary-foreground">
            {testimonials[currentIndex].role}
          </p>
        </CardHeader>
        <CardContent className="text-secondary-foreground text-base ">
          <p className="">{testimonials[currentIndex].testimonial}</p>
          <div className="flex justify-between gap-4 mt-1">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
