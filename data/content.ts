export type Lang = "en" | "zh";

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
      success: "Thank you. Your inquiry has been recorded for this demo.",
      name: "Name",
      company: "Company",
      country: "Country",
      email: "Email",
      contact: "WhatsApp / WeChat",
      productType: "Product Type",
      quantity: "Quantity",
      message: "Message"
    },
    footer: {
      desc: "B2B textile sourcing, custom fabric development and practical export coordination from Xiqiao, Foshan.",
      quickLinks: "Quick Links",
      products: "Products",
      contact: "Contact",
      privacy: "Privacy Policy",
      icp: "ICP filing placeholder",
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
      success: "感谢您提交信息。当前为演示提交，后续可接入邮箱、数据库或CRM。",
      name: "姓名",
      company: "公司",
      country: "国家/地区",
      email: "邮箱",
      contact: "WhatsApp / 微信",
      productType: "产品类型",
      quantity: "数量",
      message: "留言"
    },
    footer: {
      desc: "立足佛山西樵，提供纺织面料采购、定制开发与务实的出口协调支持。",
      quickLinks: "快速链接",
      products: "产品",
      contact: "联系方式",
      privacy: "隐私政策",
      icp: "ICP备案占位",
      copyright: "版权所有。"
    }
  }
};

export const pages = {
  home: {
    en: {
      heroTitle: "Connecting Global Buyers with Foshan Textile Supply Chains",
      heroSubtitle:
        "Specialising in denim fabrics, custom textiles, sourcing support and full supply chain coordination.",
      strengthsTitle: "Core Strengths",
      featuredTitle: "Featured Products",
      supplyTitle: "Full Supply Chain Preview",
      whyTitle: "Why Choose Us",
      inquiryTitle: "Quick Inquiry",
      strengths: [
        ["Foshan Textile Supply Chain", "Access to local fabric, finishing and garment production resources."],
        ["Fabric Sourcing Support", "Help buyers compare suitable materials, specifications and suppliers."],
        ["Custom Fabric Development", "Support for samples, handfeel direction, color and fabric structure."],
        ["Quality Control & Export Coordination", "Practical inspection, packing and delivery coordination before shipment."]
      ],
      why: [
        "Based in Xiqiao, Foshan textile industry area",
        "Access to local fabric and garment production resources",
        "Support for sample request and custom development",
        "Bilingual communication",
        "Practical export coordination",
        "Quality inspection before delivery"
      ]
    },
    zh: {
      heroTitle: "连接全球买家与佛山纺织供应链",
      heroSubtitle: "专注牛仔面料、定制纺织品、采购支持与全流程供应链协调。",
      strengthsTitle: "核心优势",
      featuredTitle: "精选产品",
      supplyTitle: "全供应链预览",
      whyTitle: "为什么选择我们",
      inquiryTitle: "快速询盘",
      strengths: [
        ["佛山纺织供应链", "对接本地面料、后整理与服装生产资源。"],
        ["面料采购支持", "协助买家比较合适的材料、规格与供应资源。"],
        ["定制面料开发", "支持样品、手感方向、颜色与组织结构开发。"],
        ["质检与出口协调", "出货前提供务实的检验、包装与交付协调。"]
      ],
      why: [
        "位于佛山西樵纺织产业区域",
        "可对接本地面料与服装生产资源",
        "支持样品申请与定制开发",
        "中英文沟通支持",
        "务实的出口协调服务",
        "交付前质量检查"
      ]
    }
  },
  about: {
    en: {
      title: "About Ruilong International",
      intro:
        "Ruilong International is a B2B textile foreign trade service company based in Xiqiao, Foshan, Guangdong, China. We help international buyers communicate with local textile supply chain resources and move fabric projects from sourcing to sample confirmation and delivery coordination.",
      sections: [
        ["Location Advantage", "Xiqiao is one of Foshan's textile industry areas, with access to fabric markets, weaving, finishing and garment-related resources."],
        ["Business Direction", "We focus on fabric sourcing, denim fabric, custom fabric development, OEM/ODM support, sample requests, quotation coordination and export follow-up."],
        ["Textile Sourcing Focus", "Our work is practical: clarify specifications, compare options, support sampling and help buyers communicate requirements accurately."],
        ["Mission and Values", "We aim to build clear, reliable and long-term cooperation between international buyers and Foshan textile resources."]
      ]
    },
    zh: {
      title: "关于瑞隆国际",
      intro:
        "瑞隆国际是一家位于中国广东佛山西樵的B2B纺织外贸服务公司。我们帮助国际买家与本地纺织供应链资源沟通，并推动面料项目从采购、打样确认到交付协调。",
      sections: [
        ["区位优势", "西樵是佛山纺织产业区域之一，可对接面料市场、织造、后整理及服装相关资源。"],
        ["业务方向", "我们专注面料采购、牛仔面料、定制面料开发、OEM/ODM支持、样品申请、报价协调与出口跟进。"],
        ["面料采购重点", "我们的工作重视实际执行：明确规格、比较方案、支持打样，并帮助买家准确传达需求。"],
        ["使命与价值观", "我们希望在国际买家与佛山纺织资源之间建立清晰、可靠、长期的合作。"]
      ]
    }
  }
};

export const supplySteps = {
  en: [
    ["Yarn Preparation", "Confirm yarn type, count and basic material requirements."],
    ["Warping", "Prepare yarn beams for stable weaving production."],
    ["Sizing", "Improve yarn strength and weaving performance."],
    ["Weaving", "Coordinate suitable weaving resources for the fabric structure."],
    ["Finishing", "Support washing, coating, softening or other finishing directions."],
    ["Inspection", "Check fabric appearance, width, weight and agreed specifications."],
    ["Packaging", "Arrange practical roll packing and marks based on order needs."],
    ["Warehousing", "Coordinate temporary storage before shipment when required."],
    ["Delivery", "Support export delivery coordination with buyer instructions."]
  ],
  zh: [
    ["纱线准备", "确认纱线类型、支数与基础材料要求。"],
    ["整经", "为稳定织造准备经轴。"],
    ["浆纱", "提升纱线强力与织造适应性。"],
    ["织造", "根据面料组织协调合适的织造资源。"],
    ["后整理", "支持洗水、涂层、柔软处理等后整理方向。"],
    ["检验", "检查布面、门幅、克重及约定规格。"],
    ["包装", "根据订单需求安排卷装与唛头。"],
    ["仓储", "在需要时协调出货前临时仓储。"],
    ["交付", "根据买家要求协助出口交付协调。"]
  ]
};

export const products = [
  {
    id: "denim-indigo-stretch",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Indigo Stretch Denim",
      category: "Denim Fabric",
      description: "Everyday denim fabric for jeans, jackets and casualwear.",
      composition: "Cotton / Polyester / Spandex",
      width: "150 cm",
      weight: "10-12 oz",
      application: "Jeans, jackets, casual trousers",
      moq: "Editable MOQ",
      leadTime: "Editable lead time",
      tags: ["Denim", "Stretch", "Garment"]
    },
    zh: {
      name: "靛蓝弹力牛仔布",
      category: "牛仔面料",
      description: "适用于牛仔裤、夹克与休闲服装的日常牛仔面料。",
      composition: "棉 / 涤纶 / 氨纶",
      width: "150厘米",
      weight: "10-12盎司",
      application: "牛仔裤、夹克、休闲裤",
      moq: "MOQ待编辑",
      leadTime: "交期待编辑",
      tags: ["牛仔", "弹力", "服装"]
    },
    filters: { category: "Denim Fabric", function: "Stretch", application: "Garment" }
  },
  {
    id: "cotton-twill-casual",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Cotton Twill Casual Fabric",
      category: "Casual Fabric",
      description: "Clean twill fabric for shirts, trousers and uniform programs.",
      composition: "Cotton / Polyester",
      width: "145 cm",
      weight: "180-240 gsm",
      application: "Shirts, trousers, uniforms",
      moq: "Editable MOQ",
      leadTime: "Editable lead time",
      tags: ["Twill", "Casual", "Stable"]
    },
    zh: {
      name: "棉涤斜纹休闲面料",
      category: "休闲面料",
      description: "适用于衬衫、裤装与制服项目的斜纹面料。",
      composition: "棉 / 涤纶",
      width: "145厘米",
      weight: "180-240克/平方米",
      application: "衬衫、裤装、制服",
      moq: "MOQ待编辑",
      leadTime: "交期待编辑",
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
      description: "Functional fabric direction for outdoor and workwear projects.",
      composition: "Polyester / Nylon optional",
      width: "150 cm",
      weight: "Editable specification",
      application: "Outdoor, workwear, bags",
      moq: "Editable MOQ",
      leadTime: "Editable lead time",
      tags: ["Functional", "Water Resistant", "Outdoor"]
    },
    zh: {
      name: "防泼水功能面料",
      category: "功能面料",
      description: "适用于户外与工装项目的功能面料方向。",
      composition: "涤纶 / 尼龙可选",
      width: "150厘米",
      weight: "规格待编辑",
      application: "户外、工装、箱包",
      moq: "MOQ待编辑",
      leadTime: "交期待编辑",
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
      description: "Development support based on buyer sample, handfeel or target use.",
      composition: "Based on requirement",
      width: "Based on requirement",
      weight: "Based on requirement",
      application: "Brand development, OEM/ODM",
      moq: "Editable MOQ",
      leadTime: "Editable lead time",
      tags: ["Custom", "Sampling", "OEM/ODM"]
    },
    zh: {
      name: "定制面料开发",
      category: "定制面料",
      description: "根据买家样品、手感或使用场景进行开发支持。",
      composition: "按需求确认",
      width: "按需求确认",
      weight: "按需求确认",
      application: "品牌开发、OEM/ODM",
      moq: "MOQ待编辑",
      leadTime: "交期待编辑",
      tags: ["定制", "打样", "OEM/ODM"]
    },
    filters: { category: "Custom Fabric", function: "Custom", application: "OEM/ODM" }
  },
  {
    id: "new-arrival-soft-denim",
    image: "https://images.unsplash.com/photo-1506629905607-d9f297d5f5f4?auto=format&fit=crop&w=900&q=80",
    en: {
      name: "Soft Touch Denim Direction",
      category: "New Arrivals",
      description: "New development direction for softer casual denim applications.",
      composition: "Cotton blend",
      width: "150 cm",
      weight: "Editable specification",
      application: "Casualwear, womenswear",
      moq: "Editable MOQ",
      leadTime: "Editable lead time",
      tags: ["New", "Soft Touch", "Denim"]
    },
    zh: {
      name: "柔软手感牛仔方向",
      category: "新品方向",
      description: "面向休闲牛仔应用的柔软手感开发方向。",
      composition: "棉混纺",
      width: "150厘米",
      weight: "规格待编辑",
      application: "休闲装、女装",
      moq: "MOQ待编辑",
      leadTime: "交期待编辑",
      tags: ["新品", "柔软", "牛仔"]
    },
    filters: { category: "New Arrivals", function: "Soft Touch", application: "Garment" }
  }
];

export const rdContent = {
  en: [
    ["Fabric Development Support", "Coordinate sampling based on buyer samples, target price range, handfeel or application."],
    ["Process Improvement", "Communicate finishing, washing and production details to improve consistency where possible."],
    ["Testing and Inspection", "Support basic specification checks and third-party testing coordination when required."],
    ["Customisation Support", "Assist with color, weight, width, composition and function direction discussions."],
    ["Sustainable and Functional Direction", "Explore recycled, durable, water resistant and other practical fabric directions based on project needs."]
  ],
  zh: [
    ["面料开发支持", "根据买家样品、目标价格、手感或用途协调打样。"],
    ["工艺优化", "沟通后整理、洗水与生产细节，尽量提升一致性。"],
    ["测试与检验", "支持基础规格检查，并在需要时协调第三方测试。"],
    ["定制支持", "协助沟通颜色、克重、门幅、成分与功能方向。"],
    ["可持续与功能方向", "根据项目需求探索再生、耐用、防泼水等实际面料方向。"]
  ]
};

export const cases = {
  en: [
    ["Denim garment fabric sourcing", "Challenge: buyer needed suitable denim options for garment development.", "Solution: compared fabric weights, stretch directions and finishing options.", "Result: buyer received clearer sample options for internal review."],
    ["Custom fabric development", "Challenge: target handfeel and appearance needed better definition.", "Solution: translated buyer requirements into sample development notes.", "Result: sampling direction became easier to compare and adjust."],
    ["Bulk fabric order support", "Challenge: order follow-up required clear communication across production steps.", "Solution: coordinated specification confirmation, inspection points and delivery notes.", "Result: buyer had a practical order follow-up path."],
    ["Overseas buyer sample development", "Challenge: buyer needed early-stage fabric ideas without local sourcing presence.", "Solution: organized local options and sample request communication.", "Result: buyer could evaluate options before moving to quotation."]
  ],
  zh: [
    ["牛仔服装面料采购", "挑战：买家需要适合服装开发的牛仔面料选项。", "方案：比较克重、弹力方向与后整理选择。", "结果：买家获得更清晰的样品选项用于内部评估。"],
    ["定制面料开发", "挑战：目标手感与外观需要更明确。", "方案：将买家需求转化为打样开发说明。", "结果：打样方向更容易比较与调整。"],
    ["大货面料订单支持", "挑战：订单跟进需要跨生产环节的清晰沟通。", "方案：协调规格确认、检验节点与交付说明。", "结果：买家获得务实的订单跟进路径。"],
    ["海外买家样品开发", "挑战：买家缺少本地采购支持，需要早期面料方案。", "方案：整理本地选项并协调样品申请沟通。", "结果：买家可在报价前先评估方案。"]
  ]
};

export const news = {
  en: [
    ["Company Updates", "Preparing Ruilong International's bilingual website for easier international buyer communication."],
    ["Textile Industry Trends", "Functional and comfortable fabrics remain important directions for garment brands and importers."],
    ["New Fabric Development", "Custom denim, soft-touch casual fabrics and practical finishing directions are available for discussion."],
    ["Sourcing Tips for International Buyers", "Clear specifications, target use and sample references can improve sourcing efficiency."]
  ],
  zh: [
    ["公司动态", "瑞隆国际正在准备中英文网站，方便与国际买家沟通。"],
    ["纺织行业趋势", "功能性与舒适性面料仍是服装品牌和进口商关注的方向。"],
    ["新面料开发", "可沟通定制牛仔、柔软休闲面料与实用后整理方向。"],
    ["国际买家采购建议", "清晰的规格、用途和样品参考有助于提升采购效率。"]
  ]
};
