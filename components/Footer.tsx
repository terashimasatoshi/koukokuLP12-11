import React from 'react';
import { SALON_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-400 py-12 px-4 text-center pb-24 md:pb-12 border-t border-slate-100">
      <h2 className="font-sans font-black text-2xl text-slate-800 mb-2 tracking-widest">{SALON_INFO.name}</h2>
      <p className="text-xs font-bold mb-8 bg-pop-greenlight/50 text-pop-greenaccent inline-block px-3 py-1 rounded-full">{SALON_INFO.concept}</p>
      
      <div className="flex justify-center space-x-6 text-sm font-bold mb-8">
        <a 
          href={SALON_INFO.instagramUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-pop-green transition-colors"
        >
          Instagram
        </a>
        <a 
          href={SALON_INFO.blogUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-pop-green transition-colors"
        >
          Blog
        </a>
        <a 
          href={SALON_INFO.bookingUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-pop-green transition-colors"
        >
          Official Web
        </a>
      </div>
      
      <p className="text-[10px] font-bold tracking-wider text-slate-300">
        &copy; {new Date().getFullYear()} {SALON_INFO.name}. All Rights Reserved.
      </p>
    </footer>
  );
};