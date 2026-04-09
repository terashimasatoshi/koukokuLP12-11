import React from 'react';
import { SALON_INFO, trackBookingClick } from '../constants';
import { MousePointerClick } from 'lucide-react';

// 【Phase D改修】花堂店を主CTA化、高柳店はテキストリンクに
// 理由: 広告Bが「福井市花堂」指定 → 2択の選択摩擦を排除
export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex flex-col items-center bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
        <a
          href={SALON_INFO.bookingUrls.hanando}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackBookingClick('hanando')}
          className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-pop-green to-green-500 text-white py-3 rounded-full shadow-md active:scale-95 transition-transform"
        >
          <span className="text-sm font-black flex items-center leading-none">
            空席確認・予約 <MousePointerClick size={14} className="ml-1"/>
          </span>
          <span className="text-[10px] font-bold opacity-80 leading-none mt-0.5">花堂店 ¥9,900〜</span>
        </a>
        <a
          href={SALON_INFO.bookingUrls.takayanagi}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackBookingClick('takayanagi')}
          className="mt-1 text-[10px] text-slate-500 underline underline-offset-2"
        >
          高柳店はこちら
        </a>
      </div>
    </div>
  );
};