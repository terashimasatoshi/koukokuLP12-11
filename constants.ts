import { Clock, MapPin, Phone } from 'lucide-react';

// Meta Pixel トラッキング関数
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackBookingClick = (store: 'takayanagi' | 'hanando') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: `予約クリック_${store}`,
      content_category: 'booking'
    });
  }
};

export const SALON_INFO = {
  name: "peace",
  concept: "Organic × Science Hybrid Salon",
  bookingUrl: "https://www.hybridsalon-peace.com/",
  blogUrl: "https://beauty.hotpepper.jp/slnH000281422/blog/",
  instagramUrl: "https://www.instagram.com/peace.fukui/",
  bookingUrls: {
    takayanagi: "https://beauty.hotpepper.jp/slnH000281422/coupon/",
    hanando: "https://beauty.hotpepper.jp/slnH000381011/coupon/"
  },
  awards: "ホットペッパービューティーアワード 8年連続受賞",
  locations: [
    {
      id: "takayanagi",
      name: "HAIR&MAKE peace",
      subName: "高柳店",
      rating: 4.6,
      reviews: 15,
      zip: "〒910-0837",
      address: "福井県福井市高柳１丁目８０２ アーバンヒルズ",
      tel: "0776-97-5512",
      hours: "10:00~19:00",
      holidays: "第２月曜日",
      mapLink: "https://share.google/tL49sET1ABVDhrI5Q",
    },
    {
      id: "hanando",
      name: "HYBRID SALON peace",
      subName: "花堂店・髪質改善特化",
      rating: 4.7,
      reviews: 26,
      zip: "〒918-8012",
      address: "福井県福井市花堂北１丁目１６０",
      tel: "0776-97-9516",
      hours: "10:00~19:00",
      holidays: "毎週月・火",
      mapLink: "https://share.google/Tut26l12yDTDoiN8i",
    }
  ]
};

export const MENU_ITEMS = [
  {
    title: "METEO美髪矯正 & カット",
    price: "22,000",
    originalPrice: "27,500",
    description: "エイジング毛・ダメージ毛対応。圧倒的な艶と柔らかさを実現。",
    isRecommended: true
  },
  {
    title: "METEOストレート+カラー+カット",
    price: "29,840",
    originalPrice: "37,300",
    description: "カラー同時施術でもダメージレス。時短で最高の仕上がり。",
    isRecommended: false
  },
  {
    title: "【ご新規様限定】お試しプラン",
    price: "13,050",
    originalPrice: "",
    description: "まずはMETEOの効果を実感したい方へ。",
    isRecommended: false
  }
];

export const PAIN_POINTS = [
  "毎朝のスタイリングに時間がかかりすぎる",
  "縮毛矯正の不自然な「ピンピン」感が苦手",
  "ブリーチやカラーで髪が傷んで施術を断られた",
  "年齢とともに髪のうねりやパサつきが出てきた",
  "湿気の多い日は髪が広がってまとまらない"
];

export const REVIEWS = [
  {
    age: "40代",
    content: "今まで縮毛矯正を繰り返して髪が硬くなっていましたが、METEOは本当に柔らかい仕上がりで感動しました。周りから「髪きれいだね」と褒められます！",
    rating: 5
  },
  {
    age: "30代",
    content: "ブリーチ毛なので矯正は諦めていましたが、peaceさんにお願いして本当によかったです。ツヤツヤのストレートになって、朝の準備が楽になりました。",
    rating: 5
  },
  {
    age: "50代",
    content: "エイジングによるうねりが気になっていましたが、自然なボリュームを残したまま綺麗にまとまりました。マイナス10歳若返った気分です。",
    rating: 5
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "カウンセリング・髪質診断",
    description: "お客様の髪の履歴、ダメージレベル、クセの種類を細かくチェック。お悩みを丁寧にヒアリングします。"
  },
  {
    step: 2,
    title: "クレンジング・前処理",
    description: "髪表面の不純物を除去し、薬剤が浸透しやすい状態へ。ダメージ部分には栄養分を補給します。"
  },
  {
    step: 3,
    title: "METEO薬剤塗布",
    description: "独自の「酸熱融合」成分を配合した薬剤を、お客様の髪質に合わせてカスタマイズして塗布します。"
  },
  {
    step: 4,
    title: "放置・中間水洗",
    description: "髪の内部まで成分を浸透させます。その後、余分な薬剤を流し、中間処理で栄養を閉じ込めます。"
  },
  {
    step: 5,
    title: "アイロンワーク（熱反応）",
    description: "特殊な技術でアイロンを通し、酸と熱の力で髪の内部結合を強化・定着させます。ここが艶の決め手です。"
  },
  {
    step: 6,
    title: "仕上げ・アフターカウンセリング",
    description: "驚くほど柔らかい艶髪の完成。ご自宅でのケア方法や、美しさを保つコツをお伝えします。"
  }
];

export const STYLISTS = [
  {
    name: "Yuta Nakamura",
    role: "Top Stylist",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop",
    message: "ショート・ボブのカットと縮毛矯正が得意です。朝のセットが楽になる、再現性の高いスタイルを作ります！"
  },
  {
    name: "Miki Kato",
    role: "Stylist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    message: "女性目線での「カワイイ」を提案します。ブリーチなしで透明感のあるカラーもお任せください♡"
  }
];