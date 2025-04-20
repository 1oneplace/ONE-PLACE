'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Moon, Sun} from 'lucide-react';

export default function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        variant="outline"
        size="icon"
        className="rounded-full"
        aria-label="Toggle theme"
      >
        {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
