import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  src: string;
  alt: string;
  href?: string;
}

interface LogoStripProps {
  logos: Logo[];
  className?: string;
}

export const LogoStrip: React.FC<LogoStripProps> = ({ logos, className }) => {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (src: string) => {
    setFailedImages(prev => new Set(prev).add(src));
  };

  const LogoBadge: React.FC<{ logo: Logo }> = ({ logo }) => {
    const content = (
      <div className="flex items-center justify-center h-20 px-6 border border-border rounded-xl bg-transparent hover:border-slate-400 hover:translate-y-[-1px] transition-all duration-200 focus-within:outline focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-1">
        {failedImages.has(logo.src) ? (
          <span className="text-lg font-semibold text-foreground whitespace-nowrap">
            {logo.alt}
          </span>
        ) : (
          <img
            src={`/logos/${logo.src}`}
            alt={logo.alt}
            className="h-12 md:h-14 w-auto object-contain"
            onError={() => handleImageError(logo.src)}
          />
        )}
      </div>
    );

    if (logo.href) {
      return (
        <a
          href={logo.href}
          className="inline-block focus:outline-none"
        >
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <section className={cn("w-full", className)}>
      {/* Hairline divider */}
      <div className="w-full h-px bg-border mb-2"></div>
      
      <div className="container mx-auto px-5 md:px-6 max-w-[1200px] py-2">
        <ul 
          role="list" 
          aria-label="Integraties en koppelingen"
          className="flex flex-wrap gap-5 md:gap-7 items-center justify-start
                     md:flex-wrap
                     overflow-x-auto scrollbar-hide snap-x snap-mandatory
                     md:overflow-visible"
        >
          {logos.map((logo, index) => (
            <li key={index} className="flex-shrink-0 snap-start">
              <LogoBadge logo={logo} />
            </li>
          ))}
        </ul>
      </div>
      
      <div className="w-full h-px bg-border mt-2"></div>
    </section>
  );
};