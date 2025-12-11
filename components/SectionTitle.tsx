import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  className?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ en, ja, className = "", light = false }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="inline-block relative">
        <h2 className={`relative z-10 text-lg font-black tracking-widest uppercase mb-1 ${light ? 'text-pop-yellow' : 'text-pop-greenaccent'}`}>
          {en}
        </h2>
        {/* Background blob for fun */}
        <div className={`absolute -top-2 -left-4 w-8 h-8 rounded-full opacity-50 z-0 ${light ? 'bg-white/20' : 'bg-pop-yellow'}`}></div>
      </div>
      
      <p className={`relative inline-block text-3xl md:text-4xl font-extrabold ${light ? 'text-white' : 'text-slate-800'}`}>
        <span className="relative z-10">{ja}</span>
        {/* Highlighter marker effect */}
        <span className={`absolute bottom-1 left-0 w-full h-3 -rotate-1 rounded-full z-0 opacity-70 ${light ? 'bg-pop-purple' : 'bg-pop-greenlight'}`}></span>
      </p>
    </div>
  );
};