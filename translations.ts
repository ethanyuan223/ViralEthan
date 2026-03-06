
export type Language = 'en' | 'fr' | 'zh';

export interface Content {
  nav: {
    pricing: string;
    contact: string;
  };
  hero: {
    name: string;
    headline: string;
    sub: string;
    cta: string;
    proof: string;
  };
  pain: {
    headline: string;
    items: string[];
    footer: string;
  };
  services: {
    headline: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  proof: {
    headline: string;
    footer: string;
    cases: {
      stats: string;
      label: string;
    }[];
  };
  diff: {
    headline: string;
    main: string;
    sub: string;
  };
  packages: {
    cta: string;
    items: string[];
  };
  final: {
    headline: string;
    sub: string;
    cta: string;
  };
}

export const translations: Record<Language, Content> = {
  en: {
    nav: { pricing: 'Pricing', contact: 'Book' },
    hero: {
      name: 'Ethan Yuan',
      headline: 'I Make Local Businesses Go Viral',
      sub: 'Stop posting for 200 views. I build viral campaigns that bring real customers.',
      cta: 'Get Customers',
      proof: '2M+ Local Views'
    },
    pain: {
      headline: 'Content is broken.',
      items: [
        'Posting but nobody cares.',
        'Videos look like ads.',
        'Zero new customers.'
      ],
      footer: 'Great business. Zero attention.'
    },
    services: {
      headline: 'Not just views. Impact.',
      items: [
        { title: 'Viral Promo', desc: 'Content designed to spread locally.' },
        { title: 'Monthly Growth', desc: 'Consistent visibility. Real results.' },
        { title: 'Strategy', desc: 'Turn social views into foot traffic.' }
      ]
    },
    proof: {
      headline: 'Results.',
      footer: 'Views are nice. Sales are better.',
      cases: [
        { stats: '2M+', label: 'Total Views' },
        { stats: '150k+', label: 'Med Spa' },
        { stats: '85k+', label: 'Local Café' },
        { stats: '120k+', label: 'Gym' }
      ]
    },
    diff: {
      headline: 'The Difference',
      main: 'Videographers sell visuals. I sell foot traffic.',
      sub: 'People don’t share ads. They share moments.'
    },
    packages: {
      cta: 'Get Pricing',
      items: ['Viral Video', 'Monthly Plan', 'Campaign']
    },
    final: {
      headline: 'Better Content. Real Growth.',
      sub: 'Let’s get your business seen.',
      cta: 'Book a Call'
    }
  },
  fr: {
    nav: { pricing: 'Tarifs', contact: 'Réserver' },
    hero: {
      name: 'Ethan Yuan',
      headline: 'Je Rends Les Commerces Viraux',
      sub: 'Arrêtez de poster pour 200 vues. Je crée des campagnes qui attirent de vrais clients.',
      cta: 'Attirer des Clients',
      proof: '2M+ Vues Locales'
    },
    pain: {
      headline: 'Le contenu est brisé.',
      items: [
        'Vous postez dans le vide.',
        'Vos vidéos ressemblent à des pubs.',
        'Aucun nouveau client.'
      ],
      footer: 'Bonne business. Zéro attention.'
    },
    services: {
      headline: 'Pas juste des vues. De l\'impact.',
      items: [
        { title: 'Promo Virale', desc: 'Contenu conçu pour se propager.' },
        { title: 'Croissance', desc: 'Visibilité constante. Vrais résultats.' },
        { title: 'Stratégie', desc: 'Des vues aux ventes réelles.' }
      ]
    },
    proof: {
      headline: 'Résultats.',
      footer: 'Les vues c\'est bien. Les ventes c\'est mieux.',
      cases: [
        { stats: '2M+', label: 'Vues Totales' },
        { stats: '150k+', label: 'Med Spa' },
        { stats: '85k+', label: 'Café Local' },
        { stats: '120k+', label: 'Gym' }
      ]
    },
    diff: {
      headline: 'La Différence',
      main: 'Les vidéastes vendent des images. Je vends du trafic.',
      sub: 'On ne partage pas des pubs. On partage des moments.'
    },
    packages: {
      cta: 'Voir les Tarifs',
      items: ['Vidéo Virale', 'Plan Mensuel', 'Campagne']
    },
    final: {
      headline: 'Meilleur Contenu. Vraie Croissance.',
      sub: 'Faisons briller votre entreprise.',
      cta: 'Réserver un Appel'
    }
  },
  zh: {
    nav: { pricing: '方案', contact: '预约' },
    hero: {
      name: 'Ethan Yuan',
      headline: '我让本地商家走红全网',
      sub: '拒绝无效发布。我打造真正带来客流的爆款视频。',
      cta: '获取客户',
      proof: '本地播放超 200万'
    },
    pain: {
      headline: '你的内容有问题。',
      items: [
        '发视频没人看。',
        '内容像硬广。',
        '没有新客流。'
      ],
      footer: '生意很好。没流量。'
    },
    services: {
      headline: '不只是播放量。是影响力。',
      items: [
        { title: '病毒视频', desc: '专为本地传播设计的内容。' },
        { title: '月度增长', desc: '持续曝光，真实结果。' },
        { title: '策略咨询', desc: '将线上流量转化为进店客流。' }
      ]
    },
    proof: {
      headline: '结果说话。',
      footer: '播放量是面子，客流量是里子。',
      cases: [
        { stats: '2M+', label: '总播放量' },
        { stats: '150k+', label: '医美' },
        { stats: '85k+', label: '咖啡店' },
        { stats: '120k+', label: '健身房' }
      ]
    },
    diff: {
      headline: '核心差异',
      main: '摄影师卖画面，我卖客流。',
      sub: '没人转发广告，人们只分享共鸣。'
    },
    packages: {
      cta: '获取报价',
      items: ['爆款单条', '月度托管', '品牌战役']
    },
    final: {
      headline: '更好的内容。真实的增长。',
      sub: '让您的生意被更多人看到。',
      cta: '预约咨询'
    }
  }
};
