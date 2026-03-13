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
 * ※ isTrusted チェックでプログラマティック発火を防止
 */
export const trackReservationClick = (location: string, storeName?: string) => {
  // ページ読み込み完了前の発火を防止
  if (typeof document !== 'undefined' && document.readyState === 'loading') return;

  trackEvent('reservation_click', {
    button_location: location,
    store_name: storeName || 'not_specified',
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
