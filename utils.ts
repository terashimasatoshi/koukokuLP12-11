// GTM dataLayer イベントトラッキング用のヘルパー関数

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * GTM dataLayerにイベントを送信
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
    console.log('GTM Event:', eventName, eventParams);
  }
};

/**
 * 予約ボタンクリックを追跡
 */
export const trackReservationClick = (location: string, storeName?: string) => {
  trackEvent('reservation_click', {
    button_location: location, // ボタンの場所（例: 'hero', 'floating', 'limited_offer'）
    store_name: storeName || 'not_specified', // 店舗名（高柳店、花堂店）
    event_category: 'engagement',
    event_label: `Reservation from ${location}`,
  });
};

/**
 * 外部リンククリックを追跡
 */
export const trackExternalLinkClick = (linkName: string, url: string) => {
  trackEvent('external_link_click', {
    link_name: linkName,
    link_url: url,
    event_category: 'outbound',
  });
};

/**
 * 診断完了を追跡
 */
export const trackDiagnosisComplete = (result: string) => {
  trackEvent('diagnosis_complete', {
    diagnosis_result: result,
    event_category: 'engagement',
  });
};
