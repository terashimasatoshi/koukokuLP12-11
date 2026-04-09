import React from 'react';
import { SALON_INFO, trackBookingClick } from '../constants';
import { ChevronRight } from 'lucide-react';

// 【Phase D-4】FloatingCTA — FVと同じ花堂メイン+高柳サブの2ボタン
export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex space-x-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
        {/* 花堂店 — メイン */}
        <a
          href={SALON_INFO.bookingUrls.hanando}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackBookingClick('hanando')}
          className="flex-[1.15] flex flex-col items-center justify-center bg-gradient-to-r from-pop-greenaccent to-pop-green text-white py-2.5 rounded-xl active:scale-95 transition-transform"
        >
          <span className="text-[10px] font-bold opacity-90 leading-none">花堂店 ¥9,900〜</span>
          <span className="text-xs font-black flex items-center leading-none mt-0.5">
            予約 <ChevronRight size={12} className="ml-0.5" />
          </span>
        </a>
        {/* 高柳店 — サブ */}
        <a
          href={SALON_INFO.bookingUrls.takayanagi}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackBookingClick('takayanagi')}
          className="flex-1 flex flex-col items-center justify-center bg-white border border-slate-200 text-slate-700 py-2.5 rounded-xl active:scale-95 transition-transform"
        >
          <span className="text-[10px] font-bold opacity-70 leading-none">高柳店 20%OFF</span>
          <span className="text-xs font-black flex items-center leading-none mt-0.5">
            予約 <ChevronRight size={12} className="ml-0.5" />
          </span>
        </a>
      </div>
    </div>
  );
};