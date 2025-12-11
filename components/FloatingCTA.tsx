import React from 'react';
import { SALON_INFO } from '../constants';
import { MousePointerClick } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex space-x-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
        <a 
          href={SALON_INFO.bookingUrls.takayanagi}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-pop-green to-green-500 text-white py-3 rounded-full shadow-md active:scale-95 transition-transform"
        >
          <span className="text-[10px] font-bold opacity-90 leading-none mb-0.5">高柳店</span>
          <span className="text-sm font-black flex items-center leading-none">
            予約 <MousePointerClick size={14} className="ml-1"/>
          </span>
        </a>
        <a 
          href={SALON_INFO.bookingUrls.hanando}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center bg-slate-800 text-white py-3 rounded-full shadow-md active:scale-95 transition-transform"
        >
          <span className="text-[10px] font-bold opacity-90 leading-none mb-0.5">花堂店</span>
          <span className="text-sm font-black flex items-center leading-none">
            予約 <MousePointerClick size={14} className="ml-1"/>
          </span>
        </a>
      </div>
    </div>
  );
};