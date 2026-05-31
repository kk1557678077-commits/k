export type Lang = "en" | "zh";

export const contactInfo = {
  company: "Ruilong International",
  email: "info@ruilonginternational.com",
  phone: "+86 XXX XXXX XXXX",
  whatsapp: "+86 XXX XXXX XXXX",
  wechat: "RuilongInternational",
  address: "Xiqiao, Foshan, Guangdong, China",
  icp: "ICP filing placeholder - editable before public China hosting"
};

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/supply-chain", key: "supplyChain" },
  { href: "/products", key: "products" },
  { href: "/rd-technology", key: "rd" },
  { href: "/cases", key: "cases" },
  { href: "/news", key: "news" },
  { href: "/contact", key: "contact" }
] as const;

export const ui = {
  en: {
    brand: "Ruilong International",
    nav: {
      home: "Home",
      about: "About Us",
      supplyChain: "Full Supply Chain",
      products: "Products",
      rd: "R&D and Technology",
      cases: "Cases",
      news: "News",
      contact: "Contact"
    },
    cta: {
      quote: "Get a Quote",
      samples: "Request Samples",
      products: "View Products",
      details: "View Details",
      inquire: "Inquire Now",
      submit: "Submit Inquiry",
      close: "Close"
    },
    forms: {
      success: "Thank you. Your inquiry has been received in this Phase 1.5 demo. Please connect an email or CRM service before using the form for live buyer submissions.",
      name: "Name",
      company: "Company",
      country: "Country / Region",
      email: "Email",
      contact: "WhatsApp / WeChat",
      productType: "Product Type",
      quantity: "Estimated Quantity",
      message: "Message"
    },
    footer: {
      desc: "Textile sourcing, denim and custom fabric development support from Xiqiao, Foshan, with practical communication for international B2B buyers.",
      quickLinks: "Quick Links",
      products: "Products",
      contact: "Contact",
      privacy: "Privacy Policy",
      copyright: "All rights reserved."
    }
  },
  zh: {
    brand: "瑞隆国际",
    nav: {
      home: "首页",
      about: "关于我们",
      supplyChain: "全供应链",
      products: "产品中心",
      rd: "研发与技术",
      cases: "案例",
      news: "资讯",
      contact: "联系询盘"
    },
    cta: {
      quote: "获取报价",
      samples: "申请样品",
      products: "查看产品",
      details: "查看详情",
      inquire: "立即询盘",
      submit: "提交询盘",
      close: "关闭"
    },
    forms: {
      success: "感谢您提交信息。当前为 Phase 1.5 演示提交，正式接收买家询盘前请接入邮箱、CRM 或数据库服务。",
      name: "姓名",
      company: "公司",
      country: "国家/地区",
      email: "邮箱",
      contact: "WhatsApp / 微信",
      productType: "产品类型",
      quantity: "预计数量",
      message: "留言"
    },
    footer: {
      desc: "立足佛山西樵，为国际B2B买家提供纺织面料采购、牛仔与定制面料开发沟通支持。",
      quickLinks: "快速链接",
      products: "产品",
      contact: "联系方式",
      privacy: "隐私政策",
      copyright: "版权所有。"
    }
  }
};

export const pages = {
  home: {
    en: {
      heroTitle: "Connecting Global Buyers with Foshan Textile Supply Chains",
      heroSubtitle:
        "Textile sourcing, denim fabric, custom fabric development, sample coordination and quotation support from Xiqiao, Foshan, China.",
      strengthsTitle: "Core Strengths",
      featuredTitle: "Featured Product Directions",
      supplyTitle: "Supply Chain Coordination Preview",
      whyTitle: "Why Work With Ruilong International",
      inquiryTitle: "Quick Inquiry",
      strengths: [
        ["Foshan Textile Sourcing", "Based in Xiqiao, Foshan, we help buyers communicate with relevant fabric, finishing and garment-related resources."],
        ["Buyer Requirement Clarification", "We support specification discussion, fabric comparison, sample direction and quotation preparation."],
        ["Custom Fabric Development", "We coordinate development around buyer samples, handfeel, weight, composition, color and application needs."],
        ["Inspection & Export Communication", "We help align quality inspection points, packing notes, delivery timing and export communication before shipment."]
      ],
      why: [
        "Located in Xiqiao, Foshan, a textile industry area in Guangdong",
        "Focus on denim, casual, functional and custom fabric sourcing",
        "Support for sample requests, quotations and development follow-up",
        "Chinese and English communication for international buyers",
        "Practical OEM/ODM coordination for fabric and garment-related needs",
        "Quality inspection coordination before delivery when required"
      ]
    },
    zh: {
      heroTitle: "连接全球买家与佛山纺织供应链",
      heroSubtitle: "立足中国佛山西樵，提供纺织面料采购、牛仔面料、定制开发、样品协调与报价支持。",
      strengthsTitle: "核心优势",
      featuredTitle: "精选产品方向",
      supplyTitle: "供应链协调预览",
      whyTitle: "为什么选择瑞隆国际",
      inquiryTitle: "快速询盘",
      strengths: [
        ["佛山纺织采购资源", "立足佛山西樵，协助买家与相关面料、后整理及服装配套资源进行沟通。"],
        ["买家需求梳理", "支持规格沟通、面料方案比较、打样方向确认与报价准备。"],
        ["定制面料开发", "围绕买家样品、手感、克重、成分、颜色与应用场景协调开发。"],
        ["质检与出口沟通", "协助对齐检验要点、包装要求、交付节奏与出货前沟通。"]
      ],
      why: [
        "位于广东佛山西樵纺织产业区域",
        "聚焦牛仔、休闲、功能与定制面料采购",
        "支持样品申请、报价与开发跟进",
        "提供面向国际买家的中英文沟通",
        "可围绕面料与服装相关需求进行OEM/ODM协调",
        "按项目需要协助交付前质量检查协调"
      ]
    }
  },
  about: {
    en: {
      title: "About Ruilong International",
      intro:
        "Ruilong International is a B2B textile sourcing and foreign trade coordination company based in Xiqiao, Foshan, Guangdong, China. We help international buyers define fabric requirements, compare suitable textile options, coordinate sample requests and communicate with local supply chain resources.",
      sections: [
        ["Location Advantage", "Xiqiao is part of Foshan's textile industry ecosystem, with access to fabric markets, weaving, finishing and garment-related service resources."],
        ["Business Direction", "Our work covers textile sourcing, denim fabric, casual fabric, functional fabric, custom fabric development, OEM/ODM coordination, quotation support and export communication."],
        ["Sourcing Focus", "We focus on practical execution: clarifying specifications, preparing comparison options, following up samples and helping buyers communicate requirements clearly."],
        ["Mission and Values", "We aim to support clear, steady and realistic cooperation between international buyers and textile supply chain partners in Foshan."]
      ]
    },
    zh: {
      title: "关于瑞隆国际",
      intro:
        "瑞隆国际是一家位于中国广东佛山西樵的B2B纺织采购与外贸协调公司。我们帮助国际买家梳理面料需求、比较合适的纺织方案、协调样品申请，并与本地供应链资源进行沟通。",
      sections: [
        ["区位优势", "西樵是佛山纺织产业生态的一部分，可对接面料市场、织造、后整理及服装相关服务资源。"],
        ["业务方向", "业务覆盖纺织面料采购、牛仔面料、休闲面料、功能面料、定制面料开发、OEM/ODM协调、报价支持与出口沟通。"],
        ["采购重点", "我们重视实际执行：明确规格、整理比较方案、跟进样品，并帮助买家清晰传达需求。"],
        ["使命与价值观", "我们希望支持国际买家与佛山纺织供应链伙伴之间建立清晰、稳定、务实的合作。"]
      ]
    }
  }
};

export const supplySteps = {
  en: [
    ["Yarn Preparation", "Confirm yarn type, count, composition and project requirements before sampling or production."],
    ["Warping", "Coordinate warp preparation according to fabric structure and production direction."],
    ["Sizing", "Support process communication for stable weaving performance."],
    ["Weaving", "Match the required structure, width and weight with suitable weaving resources."],
    ["Finishing", "Discuss washing, softening, coating, color, handfeel or other finishing directions."],
    ["Inspection", "Coordinate checks for appearance, width, weight, color and agreed specifications."],
    ["Packaging", "Align roll packing, labels, marks and buyer-specific packing notes."],
    ["Warehousing", "Support temporary storage or order consolidation when needed."],
    ["Delivery", "Coordinate delivery communication based on buyer instructions and export requirements."]
  ],
  zh: [
    ["纱线准备", "在打样或生产前确认纱线类型、支数、成分与项目需求。"],
    ["整经", "根据面料组织与生产方向协调经轴准备。"],
    ["浆纱", "沟通浆纱工艺，支持织造稳定性。"],
    ["织造", "根据组织、门幅与克重需求匹配合适的织造资源。"],
    ["后整理", "沟通洗水、柔软、涂层、颜色、手感等后整理方向。"],
    ["检验", "协调布面、门幅、克重、颜色及约定规格检查。"],
    ["包装", "对齐卷装、标签、唛头及买家指定包装要求。"],
    ["仓储", "按需要支持临时仓储或订单整合沟通。"],
    ["交付", "根据买家指示与出口需求协调交付沟通。"]
  ]
};

// Replace these placeholder URLs with files under /public/images/products when real product photos are ready.
export const products = [
  {
    id: "denim-indigo-stretch",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Indigo Stretch Denim Fabric",
      category: "Denim Fabric",
      description: "A practical denim direction for jeans, jackets, casual trousers and garment development projects.",
      composition: "Cotton / Polyester / Spandex options",
      width: "Approx. 150 cm or by requirement",
      weight: "Common 8-13 oz range, editable by project",
      application: "Jeans, jackets, casual trousers",
      moq: "To be confirmed by specification",
      leadTime: "To be confirmed after sample and quotation",
      tags: ["Denim", "Stretch", "Garment"]
    },
    zh: {
      name: "靛蓝弹力牛仔面料",
      category: "牛仔面料",
      description: "适用于牛仔裤、夹克、休闲裤及服装开发项目的实用牛仔面料方向。",
      composition: "棉 / 涤纶 / 氨纶可选",
      width: "约150厘米或按需求确认",
      weight: "常见8-13盎司范围，按项目编辑",
      application: "牛仔裤、夹克、休闲裤",
      moq: "按规格确认",
      leadTime: "打样与报价后确认",
      tags: ["牛仔", "弹力", "服装"]
    },
    filters: { category: "Denim Fabric", function: "Stretch", application: "Garment" }
  },
  {
    id: "cotton-twill-casual",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Cotton Blend Twill Fabric",
      category: "Casual Fabric",
      description: "Stable twill fabric direction for shirts, trousers, uniforms and casualwear programs.",
      composition: "Cotton / Polyester options",
      width: "Approx. 145-150 cm",
      weight: "Approx. 180-260 gsm, editable by project",
      application: "Shirts, trousers, uniforms",
      moq: "To be confirmed by color and specification",
      leadTime: "To be confirmed after quotation",
      tags: ["Twill", "Casual", "Stable"]
    },
    zh: {
      name: "棉混纺斜纹休闲面料",
      category: "休闲面料",
      description: "适用于衬衫、裤装、制服与休闲服装项目的稳定斜纹面料方向。",
      composition: "棉 / 涤纶可选",
      width: "约145-150厘米",
      weight: "约180-260克/平方米，按项目编辑",
      application: "衬衫、裤装、制服",
      moq: "按颜色与规格确认",
      leadTime: "报价后确认",
      tags: ["斜纹", "休闲", "稳定"]
    },
    filters: { category: "Casual Fabric", function: "Durable", application: "Garment" }
  },
  {
    id: "water-resistant-functional",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Water Resistant Functional Fabric",
      category: "Functional Fabric",
      description: "Functional fabric direction for outdoor, workwear, bags and performance-focused applications.",
      composition: "Polyester / Nylon / blended options",
      width: "Approx. 150 cm or by requirement",
      weight: "Editable by application",
      application: "Outdoor, workwear, bags",
      moq: "To be confirmed by finishing requirement",
      leadTime: "To be confirmed after sample direction",
      tags: ["Functional", "Water Resistant", "Outdoor"]
    },
    zh: {
      name: "防泼水功能面料",
      category: "功能面料",
      description: "适用于户外、工装、箱包及功能性应用方向的面料开发。",
      composition: "涤纶 / 尼龙 / 混纺可选",
      width: "约150厘米或按需求确认",
      weight: "按应用场景编辑",
      application: "户外、工装、箱包",
      moq: "按后整理要求确认",
      leadTime: "样品方向确认后确定",
      tags: ["功能", "防泼水", "户外"]
    },
    filters: { category: "Functional Fabric", function: "Water Resistant", application: "Outdoor" }
  },
  {
    id: "custom-development",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Custom Fabric Development",
      category: "Custom Fabric",
      description: "Development support based on buyer sample, target handfeel, composition, color, weight and end use.",
      composition: "Based on requirement",
      width: "Based on requirement",
      weight: "Based on requirement",
      application: "Brand development, OEM/ODM coordination",
      moq: "To be confirmed by development route",
      leadTime: "To be confirmed after sample review",
      tags: ["Custom", "Sampling", "OEM/ODM"]
    },
    zh: {
      name: "定制面料开发",
      category: "定制面料",
      description: "根据买家样品、目标手感、成分、颜色、克重与终端用途进行开发支持。",
      composition: "按需求确认",
      width: "按需求确认",
      weight: "按需求确认",
      application: "品牌开发、OEM/ODM协调",
      moq: "按开发路线确认",
      leadTime: "样品评估后确认",
      tags: ["定制", "打样", "OEM/ODM"]
    },
    filters: { category: "Custom Fabric", function: "Custom", application: "OEM/ODM" }
  },
  {
    id: "new-arrival-soft-denim",
    image: "https://images.unsplash.com/photo-1506629905607-d9f297d5f5f4?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Soft Touch Denim Development",
      category: "New Arrivals",
      description: "A softer denim development direction for casualwear, womenswear and comfort-focused collections.",
      composition: "Cotton blend options",
      width: "Approx. 150 cm or by requirement",
      weight: "Editable by target garment",
      application: "Casualwear, womenswear",
      moq: "To be confirmed by color and finish",
      leadTime: "To be confirmed after sampling",
      tags: ["New", "Soft Touch", "Denim"]
    },
    zh: {
      name: "柔软手感牛仔开发",
      category: "新品方向",
      description: "面向休闲装、女装与舒适型系列的柔软手感牛仔开发方向。",
      composition: "棉混纺可选",
      width: "约150厘米或按需求确认",
      weight: "按目标服装编辑",
      application: "休闲装、女装",
      moq: "按颜色与后整理确认",
      leadTime: "打样后确认",
      tags: ["新品", "柔软", "牛仔"]
    },
    filters: { category: "New Arrivals", function: "Soft Touch", application: "Garment" }
  }
];

export const rdContent = {
  en: [
    ["Fabric Development Support", "Coordinate sample development based on buyer samples, target handfeel, application, estimated order direction and quotation needs."],
    ["Process Communication", "Discuss weaving, finishing, washing and production details so requirements are understood before sampling or order follow-up."],
    ["Testing and Inspection Coordination", "Support basic specification checks and help coordinate third-party testing when a buyer or order requires it."],
    ["Customisation Support", "Assist with color, width, weight, composition, function direction, packing notes and OEM/ODM communication."],
    ["Sustainable and Functional Direction", "Explore recycled, durable, water resistant and other functional fabric directions according to realistic project needs."]
  ],
  zh: [
    ["面料开发支持", "根据买家样品、目标手感、应用场景、预计订单方向与报价需求协调打样开发。"],
    ["工艺沟通", "沟通织造、后整理、洗水与生产细节，帮助需求在打样或订单跟进前被准确理解。"],
    ["测试与检验协调", "支持基础规格检查，并在买家或订单需要时协助协调第三方测试。"],
    ["定制支持", "协助沟通颜色、门幅、克重、成分、功能方向、包装要求与OEM/ODM相关事项。"],
    ["可持续与功能方向", "根据项目实际需求探索再生、耐用、防泼水等功能性面料方向。"]
  ]
};

export const cases = {
  en: [
    ["Denim garment fabric sourcing", "Challenge: a buyer needed suitable denim options for garment development without over-specifying the fabric at the first stage.", "Solution: compared weight ranges, stretch direction, handfeel and finishing options for sample discussion.", "Result: the buyer received clearer sample directions for internal review and quotation comparison."],
    ["Custom fabric development", "Challenge: a target handfeel and appearance needed to be translated into practical fabric development notes.", "Solution: organized composition, weight, color and finish requirements before sample coordination.", "Result: the sampling direction became easier to review, adjust and communicate."],
    ["Bulk fabric order support", "Challenge: order follow-up required consistent communication across specification confirmation, inspection and delivery preparation.", "Solution: coordinated key order notes, inspection points and packing requirements with relevant parties.", "Result: the buyer had a clearer process for order follow-up before shipment."],
    ["Overseas buyer sample request", "Challenge: an overseas buyer needed early-stage fabric options before visiting or placing a trial order.", "Solution: clarified end use, target fabric type and sample request details for local sourcing communication.", "Result: the buyer could evaluate possible directions before moving to quotation."]
  ],
  zh: [
    ["牛仔服装面料采购", "挑战：买家在开发初期需要合适的牛仔面料方向，但暂未完全明确所有规格。", "方案：围绕克重范围、弹力方向、手感与后整理方案进行样品讨论。", "结果：买家获得更清晰的样品方向，便于内部评估与报价比较。"],
    ["定制面料开发", "挑战：目标手感与外观需要转化为可执行的面料开发说明。", "方案：在打样协调前整理成分、克重、颜色与后整理要求。", "结果：样品方向更容易评估、调整与沟通。"],
    ["大货面料订单支持", "挑战：订单跟进需要在规格确认、检验与交付准备之间保持一致沟通。", "方案：协调关键订单说明、检验要点与包装要求。", "结果：买家在出货前获得更清晰的订单跟进流程。"],
    ["海外买家样品申请", "挑战：海外买家在到访或试单前需要早期面料选项。", "方案：明确终端用途、目标面料类型与样品申请细节，便于本地采购沟通。", "结果：买家可在进入报价阶段前先评估可能方向。"]
  ]
};

export const news = {
  en: [
    ["Company Updates", "Ruilong International continues to improve bilingual communication materials for international textile buyers."],
    ["Textile Industry Trends", "Comfort, durability and practical function remain important considerations for garment brands and importers."],
    ["Fabric Development Notes", "Clear target use, handfeel, composition and reference samples can improve custom fabric development efficiency."],
    ["Sourcing Tips for Buyers", "Providing expected application, quantity range, color direction and testing requirements helps quotation preparation."]
  ],
  zh: [
    ["公司动态", "瑞隆国际持续完善面向国际纺织买家的中英文沟通资料。"],
    ["纺织行业趋势", "舒适性、耐用性与实用功能仍是服装品牌和进口商关注的重要方向。"],
    ["面料开发说明", "清晰的用途、手感、成分与参考样品有助于提升定制面料开发效率。"],
    ["买家采购建议", "提供预计应用、数量范围、颜色方向与测试要求，有助于报价准备。"]
  ]
};
