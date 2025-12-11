import React from 'react';
import { SALON_INFO } from '../constants';
import { Calendar, MousePointerClick } from 'lucide-react';

interface StoreLinksProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'light';
  isVertical?: boolean;
}

export const StoreLinks: React.FC<StoreLinksProps> = ({ className = "", variant = 'primary', isVertical = false }) => {
  // Base: Pill shape, heavy shadow, bounce on hover
  const baseStyles = "relative flex items-center justify-center rounded-full transition-all duration-300 font-bold group shadow-[0_4px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-1 hover:-translate-y-1 overflow-hidden";
  
  const variants = {
    // Green Gradient
    primary: "bg-gradient-to-r from-pop-greenaccent to-pop-green text-white hover:brightness-110",
    // Slate/Dark
    secondary: "bg-slate-700 text-white hover:bg-slate-600",
    // White/Light
    light: "bg-white text-pop-greenaccent border-2 border-pop-green hover:bg-pop-greenlight"
  };

  const currentStyle = variants[variant];

  return (
    <div className={`flex ${isVertical ? 'flex-col space-y-4' : 'flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'} ${className}`}>
      <a 
        href={SALON_INFO.bookingUrls.takayanagi}
        target="_blank"
        rel="noreferrer"
        className={`${baseStyles} ${currentStyle} px-6 py-4 flex-1`}
      >
        <div className="absolute top-0 right-0 p-1 opacity-20">
          <MousePointerClick size={40} />
        </div>
        <div className="flex flex-col items-center relative z-10">
          <span className="text-xs font-bold tracking-widest opacity-90 mb-0.5 bg-white/20 px-2 rounded-full">高柳店</span>
          <span className="text-lg md:text-xl font-black flex items-center">
            <Calendar size={20} className="mr-2 animate-bounce" />
            空席確認・予約
          </span>
        </div>
      </a>
      
      <a 
        href={SALON_INFO.bookingUrls.hanando}
        target="_blank"
        rel="noreferrer"
        className={`${baseStyles} ${currentStyle} px-6 py-4 flex-1`}
      >
        <div className="absolute top-0 right-0 p-1 opacity-20">
          <MousePointerClick size={40} />
        </div>
        <div className="flex flex-col items-center relative z-10">
          <span className="text-xs font-bold tracking-widest opacity-90 mb-0.5 bg-white/20 px-2 rounded-full">花堂店</span>
          <span className="text-lg md:text-xl font-black flex items-center">
            <Calendar size={20} className="mr-2 animate-bounce" />
            空席確認・予約
          </span>
        </div>
      </a>
    </div>
  );
};