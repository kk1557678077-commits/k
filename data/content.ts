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
      trustTitle: "Practical Trust Signals for B2B Buyers",
      trustText:
        "We keep the cooperation process transparent: clear requirements, realistic sample discussion, written quotation points and inspection coordination before delivery.",
      howWorkTitle: "How We Work",
      howWorkText:
        "A straightforward service flow for buyers who need fabric sourcing, sample development or quotation support from Foshan.",
      finalCtaTitle: "Ready to discuss a fabric requirement?",
      finalCtaText:
        "Share your fabric type, application, estimated quantity, target price and delivery country. We will review the details and reply with a practical next step.",
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
      ],
      trustSignals: [
        ["Transparent sourcing process", "Requirements, sample options and quotation points are organized clearly before buyers make decisions."],
        ["Sample request support", "We help clarify sample purpose, fabric direction, handfeel, color and delivery notes before arranging samples."],
        ["Development communication", "For custom fabrics, we translate buyer references into practical notes for composition, weight, width and finishing."],
        ["Inspection coordination", "Inspection points can be aligned around appearance, color, width, weight, packing and agreed specifications."],
        ["Export communication support", "We assist with bilingual communication for packing notes, delivery timing and export-related coordination."],
        ["Buyer-focused follow-up", "The process is built around clear next steps, realistic timelines and practical feedback after each stage."]
      ],
      howWeWork: [
        ["Submit Inquiry", "Send fabric type, application, estimated quantity and any reference sample or photos."],
        ["Confirm Requirements", "We clarify composition, width, weight, handfeel, color, function and delivery expectations."],
        ["Recommend Fabric / Develop Sample", "Suitable stock directions or custom sample routes are discussed according to the project."],
        ["Quotation", "Quotation points are prepared after specifications, sample route and quantity direction are clear."],
        ["Sample Confirmation", "Buyer feedback is collected and adjustment points are communicated before order follow-up."],
        ["Production Coordination", "Order notes, timing and technical requirements are coordinated with relevant supply chain resources."],
        ["Inspection", "Appearance, specification and packing checks are coordinated according to agreed requirements."],
        ["Delivery Support", "Delivery details and export communication are followed up based on buyer instructions."]
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
      trustTitle: "面向B2B买家的务实信任支持",
      trustText: "我们重视透明协作：明确需求、务实讨论样品方向、整理报价要点，并在交付前协调检验事项。",
      howWorkTitle: "服务流程",
      howWorkText: "面向需要佛山面料采购、样品开发或报价支持的买家，提供清晰直接的服务流程。",
      finalCtaTitle: "准备沟通面料需求？",
      finalCtaText: "请提供面料类型、用途、预计数量、目标价格与交付国家/地区。我们会评估信息并回复可执行的下一步。",
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
      ],
      trustSignals: [
        ["透明采购流程", "在买家决策前清晰整理需求、样品选项与报价要点。"],
        ["样品申请支持", "在安排样品前协助明确样品用途、面料方向、手感、颜色与交付说明。"],
        ["开发沟通支持", "针对定制面料，将买家参考样转化为成分、克重、门幅与后整理等可执行说明。"],
        ["检验协调", "可围绕布面、颜色、门幅、克重、包装与约定规格协调检查要点。"],
        ["出口沟通支持", "协助进行包装要求、交付时间与出口相关事项的中英文沟通。"],
        ["以买家为中心的跟进", "流程围绕清晰下一步、务实时间安排与阶段性反馈展开。"]
      ],
      howWeWork: [
        ["提交询盘", "发送面料类型、用途、预计数量，以及参考样或图片。"],
        ["确认需求", "明确成分、门幅、克重、手感、颜色、功能与交付预期。"],
        ["推荐面料 / 开发样品", "根据项目讨论现货方向或定制打样路线。"],
        ["报价", "在规格、样品路线与数量方向明确后整理报价要点。"],
        ["样品确认", "收集买家反馈，并在订单跟进前沟通调整点。"],
        ["生产协调", "与相关供应链资源协调订单说明、时间安排与技术要求。"],
        ["检验", "根据约定需求协调外观、规格与包装检查。"],
        ["交付支持", "根据买家指示跟进交付细节与出口沟通。"]
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

// Product image paths point to the recommended replacement location.
// Until real files are added, the UI renders professional textile-style placeholder blocks instead of broken images.
export const products = [
  {
    id: "mid-weight-denim-fabric",
    imagePath: "/images/products/mid-weight-denim-fabric.jpg",
    inquiryType: "Get a Quote",
    placeholderTone: "denim",
    en: {
      name: "Mid-weight Denim Fabric",
      category: "Denim Fabric",
      imageLabel: "Denim fabric image placeholder",
      description: "A practical mid-weight denim direction for jeans, jackets and casual garment programs.",
      composition: "Cotton or cotton blend options",
      width: "Approx. 150 cm or by requirement",
      weight: "Approx. 9-12 oz, confirmed by project",
      application: "Jeans, jackets, casualwear",
      moq: "To be confirmed by specification",
      leadTime: "To be confirmed after sample and quotation",
      features: ["Indigo shade discussion", "Washing and finishing direction can be reviewed", "Suitable for garment development"],
      tags: ["Denim", "Mid-weight", "Garment"]
    },
    zh: {
      name: "中磅牛仔面料",
      category: "牛仔面料",
      imageLabel: "牛仔面料图片占位",
      description: "适用于牛仔裤、夹克与休闲服装项目的中磅牛仔面料方向。",
      composition: "棉或棉混纺可选",
      width: "约150厘米或按需求确认",
      weight: "约9-12盎司，按项目确认",
      application: "牛仔裤、夹克、休闲服装",
      moq: "按规格确认",
      leadTime: "打样与报价后确认",
      features: ["可沟通靛蓝色泽", "可评估洗水与后整理方向", "适合服装开发"],
      tags: ["牛仔", "中磅", "服装"]
    },
    filters: { category: "Denim Fabric", function: "Durable", application: "Garment" }
  },
  {
    id: "stretch-denim-fabric",
    imagePath: "/images/products/stretch-denim-fabric.jpg",
    inquiryType: "Request Samples",
    placeholderTone: "denim",
    en: {
      name: "Stretch Denim Fabric",
      category: "Denim Fabric",
      imageLabel: "Stretch denim image placeholder",
      description: "Stretch denim option for buyers developing comfort-focused jeans and casual trousers.",
      composition: "Cotton / Polyester / Spandex options",
      width: "Approx. 145-150 cm",
      weight: "Approx. 8-11 oz, confirmed by project",
      application: "Jeans, casual trousers, womenswear",
      moq: "To be confirmed by color and stretch direction",
      leadTime: "To be confirmed after sampling",
      features: ["Stretch direction available", "Comfort-focused garment use", "Color and handfeel can be discussed"],
      tags: ["Denim", "Stretch", "Comfort"]
    },
    zh: {
      name: "弹力牛仔面料",
      category: "牛仔面料",
      imageLabel: "弹力牛仔图片占位",
      description: "适用于舒适型牛仔裤与休闲裤开发的弹力牛仔面料方向。",
      composition: "棉 / 涤纶 / 氨纶可选",
      width: "约145-150厘米",
      weight: "约8-11盎司，按项目确认",
      application: "牛仔裤、休闲裤、女装",
      moq: "按颜色与弹力方向确认",
      leadTime: "打样后确认",
      features: ["可讨论弹力方向", "适合舒适型服装应用", "可沟通颜色与手感"],
      tags: ["牛仔", "弹力", "舒适"]
    },
    filters: { category: "Denim Fabric", function: "Stretch", application: "Garment" }
  },
  {
    id: "cotton-casual-fabric",
    imagePath: "/images/products/cotton-casual-fabric.jpg",
    inquiryType: "Get a Quote",
    placeholderTone: "slate",
    en: {
      name: "Cotton Casual Fabric",
      category: "Casual Fabric",
      imageLabel: "Cotton casual fabric image placeholder",
      description: "Cotton and cotton blend fabric direction for shirts, trousers and daily casualwear.",
      composition: "Cotton / Cotton-polyester options",
      width: "Approx. 145-150 cm",
      weight: "Approx. 160-240 gsm, editable by project",
      application: "Shirts, trousers, casualwear",
      moq: "To be confirmed by color and specification",
      leadTime: "To be confirmed after quotation",
      features: ["Plain or twill structure discussion", "Color and weight options by project", "Practical for repeated casualwear programs"],
      tags: ["Cotton", "Casual", "Garment"]
    },
    zh: {
      name: "棉类休闲面料",
      category: "休闲面料",
      imageLabel: "棉类休闲面料图片占位",
      description: "适用于衬衫、裤装与日常休闲服装的棉及棉混纺面料方向。",
      composition: "棉 / 棉涤可选",
      width: "约145-150厘米",
      weight: "约160-240克/平方米，按项目编辑",
      application: "衬衫、裤装、休闲服装",
      moq: "按颜色与规格确认",
      leadTime: "报价后确认",
      features: ["可讨论平纹或斜纹组织", "颜色与克重可按项目沟通", "适合持续型休闲服装项目"],
      tags: ["棉类", "休闲", "服装"]
    },
    filters: { category: "Casual Fabric", function: "Soft Touch", application: "Garment" }
  },
  {
    id: "functional-outdoor-fabric",
    imagePath: "/images/products/functional-outdoor-fabric.jpg",
    inquiryType: "Request Samples",
    placeholderTone: "navy",
    en: {
      name: "Functional Outdoor Fabric",
      category: "Functional Fabric",
      imageLabel: "Functional outdoor fabric image placeholder",
      description: "Functional fabric direction for outdoor garments, bags and performance-focused applications.",
      composition: "Polyester / Nylon / blended options",
      width: "Approx. 150 cm or by requirement",
      weight: "Confirmed by application",
      application: "Outdoor, jackets, bags",
      moq: "To be confirmed by finishing requirement",
      leadTime: "To be confirmed after sample direction",
      features: ["Water resistant finishing direction", "Outdoor and bag applications", "Testing requirements can be discussed"],
      tags: ["Functional", "Outdoor", "Water Resistant"]
    },
    zh: {
      name: "功能户外面料",
      category: "功能面料",
      imageLabel: "功能户外面料图片占位",
      description: "适用于户外服装、箱包及功能性应用方向的面料开发。",
      composition: "涤纶 / 尼龙 / 混纺可选",
      width: "约150厘米或按需求确认",
      weight: "按应用场景确认",
      application: "户外、夹克、箱包",
      moq: "按后整理要求确认",
      leadTime: "样品方向确认后确定",
      features: ["防泼水后整理方向", "适用于户外与箱包应用", "可沟通测试要求"],
      tags: ["功能", "户外", "防泼水"]
    },
    filters: { category: "Functional Fabric", function: "Water Resistant", application: "Outdoor" }
  },
  {
    id: "custom-dyed-fabric",
    imagePath: "/images/products/custom-dyed-fabric.jpg",
    inquiryType: "Custom Fabric",
    placeholderTone: "gold",
    en: {
      name: "Custom Dyed Fabric",
      category: "Custom Fabric",
      imageLabel: "Custom dyed fabric image placeholder",
      description: "Custom dyed fabric support for buyers with target color, handfeel and application requirements.",
      composition: "Cotton / Polyester / blended options",
      width: "Based on requirement",
      weight: "Based on requirement",
      application: "Brand development, OEM/ODM coordination",
      moq: "To be confirmed by dyeing route and color",
      leadTime: "To be confirmed after lab dip or sample review",
      features: ["Color direction and lab dip discussion", "Handfeel and finish coordination", "Suitable for custom development projects"],
      tags: ["Custom", "Dyed", "Development"]
    },
    zh: {
      name: "定染面料",
      category: "定制面料",
      imageLabel: "定染面料图片占位",
      description: "面向有目标颜色、手感与应用需求的买家，提供定染面料沟通支持。",
      composition: "棉 / 涤纶 / 混纺可选",
      width: "按需求确认",
      weight: "按需求确认",
      application: "品牌开发、OEM/ODM协调",
      moq: "按染色路线与颜色确认",
      leadTime: "实验室打样或样品评估后确认",
      features: ["可沟通颜色方向与色样", "协调手感与后整理", "适合定制开发项目"],
      tags: ["定制", "染色", "开发"]
    },
    filters: { category: "Custom Fabric", function: "Custom", application: "OEM/ODM" }
  },
  {
    id: "new-arrival-texture-fabric",
    imagePath: "/images/products/new-arrival-texture-fabric.jpg",
    inquiryType: "Request Samples",
    placeholderTone: "slate",
    en: {
      name: "New Arrival Texture Fabric",
      category: "New Arrivals",
      imageLabel: "New texture fabric image placeholder",
      description: "Textured fabric direction for seasonal garment development and sample review.",
      composition: "Cotton / Polyester / blended options",
      width: "Approx. 145-150 cm",
      weight: "Confirmed by texture and application",
      application: "Casualwear, womenswear, design development",
      moq: "To be confirmed by texture and color",
      leadTime: "To be confirmed after sample direction",
      features: ["Texture and surface effect discussion", "Suitable for seasonal development", "Sample review recommended before quotation"],
      tags: ["New", "Texture", "Sample"]
    },
    zh: {
      name: "新品肌理面料",
      category: "新品方向",
      imageLabel: "新品肌理面料图片占位",
      description: "适用于季节性服装开发与样品评估的肌理面料方向。",
      composition: "棉 / 涤纶 / 混纺可选",
      width: "约145-150厘米",
      weight: "按肌理与用途确认",
      application: "休闲装、女装、设计开发",
      moq: "按肌理与颜色确认",
      leadTime: "样品方向确认后确定",
      features: ["可沟通肌理与表面效果", "适合季节性开发", "建议先进行样品评估"],
      tags: ["新品", "肌理", "样品"]
    },
    filters: { category: "New Arrivals", function: "Soft Touch", application: "Garment" }
  },
  {
    id: "workwear-fabric",
    imagePath: "/images/products/workwear-fabric.jpg",
    inquiryType: "Get a Quote",
    placeholderTone: "navy",
    en: {
      name: "Workwear Fabric",
      category: "Functional Fabric",
      imageLabel: "Workwear fabric image placeholder",
      description: "Durable fabric direction for workwear, uniforms and practical garment applications.",
      composition: "Polyester / Cotton / blended options",
      width: "Approx. 145-150 cm",
      weight: "Approx. 220-320 gsm, confirmed by project",
      application: "Workwear, uniforms, practical garments",
      moq: "To be confirmed by color and specification",
      leadTime: "To be confirmed after quotation",
      features: ["Durability-focused direction", "Color and finish can be discussed", "Inspection points can be aligned before delivery"],
      tags: ["Workwear", "Durable", "Uniform"]
    },
    zh: {
      name: "工装面料",
      category: "功能面料",
      imageLabel: "工装面料图片占位",
      description: "适用于工装、制服与实用服装应用的耐用面料方向。",
      composition: "涤纶 / 棉 / 混纺可选",
      width: "约145-150厘米",
      weight: "约220-320克/平方米，按项目确认",
      application: "工装、制服、实用服装",
      moq: "按颜色与规格确认",
      leadTime: "报价后确认",
      features: ["偏耐用方向", "可沟通颜色与后整理", "交付前可协调检验要点"],
      tags: ["工装", "耐用", "制服"]
    },
    filters: { category: "Functional Fabric", function: "Durable", application: "Workwear" }
  },
  {
    id: "lightweight-garment-fabric",
    imagePath: "/images/products/lightweight-garment-fabric.jpg",
    inquiryType: "Get a Quote",
    placeholderTone: "gold",
    en: {
      name: "Lightweight Garment Fabric",
      category: "Casual Fabric",
      imageLabel: "Lightweight garment fabric image placeholder",
      description: "Lightweight fabric direction for shirts, dresses, linings and warm-season garments.",
      composition: "Cotton / Polyester / Rayon blend options",
      width: "Approx. 145-150 cm",
      weight: "Approx. 90-160 gsm, confirmed by application",
      application: "Shirts, dresses, light garments",
      moq: "To be confirmed by color and fabric route",
      leadTime: "To be confirmed after sample review",
      features: ["Light handfeel direction", "Suitable for warm-season garment use", "Composition and drape can be discussed"],
      tags: ["Lightweight", "Garment", "Soft Touch"]
    },
    zh: {
      name: "轻薄服装面料",
      category: "休闲面料",
      imageLabel: "轻薄服装面料图片占位",
      description: "适用于衬衫、连衣裙、里布与春夏服装的轻薄面料方向。",
      composition: "棉 / 涤纶 / 人棉混纺可选",
      width: "约145-150厘米",
      weight: "约90-160克/平方米，按用途确认",
      application: "衬衫、连衣裙、轻薄服装",
      moq: "按颜色与面料路线确认",
      leadTime: "样品评估后确认",
      features: ["轻薄手感方向", "适合春夏服装应用", "可沟通成分与垂感"],
      tags: ["轻薄", "服装", "柔软"]
    },
    filters: { category: "Casual Fabric", function: "Soft Touch", application: "Garment" }
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
