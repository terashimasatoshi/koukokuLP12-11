import React from 'react';
import { SALON_INFO } from '../constants';
import { SectionTitle } from './SectionTitle';
import { MapPin, Clock, Phone, Calendar, Star } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const SalonInfo: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-pop-greenlight/10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionTitle en="Access" ja="店舗情報" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SALON_INFO.locations.map((loc, index) => (
            <FadeIn key={loc.id} delay={index * 200} direction="up" className="h-full">
              <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col h-full border-4 border-white hover:border-pop-green transition-colors duration-300">
                
                {/* Map Area */}
                <div className="h-64 w-full bg-slate-100 relative group">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     frameBorder="0" 
                     scrolling="no" 
                     marginHeight={0} 
                     marginWidth={0} 
                     src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                     title={`${loc.name} Map`}
                     className="absolute inset-0"
                     loading="lazy"
                   ></iframe>
                </div>

                {/* Info Area */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6 border-b-2 border-dashed border-slate-100 pb-4">
                    <h3 className="font-sans text-2xl font-black text-slate-800 mb-1">
                      {loc.name}
                    </h3>
                    <div className="inline-block bg-pop-greenlight text-pop-greenaccent font-bold text-xs px-2 py-1 rounded mb-3">
                      {loc.subName}
                    </div>
                    
                    {/* Google Reviews */}
                    <div className="flex items-center text-sm bg-yellow-50 p-2 rounded-lg w-fit">
                      <span className="text-pop-yellow font-black text-lg mr-1">{loc.rating}</span>
                      <div className="flex text-pop-yellow mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < Math.round(loc.rating) ? "currentColor" : "none"} 
                            strokeWidth={i < Math.round(loc.rating) ? 0 : 3}
                          />
                        ))}
                      </div>
                      <span className="text-slate-400 font-bold text-xs">Google ({loc.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 text-slate-600 text-sm md:text-base flex-grow font-medium">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-pop-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="leading-snug">{loc.zip}</p>
                        <p className="leading-snug">{loc.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-pop-cyan mr-3 flex-shrink-0" />
                      <a href={`tel:${loc.tel}`} className="font-sans text-xl font-black text-slate-800 hover:text-pop-green transition-colors">
                        {loc.tel}
                      </a>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-pop-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold mr-2 text-slate-700">営業時間:</span>
                        {loc.hours}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-pop-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold mr-2 text-slate-700">定休日:</span>
                        {loc.holidays}
                      </div>
                    </div>
                  </div>

                  <a 
                    href={loc.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center py-3 border-2 border-slate-200 text-slate-500 font-bold rounded-2xl hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300 transition-all"
                  >
                    Google Mapsで開く 🗺️
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};