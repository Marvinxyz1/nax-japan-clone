export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  categorySlug: string;
  subtitle: string;
  description: string;
  features?: string[];
  sections?: {
    title: string;
    content: string;
  }[];
  image: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  services: ServiceItem[];
}

// 服务分类图片 (Unsplash 占位图片)
const categoryImages = {
  tradeCustoms: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=770&h=520&fit=crop',
  warehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=770&h=520&fit=crop',
  fba: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=770&h=520&fit=crop',
  domestic: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=770&h=520&fit=crop',
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'trade-customs',
    slug: 'trade-customs',
    title: '輸出入通関',
    titleEn: 'Import/Export Customs',
    subtitle: '海外貿易の通関業務',
    services: [
      {
        id: 'import-export-customs',
        slug: 'import-export-customs',
        title: '輸出入通関',
        titleEn: 'Import/Export Customs Clearance',
        category: '輸出入通関',
        categorySlug: 'trade-customs',
        subtitle: '海外貿易の通関業務',
        description: '当社では、国際物流における輸出入通関業務をワンストップでサポートしております。長年にわたる豊富な実績と専門知識を活かし、迅速かつ正確な通関手続きを実現。お客様の大切な貨物がスムーズに流通するよう、全力でサポートいたします。',
        features: [
          '輸出入申告代行',
          '税関検査対応代行',
          '関税・消費税の計算と納付サポート',
          '植物検疫・動物検疫などの各種検査対応',
          '通関後の配送手配',
        ],
        image: categoryImages.tradeCustoms,
      },
      {
        id: 'animal-plant-quarantine',
        slug: 'animal-plant-quarantine',
        title: '動植物検疫',
        titleEn: 'Animal & Plant Quarantine',
        category: '輸出入通関',
        categorySlug: 'trade-customs',
        subtitle: '海外貿易の通関業務',
        description: '当社では、海外へ植物や動物製品を輸出入する際に必要な動植物検疫および通関手続きをトータルでサポートしております。煩雑で専門的な手続きも、経験豊富なスタッフが丁寧かつ迅速に対応いたします。',
        features: [
          '植物・動物製品の輸出入に関する事前相談',
          '検疫証明書・輸出入許可証などの取得サポート',
          '動植物検疫所への申請・立会い代行',
          '税関申告および通関手続きの一括対応',
          '検疫完了後の配送手配',
        ],
        image: categoryImages.tradeCustoms,
      },
    ],
  },
  {
    id: 'warehouse-work',
    slug: 'warehouse-work',
    title: '倉庫作業',
    titleEn: 'Warehouse Operations',
    subtitle: '倉庫作業全般をお任せします',
    services: [
      {
        id: 'b2c-shipping',
        slug: 'b2c-shipping',
        title: 'B2C発送代行',
        titleEn: 'B2C Fulfillment Service',
        category: '倉庫作業',
        categorySlug: 'warehouse-work',
        subtitle: '倉庫作業全般をお任せします',
        description: '当社のB2C事業では、日本国内において商品の保管・代行発送サービスを提供しています。EC事業者様や個人セラー様に代わって、商品管理から出荷までをワンストップでサポートいたします。',
        features: [
          'お客様からの注文に基づく商品ピッキング',
          '商品のカスタマイズや簡易修理対応',
          '検品・梱包・ラベル貼付',
          'カスタマーサポート（多言語対応可能）',
        ],
        image: categoryImages.warehouse,
      },
      {
        id: '3pl-service',
        slug: '3pl-service',
        title: '3PLサービス',
        titleEn: '3PL Service',
        category: '倉庫作業',
        categorySlug: 'warehouse-work',
        subtitle: '倉庫作業全般をお任せします',
        description: '当社が提供する3PL（サード・パーティ・ロジスティクス）サービスは、お客様の物流ニーズに的確に対応するために設計され、多岐にわたる専門的なサービスを提供しています。',
        sections: [
          {
            title: '1. 在庫管理',
            content: '当社は先進的な在庫管理システムを活用しており、お客様の商品在庫をリアルタイムで把握できます。これにより、在庫不足や過剰在庫を防ぎ、最適な在庫レベルを維持することが可能です。定期的な在庫棚卸を実施し、データの精度を保証します。',
          },
          {
            title: '2. 配送サービス',
            content: '当社は全国規模の配送ネットワークを構築しており、都市部から地方の僻地まで幅広い範囲に商品を配送しています。多様な配送オプション（速達便、通常便、低温便など）を提供しており、お客様のニーズに応じて最適な配送方法をお選びいただけます。',
          },
          {
            title: '3. 荷物追跡',
            content: '当社独自の荷物追跡システムを開発しており、荷物が出荷された後、全行程をリアルタイムで追跡できます。お客様はコンピュータやスマートフォンを使って、簡単に荷物の現在地を確認できます。',
          },
          {
            title: '4. 包装サービス',
            content: '専門の包装スタッフが、お客様の商品に最適な包装を提供します。商品の特性に合わせて、強固で適切な包装材料を選び、破損や損傷を防ぎます。',
          },
          {
            title: '5. 物流コンサルティング',
            content: '経験豊富な物流コンサルタントが、お客様のビジネスモデルに基づき、最適な物流戦略を提案します。これにより、物流コストを削減し、物流効率を向上させることができます。',
          },
        ],
        image: categoryImages.warehouse,
      },
    ],
  },
  {
    id: 'fba-service',
    slug: 'fba-service',
    title: 'FBA納品',
    titleEn: 'FBA Delivery',
    subtitle: 'Amazon納品作業',
    services: [
      {
        id: 'fba-delivery',
        slug: 'fba-delivery',
        title: 'FBA納品',
        titleEn: 'FBA Delivery Service',
        category: 'FBA納品',
        categorySlug: 'fba-service',
        subtitle: 'Amazon納品作業',
        description: '当社では、AmazonのFBA（フルフィルメント by Amazon）倉庫への納品に必要な一連の作業を代行するサービスを提供しております。FBAの規定に沿った正確な対応で、スムーズな納品と販売のスタートをサポートします。',
        features: [
          'Purchase Order（発注書）に基づくキャリアセントラル予約対応',
          '指定納入日・納入先への確実な配達',
          '受領書（Proof of Delivery）の発行',
          '納品ミスやラベル不備の未然防止',
          '小ロットから大口まで柔軟に対応',
        ],
        image: categoryImages.fba,
      },
    ],
  },
  {
    id: 'domestic-transport',
    slug: 'domestic-transport',
    title: '国内運送',
    titleEn: 'Domestic Transport',
    subtitle: '国内輸送サービス',
    services: [
      {
        id: 'domestic-transportation',
        slug: 'domestic-transportation',
        title: '国内運送',
        titleEn: 'Domestic Transportation',
        category: '国内運送',
        categorySlug: 'domestic-transport',
        subtitle: '国内輸送サービス',
        description: '当社の国内運送サービスは、さまざまな配送ニーズにお応えするために、全力で取り組んでおります。',
        sections: [
          {
            title: '配送範囲',
            content: '全国の主要都市はもちろん、地方の僻地にも対応できるよう努めております。東京、大阪、名古屋といった大都市圏だけでなく、山形、鳥取、高知などの地方都市にもスムーズに配送可能です。',
          },
          {
            title: '配送速度',
            content: '速達便を提供しており、緊急のお荷物も迅速にお届けできます。通常便でも短納期で目的地に到着できるように計画しており、大都市間の配送では翌日到着サービスもご利用いただけます。',
          },
          {
            title: '荷物管理',
            content: '先進的な物流システムを導入しており、荷物の状態をリアルタイムで追跡できます。出荷から到着までの全行程を把握でき、お客様は自宅やオフィスから簡単に荷物の進捗状況を確認できます。',
          },
          {
            title: '荷物サイズ・重量',
            content: '小さな文書から大型の家具、機械まで、さまざまな荷物に対応しております。重量制限も合理的に設定されており、超重量物についても、特別な手続きを経て安全に配送いたします。',
          },
          {
            title: 'サービス品質',
            content: '専門の運送スタッフが、お客様とのコミュニケーションを大切にしています。配送前には荷物の内容や配送先の詳細をしっかり確認し、配送後もお客様との連絡を欠かさず行い、スムーズなサービスを提供いたします。',
          },
        ],
        image: categoryImages.domestic,
      },
    ],
  },
];

export const getAllServices = (): ServiceItem[] => {
  return serviceCategories.flatMap((category) => category.services);
};

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return getAllServices().find((service) => service.slug === slug);
};

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return serviceCategories.find((category) => category.slug === slug);
};
