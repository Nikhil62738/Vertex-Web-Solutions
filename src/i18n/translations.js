// All UI copy lives here. Add a new language by adding a new key block.
export const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिंदी", short: "HI" },
  { code: "mr", label: "मराठी", short: "MR" },
  { code: "es", label: "Español", short: "ES" },
  { code: "fr", label: "Français", short: "FR" }
];

export const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      portfolio: "Portfolio",
      pricing: "Pricing",
      whyUs: "Why Us",
      faq: "FAQ",
      contact: "Contact",
      whatsapp: "WhatsApp",
      cta: "Start a project"
    },
    hero: {
      badge: "Modern startup studio for websites, apps and SaaS",
      titleA: "Ship a product your",
      titleB: "customers actually trust",
      subtitle:
        "Vertex Web Solutions designs and engineers fast, beautiful, conversion-focused websites, web apps and mobile products for ambitious founders.",
      primaryCta: "Start a project",
      secondaryCta: "Talk on WhatsApp",
      consoleTitle: "Launch Console",
      consoleSubtitle: "Growth-ready build",
      live: "Live",
      steps: ["Discovery", "Design", "Development", "Launch"]
    },
    stats: [
      { value: "25+", label: "Products shipped & planned" },
      { value: "99%", label: "Mobile-first coverage" },
      { value: "7d", label: "First preview, on average" },
      { value: "4.9★", label: "Client satisfaction" }
    ],
    trustedBy: {
      kicker: "Built with a modern stack",
      title: "Trusted tools we ship with every day"
    },
    services: {
      kicker: "Services",
      title: "Everything your startup needs to launch and scale",
      description: "Strategy, design and engineering under one roof — so you ship faster and look credible from day one.",
      items: [
        { title: "Website Development", description: "Premium business websites engineered for speed, SEO and lead generation." },
        { title: "Web Applications", description: "Custom dashboards, portals and SaaS products built with React and Node." },
        { title: "Mobile Apps", description: "Cross-platform iOS and Android apps with a clean, modern feel." },
        { title: "E-Commerce", description: "High-converting online stores with secure payments and analytics." },
        { title: "Maintenance & Support", description: "Ongoing updates, fixes and improvements so you stay focused on growth." },
        { title: "Brand & UI Design", description: "Logo, identity and product UI that feels premium and on-brand." }
      ]
    },
    process: {
      kicker: "How we work",
      title: "From idea to live product in four focused steps",
      description: "A simple, transparent process built around clear scope, weekly demos and on-time delivery.",
      steps: [
        { title: "Discovery", description: "We understand your goals, users and success metrics before writing a line of code." },
        { title: "Design", description: "Wireframes and UI in Figma. You see and approve every screen before development." },
        { title: "Development", description: "Production-grade build with weekly previews, code reviews and continuous improvements." },
        { title: "Launch & Grow", description: "We deploy, monitor and help you iterate — with optional ongoing support." }
      ]
    },
    portfolio: {
      kicker: "Selected work",
      title: "Real projects, shipped end to end",
      description: "A snapshot of recent products we've designed, built and launched.",
      clickHint: "View case study",
      details: "Project details",
      outcome: "Outcome",
      timeline: "Timeline",
      features: "Key features",
      tech: "Tech stack",
      viewLive: "View live",
      discuss: "Discuss a similar project",
      close: "Close"
    },
    pricing: {
      kicker: "Pricing",
      title: "Pricing tailored to what you actually need",
      description: "Every project is different. We quote based on the features you want, the complexity of your design, the integrations involved and your timeline — so you only pay for what you use.",
      factorsTitle: "What shapes your quote",
      factors: [
        { title: "Features & Scope", description: "Number of pages, dashboards, user roles, content types and admin tools." },
        { title: "Design & Customization", description: "Custom UI, brand identity, animations, illustrations and bespoke components." },
        { title: "Integrations & Timeline", description: "Payments, CRMs, APIs, analytics and how fast you need to launch." }
      ],
      howTitle: "How we quote",
      steps: [
        { title: "Share your requirements", description: "Tell us what you want to build via the contact form or WhatsApp." },
        { title: "Get a clear proposal", description: "Within one working day we send scope, timeline and a fixed quote." },
        { title: "Approve and we start", description: "No hidden costs. Pay in milestones tied to delivery." }
      ],
      ctaTitle: "Get your custom quote",
      ctaDescription: "Tell us about your project and receive a transparent estimate within 24 hours.",
      primaryCta: "Get a free quote",
      secondaryCta: "Talk on WhatsApp",
      note: "Free discovery call. No commitment until you approve the scope."
    },
    whyUs: {
      kicker: "Why Vertex",
      title: "A small team that ships like a big one",
      description: "We combine the speed of a freelancer with the quality and reliability of an agency.",
      items: [
        { title: "Modern Tech Stack", description: "React, Node, TypeScript and best-in-class tooling." },
        { title: "Fast Turnaround", description: "Most projects ship in 2-6 weeks with weekly previews." },
        { title: "SEO-Ready", description: "Optimized markup, performance and structured data out of the box." },
        { title: "Mobile-First", description: "Every screen looks great on phones, tablets and desktops." },
        { title: "Transparent Pricing", description: "Clear scope, fixed quote and milestone-based payments." },
        { title: "Real Support", description: "Reach a real human on WhatsApp, not a ticketing queue." }
      ]
    },
    testimonials: { kicker: "Loved by founders", title: "What our clients say about working with us" },
    faq: {
      kicker: "FAQ",
      title: "Answers to the questions we get asked the most",
      items: [
        { q: "How long does a typical project take?", a: "Most websites ship in 2-3 weeks. Custom web apps usually take 4-8 weeks depending on scope." },
        { q: "How is pricing calculated?", a: "Pricing is based on your features, complexity, integrations and timeline. After a short discovery call we send a fixed quote within 24 hours." },
        { q: "Do you offer maintenance after launch?", a: "Yes. We offer optional monthly care plans for updates, fixes and performance monitoring." },
        { q: "What tech do you use?", a: "React, Node.js, TypeScript, Tailwind CSS, MongoDB and Firebase — modern, fast and well-supported." },
        { q: "Can you redesign my existing site?", a: "Absolutely. We can rebuild your current site with a modern design, faster performance and better SEO." },
        { q: "How do we get started?", a: "Share your requirement via the contact form or WhatsApp. We'll reply with next steps within one working day." }
      ]
    },
    about: {
      kicker: "About Vertex",
      title: "A modern studio built for ambitious founders",
      intro: "Vertex Web Solutions is a small, focused team that designs and builds beautiful, fast, conversion-ready products for startups and small businesses.",
      sub: "We care about craft, speed and outcomes — every project we ship should make our clients look like the best version of themselves.",
      pillars: [
        ["Craft", "Pixel-perfect design and clean, maintainable code on every project."],
        ["Speed", "Tight timelines, weekly previews and clear communication throughout."],
        ["Honesty", "Transparent scope, transparent pricing, no surprises later."],
        ["Partnership", "We treat your product like our own — long after launch."]
      ]
    },
    cta: { title: "Ready to launch a product your customers actually trust?", description: "Tell us about your project in 60 seconds. We'll reply within one working day with scope, timeline and pricing.", primary: "Start a project", secondary: "Chat on WhatsApp" },
    contact: {
      kicker: "Contact", title: "Tell us what you want to build",
      description: "Share your requirement and we'll get back to you with a free quote.",
      whatsapp: "WhatsApp", email: "Email",
      form: { name: "Name", namePlaceholder: "Your name", email: "Email", emailPlaceholder: "you@example.com", phone: "Phone", phonePlaceholder: "+91", projectType: "Project type", requirement: "Requirement", requirementPlaceholder: "Describe your business, goals and any features you have in mind.", submit: "Send enquiry", sending: "Sending…", whatsappCta: "Send on WhatsApp instead", success: "Thanks! We've received your enquiry and will reply within 24 hours.", error: "Couldn't submit right now. Please try again or reach us on WhatsApp." },
      projectTypes: ["Website", "Web Application", "Mobile App", "E-Commerce", "Maintenance & Support"]
    },
    footer: { tagline: "Modern websites, web apps and mobile products for ambitious founders.", quickLinks: "Quick links", social: "Follow us", noRefund: "No-Refund Policy", rights: "All rights reserved.", language: "Language" },
    refund: {
      back: "Back to home", kicker: "Policy", title: "No-Refund Policy",
      intro: "No refunds will be processed once 24 hours have passed from the time of payment.",
      cardTitle: "No refunds after 24 hours",
      cardBody: "Refund requests are only accepted within 24 hours of payment. After that, all sales are considered final.",
      bullets: [
        "Refund requests must be made within 24 hours of payment.",
        "After 24 hours, no refund will be issued under any circumstances.",
        "Domain, hosting and third-party fees are non-refundable.",
        "Revisions and support are provided as agreed in the scope."
      ],
      contact: "Contact support"
    }
  },
  hi: {
    nav: { services: "सेवाएँ", process: "प्रक्रिया", portfolio: "पोर्टफोलियो", pricing: "मूल्य", whyUs: "क्यों चुनें", faq: "सवाल", contact: "संपर्क", whatsapp: "व्हाट्सऐप", cta: "प्रोजेक्ट शुरू करें" },
    hero: { badge: "वेबसाइट, ऐप्स और SaaS के लिए आधुनिक स्टार्टअप स्टूडियो", titleA: "ऐसा प्रोडक्ट बनाएँ जिस पर", titleB: "आपके ग्राहक भरोसा करें", subtitle: "Vertex Web Solutions महत्वाकांक्षी संस्थापकों के लिए तेज़, सुंदर और रूपांतरण-केंद्रित वेबसाइट, वेब ऐप्स और मोबाइल प्रोडक्ट डिज़ाइन और विकसित करता है।", primaryCta: "प्रोजेक्ट शुरू करें", secondaryCta: "व्हाट्सऐप पर बात करें", consoleTitle: "लॉन्च कंसोल", consoleSubtitle: "ग्रोथ-रेडी बिल्ड", live: "लाइव", steps: ["डिस्कवरी", "डिज़ाइन", "डेवलपमेंट", "लॉन्च"] },
    stats: [
      { value: "25+", label: "प्रोडक्ट डिलीवर/प्लान किए गए" },
      { value: "99%", label: "मोबाइल-फर्स्ट कवरेज" },
      { value: "7d", label: "पहला प्रिव्यू, औसतन" },
      { value: "4.9★", label: "क्लाइंट संतुष्टि" }
    ],
    trustedBy: { kicker: "आधुनिक स्टैक के साथ निर्मित", title: "हर दिन उपयोग किए जाने वाले भरोसेमंद टूल" },
    services: {
      kicker: "सेवाएँ", title: "आपके स्टार्टअप को लॉन्च और स्केल करने के लिए सब कुछ",
      description: "रणनीति, डिज़ाइन और इंजीनियरिंग एक ही जगह — पहले दिन से तेज़ और भरोसेमंद डिलीवरी।",
      items: [
        { title: "वेबसाइट डेवलपमेंट", description: "स्पीड, SEO और लीड के लिए बनी प्रीमियम बिज़नेस वेबसाइट।" },
        { title: "वेब एप्लिकेशन", description: "React और Node के साथ कस्टम डैशबोर्ड, पोर्टल और SaaS प्रोडक्ट।" },
        { title: "मोबाइल ऐप्स", description: "iOS और Android के लिए साफ़ और आधुनिक क्रॉस-प्लेटफ़ॉर्म ऐप्स।" },
        { title: "ई-कॉमर्स", description: "सुरक्षित भुगतान और एनालिटिक्स के साथ हाई-कन्वर्टिंग स्टोर।" },
        { title: "रखरखाव और सहायता", description: "लगातार अपडेट, फिक्स और सुधार ताकि आप ग्रोथ पर ध्यान दें।" },
        { title: "ब्रांड और UI डिज़ाइन", description: "प्रीमियम लोगो, पहचान और प्रोडक्ट UI जो ब्रांड के अनुरूप दिखे।" }
      ]
    },
    process: {
      kicker: "हम कैसे काम करते हैं", title: "विचार से लाइव प्रोडक्ट तक चार सरल चरण",
      description: "स्पष्ट स्कोप, साप्ताहिक डेमो और समय पर डिलीवरी पर बनी पारदर्शी प्रक्रिया।",
      steps: [
        { title: "डिस्कवरी", description: "कोड लिखने से पहले आपके लक्ष्य, यूज़र्स और सफलता मेट्रिक्स समझते हैं।" },
        { title: "डिज़ाइन", description: "Figma में वायरफ़्रेम और UI। डेवलपमेंट से पहले हर स्क्रीन आपकी स्वीकृति से।" },
        { title: "डेवलपमेंट", description: "प्रोडक्शन-ग्रेड बिल्ड, साप्ताहिक प्रिव्यू और लगातार सुधार।" },
        { title: "लॉन्च और ग्रो", description: "डिप्लॉय करते हैं, मॉनिटर करते हैं और आगे की सहायता देते हैं।" }
      ]
    },
    portfolio: { kicker: "चुनिंदा कार्य", title: "वास्तविक प्रोजेक्ट, अंत-से-अंत डिलीवर", description: "हाल ही में डिज़ाइन, निर्मित और लॉन्च किए गए प्रोडक्ट्स की झलक।", clickHint: "केस स्टडी देखें", details: "प्रोजेक्ट विवरण", outcome: "परिणाम", timeline: "अवधि", features: "मुख्य विशेषताएँ", tech: "तकनीक", viewLive: "लाइव देखें", discuss: "समान प्रोजेक्ट पर बात करें", close: "बंद करें" },
    pricing: {
      kicker: "मूल्य",
      title: "मूल्य उतना ही जितना आपको चाहिए",
      description: "हर प्रोजेक्ट अलग है। हम फीचर्स, डिज़ाइन की जटिलता, इंटीग्रेशन और टाइमलाइन के आधार पर कोट करते हैं — आप केवल वही चुकाते हैं जो आपको चाहिए।",
      factorsTitle: "आपके कोट को क्या तय करता है",
      factors: [
        { title: "फीचर्स और स्कोप", description: "पेजों की संख्या, डैशबोर्ड, यूज़र रोल्स, कंटेंट और एडमिन टूल।" },
        { title: "डिज़ाइन और कस्टमाइज़ेशन", description: "कस्टम UI, ब्रांड पहचान, एनिमेशन और विशिष्ट कंपोनेंट।" },
        { title: "इंटीग्रेशन और टाइमलाइन", description: "पेमेंट, CRM, API, एनालिटिक्स और लॉन्च की गति।" }
      ],
      howTitle: "हम कैसे कोट देते हैं",
      steps: [
        { title: "अपनी ज़रूरतें बताएँ", description: "फ़ॉर्म या व्हाट्सऐप के माध्यम से बताएँ कि आप क्या बनाना चाहते हैं।" },
        { title: "स्पष्ट प्रस्ताव पाएँ", description: "एक कार्यदिवस के भीतर स्कोप, टाइमलाइन और फिक्स्ड कोट भेजते हैं।" },
        { title: "मंज़ूरी मिलते ही शुरू", description: "कोई छिपी लागत नहीं। डिलीवरी से जुड़े माइलस्टोन पर भुगतान।" }
      ],
      ctaTitle: "अपना कस्टम कोट पाएँ",
      ctaDescription: "अपने प्रोजेक्ट के बारे में बताएँ — 24 घंटे में पारदर्शी अनुमान पाएँ।",
      primaryCta: "मुफ़्त कोट पाएँ",
      secondaryCta: "व्हाट्सऐप पर बात करें",
      note: "मुफ़्त डिस्कवरी कॉल। स्कोप मंज़ूर होने तक कोई प्रतिबद्धता नहीं।"
    },
    whyUs: {
      kicker: "क्यों Vertex", title: "छोटी टीम, बड़ी डिलीवरी",
      description: "फ्रीलांसर की गति और एजेंसी की गुणवत्ता का संयोजन।",
      items: [
        { title: "आधुनिक टेक स्टैक", description: "React, Node, TypeScript और सर्वोत्तम टूलिंग।" },
        { title: "तेज़ डिलीवरी", description: "ज़्यादातर प्रोजेक्ट 2-6 हफ़्तों में, साप्ताहिक प्रिव्यू के साथ।" },
        { title: "SEO-तैयार", description: "बेहतर मार्कअप, परफ़ॉर्मेंस और स्ट्रक्चर्ड डेटा।" },
        { title: "मोबाइल-फ़र्स्ट", description: "हर स्क्रीन फ़ोन, टैबलेट और डेस्कटॉप पर शानदार।" },
        { title: "पारदर्शी मूल्य", description: "स्पष्ट स्कोप, फिक्स्ड कोट और माइलस्टोन-आधारित भुगतान।" },
        { title: "असली सहायता", description: "व्हाट्सऐप पर असली व्यक्ति, न कि टिकट कतार।" }
      ]
    },
    testimonials: { kicker: "संस्थापकों का भरोसा", title: "हमारे साथ काम करने पर ग्राहक क्या कहते हैं" },
    faq: {
      kicker: "FAQ", title: "सबसे ज़्यादा पूछे जाने वाले सवाल",
      items: [
        { q: "एक प्रोजेक्ट में कितना समय लगता है?", a: "अधिकांश वेबसाइट 2-3 हफ़्तों में डिलीवर होती हैं। कस्टम वेब ऐप्स 4-8 हफ़्ते।" },
        { q: "मूल्य कैसे तय होता है?", a: "मूल्य आपके फीचर्स, जटिलता, इंटीग्रेशन और टाइमलाइन पर निर्भर करता है। डिस्कवरी कॉल के बाद 24 घंटे में फिक्स्ड कोट।" },
        { q: "क्या लॉन्च के बाद रखरखाव मिलता है?", a: "हाँ, अपडेट और परफ़ॉर्मेंस मॉनिटरिंग के लिए वैकल्पिक मासिक प्लान।" },
        { q: "कौन-सी तकनीक उपयोग करते हैं?", a: "React, Node.js, TypeScript, Tailwind, MongoDB और Firebase।" },
        { q: "क्या मौजूदा साइट रीडिज़ाइन कर सकते हैं?", a: "बिल्कुल। आधुनिक डिज़ाइन, तेज़ परफ़ॉर्मेंस और बेहतर SEO के साथ।" },
        { q: "शुरुआत कैसे करें?", a: "फ़ॉर्म या व्हाट्सऐप से अपनी ज़रूरत साझा करें। एक कार्यदिवस में जवाब।" }
      ]
    },
    about: {
      kicker: "Vertex के बारे में", title: "महत्वाकांक्षी संस्थापकों के लिए आधुनिक स्टूडियो",
      intro: "Vertex Web Solutions एक छोटी, फ़ोकस्ड टीम है जो स्टार्टअप्स और छोटे व्यवसायों के लिए सुंदर, तेज़ और कन्वर्ज़न-रेडी प्रोडक्ट बनाती है।",
      sub: "हम क्राफ्ट, गति और परिणाम पर ध्यान देते हैं — हर प्रोजेक्ट आपका सर्वोत्तम संस्करण दिखाए।",
      pillars: [
        ["क्राफ्ट", "हर प्रोजेक्ट में पिक्सेल-परफेक्ट डिज़ाइन और साफ़ कोड।"],
        ["गति", "छोटी समय-सीमा, साप्ताहिक प्रिव्यू और स्पष्ट संवाद।"],
        ["ईमानदारी", "पारदर्शी स्कोप और मूल्य, बाद में कोई आश्चर्य नहीं।"],
        ["पार्टनरशिप", "आपके प्रोडक्ट को अपना समझते हैं — लॉन्च के बाद भी।"]
      ]
    },
    cta: { title: "क्या आप ऐसा प्रोडक्ट लॉन्च करने को तैयार हैं जिस पर ग्राहक भरोसा करें?", description: "60 सेकंड में अपना प्रोजेक्ट बताएँ। एक कार्यदिवस में स्कोप, टाइमलाइन और कोट।", primary: "प्रोजेक्ट शुरू करें", secondary: "व्हाट्सऐप पर बात करें" },
    contact: {
      kicker: "संपर्क", title: "बताइए आप क्या बनाना चाहते हैं",
      description: "अपनी ज़रूरत साझा करें, हम मुफ़्त कोट के साथ जवाब देंगे।",
      whatsapp: "व्हाट्सऐप", email: "ईमेल",
      form: { name: "नाम", namePlaceholder: "आपका नाम", email: "ईमेल", emailPlaceholder: "aap@example.com", phone: "फ़ोन", phonePlaceholder: "+91", projectType: "प्रोजेक्ट प्रकार", requirement: "आवश्यकता", requirementPlaceholder: "अपने व्यवसाय, लक्ष्य और ज़रूरी फीचर्स बताएँ।", submit: "पूछताछ भेजें", sending: "भेजा जा रहा है…", whatsappCta: "इसके बजाय व्हाट्सऐप पर भेजें", success: "धन्यवाद! हमें आपकी पूछताछ मिल गई है, 24 घंटे में जवाब देंगे।", error: "अभी भेज नहीं पाए। कृपया फिर कोशिश करें या व्हाट्सऐप पर संपर्क करें।" },
      projectTypes: ["वेबसाइट", "वेब एप्लिकेशन", "मोबाइल ऐप", "ई-कॉमर्स", "रखरखाव और सहायता"]
    },
    footer: { tagline: "महत्वाकांक्षी संस्थापकों के लिए आधुनिक वेबसाइट, वेब ऐप्स और मोबाइल प्रोडक्ट।", quickLinks: "त्वरित लिंक", social: "हमें फॉलो करें", noRefund: "नो-रिफंड पॉलिसी", rights: "सर्वाधिकार सुरक्षित।", language: "भाषा" },
    refund: {
      back: "होम पर वापस", kicker: "नीति", title: "नो-रिफंड पॉलिसी",
      intro: "भुगतान के 24 घंटे के बाद कोई रिफंड नहीं किया जाएगा।",
      cardTitle: "24 घंटे के बाद रिफंड नहीं",
      cardBody: "रिफंड अनुरोध केवल भुगतान के 24 घंटे के भीतर स्वीकार किए जाते हैं।",
      bullets: [
        "रिफंड अनुरोध 24 घंटे के भीतर करें।",
        "24 घंटे के बाद किसी भी परिस्थिति में रिफंड नहीं।",
        "डोमेन, होस्टिंग और थर्ड-पार्टी शुल्क नॉन-रिफंडेबल।",
        "स्कोप के अनुसार रिवीज़न और सहायता।"
      ],
      contact: "सहायता से संपर्क करें"
    }
  },
  mr: {
    nav: { services: "सेवा", process: "प्रक्रिया", portfolio: "पोर्टफोलिओ", pricing: "किंमत", whyUs: "का निवडावे", faq: "प्रश्न", contact: "संपर्क", whatsapp: "व्हाट्सअ‍ॅप", cta: "प्रोजेक्ट सुरू करा" },
    hero: { badge: "वेबसाइट, अ‍ॅप्स आणि SaaS साठी आधुनिक स्टार्टअप स्टुडिओ", titleA: "असे प्रॉडक्ट तयार करा", titleB: "ज्यावर ग्राहक विश्वास ठेवतील", subtitle: "Vertex Web Solutions महत्त्वाकांक्षी संस्थापकांसाठी जलद, सुंदर आणि रूपांतरण-केंद्रित वेबसाइट, वेब अ‍ॅप्स आणि मोबाइल प्रॉडक्ट बनवते.", primaryCta: "प्रोजेक्ट सुरू करा", secondaryCta: "व्हाट्सअ‍ॅपवर बोला", consoleTitle: "लाँच कन्सोल", consoleSubtitle: "ग्रोथ-रेडी बिल्ड", live: "लाइव्ह", steps: ["डिस्कव्हरी", "डिझाइन", "डेव्हलपमेंट", "लाँच"] },
    stats: [
      { value: "25+", label: "प्रॉडक्ट डिलिव्हर/नियोजित" },
      { value: "99%", label: "मोबाइल-फर्स्ट कव्हरेज" },
      { value: "7d", label: "पहिला प्रिव्ह्यू, सरासरी" },
      { value: "4.9★", label: "क्लायंट समाधान" }
    ],
    trustedBy: { kicker: "आधुनिक स्टॅकसह बनवलेले", title: "दररोज वापरली जाणारी विश्वासू साधने" },
    services: {
      kicker: "सेवा", title: "तुमच्या स्टार्टअपला लाँच आणि स्केल करण्यासाठी सर्वकाही",
      description: "स्ट्रॅटेजी, डिझाइन आणि इंजिनिअरिंग एका छताखाली — पहिल्या दिवसापासून विश्वासार्ह डिलिव्हरी.",
      items: [
        { title: "वेबसाइट डेव्हलपमेंट", description: "स्पीड, SEO आणि लीडसाठी प्रीमियम बिझनेस वेबसाइट." },
        { title: "वेब अ‍ॅप्लिकेशन्स", description: "React आणि Node सह कस्टम डॅशबोर्ड, पोर्टल आणि SaaS प्रॉडक्ट." },
        { title: "मोबाइल अ‍ॅप्स", description: "iOS आणि Android साठी आधुनिक क्रॉस-प्लॅटफॉर्म अ‍ॅप्स." },
        { title: "ई-कॉमर्स", description: "सुरक्षित पेमेंट आणि अ‍ॅनालिटिक्ससह उच्च-रूपांतरण स्टोअर." },
        { title: "देखभाल आणि सहाय्य", description: "अद्ययावत, फिक्स आणि सुधारणा जेणेकरून तुम्ही ग्रोथवर लक्ष द्या." },
        { title: "ब्रँड आणि UI डिझाइन", description: "प्रीमियम लोगो, ओळख आणि प्रॉडक्ट UI." }
      ]
    },
    process: {
      kicker: "आम्ही कसे काम करतो", title: "कल्पनेपासून लाइव्ह प्रॉडक्टपर्यंत चार सोप्या टप्प्यांत",
      description: "स्पष्ट स्कोप, साप्ताहिक डेमो आणि वेळेवर डिलिव्हरीवर आधारित पारदर्शक प्रक्रिया.",
      steps: [
        { title: "डिस्कव्हरी", description: "कोड लिहिण्यापूर्वी तुमचे ध्येय, वापरकर्ते आणि यश मेट्रिक्स समजून घेतो." },
        { title: "डिझाइन", description: "Figma मध्ये वायरफ्रेम आणि UI. प्रत्येक स्क्रीन तुमच्या मान्यतेसह." },
        { title: "डेव्हलपमेंट", description: "प्रॉडक्शन-ग्रेड बिल्ड, साप्ताहिक प्रिव्ह्यू आणि सतत सुधारणा." },
        { title: "लाँच आणि ग्रो", description: "डिप्लॉय करतो, मॉनिटर करतो आणि पुढील सहाय्य देतो." }
      ]
    },
    portfolio: { kicker: "निवडक कामे", title: "वास्तविक प्रोजेक्ट्स, संपूर्णपणे डिलिव्हर", description: "अलीकडे डिझाइन, तयार आणि लाँच केलेल्या प्रॉडक्ट्सची झलक.", clickHint: "केस स्टडी पहा", details: "प्रोजेक्ट तपशील", outcome: "परिणाम", timeline: "कालावधी", features: "मुख्य वैशिष्ट्ये", tech: "तंत्रज्ञान", viewLive: "लाइव्ह पहा", discuss: "समान प्रोजेक्टवर चर्चा", close: "बंद करा" },
    pricing: {
      kicker: "किंमत",
      title: "तुमच्या गरजेनुसार किंमत",
      description: "प्रत्येक प्रोजेक्ट वेगळा असतो. आम्ही फीचर्स, डिझाइनची जटिलता, इंटिग्रेशन आणि टाइमलाइननुसार कोट देतो — तुम्हाला फक्त गरजेइतकेच पैसे लागतात.",
      factorsTitle: "तुमचा कोट कशावर अवलंबून असतो",
      factors: [
        { title: "फीचर्स आणि स्कोप", description: "पानांची संख्या, डॅशबोर्ड, यूजर रोल्स, कंटेंट आणि अ‍ॅडमिन साधने." },
        { title: "डिझाइन आणि कस्टमायझेशन", description: "कस्टम UI, ब्रँड ओळख, अ‍ॅनिमेशन आणि विशिष्ट घटक." },
        { title: "इंटिग्रेशन आणि टाइमलाइन", description: "पेमेंट, CRM, API, अ‍ॅनालिटिक्स आणि लाँचची गती." }
      ],
      howTitle: "आम्ही कसा कोट देतो",
      steps: [
        { title: "तुमच्या गरजा सांगा", description: "फॉर्म किंवा व्हाट्सअ‍ॅपवर सांगा तुम्हाला काय बनवायचे आहे." },
        { title: "स्पष्ट प्रस्ताव मिळवा", description: "एका कार्यदिवसात स्कोप, टाइमलाइन आणि फिक्स्ड कोट पाठवतो." },
        { title: "मान्यता मिळताच सुरू", description: "कोणतीही लपलेली किंमत नाही. डिलिव्हरीशी जोडलेले माईलस्टोन पेमेंट." }
      ],
      ctaTitle: "तुमचा कस्टम कोट मिळवा",
      ctaDescription: "प्रोजेक्टबद्दल सांगा — 24 तासांत पारदर्शक अंदाज मिळेल.",
      primaryCta: "मोफत कोट मिळवा",
      secondaryCta: "व्हाट्सअ‍ॅपवर बोला",
      note: "मोफत डिस्कव्हरी कॉल. स्कोप मान्य होईपर्यंत कोणतीही बांधिलकी नाही."
    },
    whyUs: {
      kicker: "का Vertex", title: "लहान टीम, मोठी डिलिव्हरी",
      description: "फ्रीलांसरची गती आणि एजन्सीची गुणवत्ता.",
      items: [
        { title: "आधुनिक टेक स्टॅक", description: "React, Node, TypeScript आणि उत्तम साधने." },
        { title: "जलद डिलिव्हरी", description: "बहुतेक प्रोजेक्ट 2-6 आठवड्यांत, साप्ताहिक प्रिव्ह्यूसह." },
        { title: "SEO-तयार", description: "उत्तम मार्कअप, परफॉर्मन्स आणि स्ट्रक्चर्ड डेटा." },
        { title: "मोबाइल-फर्स्ट", description: "प्रत्येक स्क्रीन फोन, टॅबलेट आणि डेस्कटॉपवर उत्तम." },
        { title: "पारदर्शक किंमत", description: "स्पष्ट स्कोप, फिक्स्ड कोट आणि माईलस्टोन-आधारित पेमेंट." },
        { title: "खरी मदत", description: "व्हाट्सअ‍ॅपवर खरा माणूस, तिकीट रांग नाही." }
      ]
    },
    testimonials: { kicker: "संस्थापकांचा विश्वास", title: "आमच्यासोबत काम केल्यावर ग्राहक काय म्हणतात" },
    faq: {
      kicker: "FAQ", title: "सर्वाधिक विचारले जाणारे प्रश्न",
      items: [
        { q: "एका प्रोजेक्टला किती वेळ लागतो?", a: "बहुतेक वेबसाइट 2-3 आठवड्यांत डिलिव्हर होतात. कस्टम वेब अ‍ॅप्स 4-8 आठवडे." },
        { q: "किंमत कशी ठरते?", a: "फीचर्स, जटिलता, इंटिग्रेशन आणि टाइमलाइननुसार. डिस्कव्हरी कॉलनंतर 24 तासांत फिक्स्ड कोट." },
        { q: "लाँचनंतर देखभाल मिळते का?", a: "होय. अद्ययावत आणि परफॉर्मन्स मॉनिटरिंगसाठी पर्यायी मासिक प्लॅन." },
        { q: "कोणते तंत्रज्ञान वापरता?", a: "React, Node.js, TypeScript, Tailwind, MongoDB आणि Firebase." },
        { q: "सध्याची साइट पुन्हा डिझाइन करता का?", a: "नक्कीच. आधुनिक डिझाइन, जलद परफॉर्मन्स आणि उत्तम SEO सह." },
        { q: "कसे सुरू करावे?", a: "फॉर्म किंवा व्हाट्सअ‍ॅपवर तुमची गरज सांगा. एका कार्यदिवसात उत्तर." }
      ]
    },
    about: {
      kicker: "Vertex बद्दल", title: "महत्त्वाकांक्षी संस्थापकांसाठी आधुनिक स्टुडिओ",
      intro: "Vertex Web Solutions ही एक लहान, फोकस्ड टीम आहे जी स्टार्टअप्स आणि लहान व्यवसायांसाठी सुंदर, जलद आणि कन्व्हर्जन-रेडी प्रॉडक्ट तयार करते.",
      sub: "आम्ही क्राफ्ट, गती आणि परिणामांवर लक्ष देतो — प्रत्येक प्रोजेक्ट तुमचा सर्वोत्तम चेहरा दाखवावा.",
      pillars: [
        ["क्राफ्ट", "प्रत्येक प्रोजेक्टमध्ये पिक्सेल-परफेक्ट डिझाइन आणि स्वच्छ कोड."],
        ["गती", "छोट्या मुदती, साप्ताहिक प्रिव्ह्यू आणि स्पष्ट संवाद."],
        ["प्रामाणिकता", "पारदर्शक स्कोप आणि किंमत, नंतर कोणतेही आश्चर्य नाही."],
        ["भागीदारी", "तुमचा प्रॉडक्ट आमचाच मानतो — लाँचनंतरही."]
      ]
    },
    cta: { title: "ग्राहक विश्वास ठेवतील असे प्रॉडक्ट लाँच करायला तयार आहात?", description: "60 सेकंदात तुमच्या प्रोजेक्टबद्दल सांगा. एका कार्यदिवसात स्कोप, टाइमलाइन आणि कोट.", primary: "प्रोजेक्ट सुरू करा", secondary: "व्हाट्सअ‍ॅपवर बोला" },
    contact: {
      kicker: "संपर्क", title: "तुम्हाला काय बनवायचे आहे ते सांगा",
      description: "तुमची गरज सांगा, आम्ही मोफत कोटसह उत्तर देऊ.",
      whatsapp: "व्हाट्सअ‍ॅप", email: "ईमेल",
      form: { name: "नाव", namePlaceholder: "तुमचे नाव", email: "ईमेल", emailPlaceholder: "tumhi@example.com", phone: "फोन", phonePlaceholder: "+91", projectType: "प्रोजेक्ट प्रकार", requirement: "गरज", requirementPlaceholder: "तुमचा व्यवसाय, ध्येय आणि आवश्यक फीचर्स सांगा.", submit: "चौकशी पाठवा", sending: "पाठवत आहे…", whatsappCta: "त्याऐवजी व्हाट्सअ‍ॅपवर पाठवा", success: "धन्यवाद! तुमची चौकशी मिळाली, 24 तासांत उत्तर देऊ.", error: "आत्ता पाठवू शकलो नाही. पुन्हा प्रयत्न करा किंवा व्हाट्सअ‍ॅपवर संपर्क करा." },
      projectTypes: ["वेबसाइट", "वेब अ‍ॅप्लिकेशन", "मोबाइल अ‍ॅप", "ई-कॉमर्स", "देखभाल आणि सहाय्य"]
    },
    footer: { tagline: "महत्त्वाकांक्षी संस्थापकांसाठी आधुनिक वेबसाइट, वेब अ‍ॅप्स आणि मोबाइल प्रॉडक्ट.", quickLinks: "त्वरित दुवे", social: "आम्हाला फॉलो करा", noRefund: "नो-रिफंड पॉलिसी", rights: "सर्व हक्क राखीव.", language: "भाषा" },
    refund: {
      back: "मुख्यपृष्ठावर परत", kicker: "धोरण", title: "नो-रिफंड पॉलिसी",
      intro: "पेमेंटनंतर 24 तासांनंतर कोणताही रिफंड दिला जाणार नाही.",
      cardTitle: "24 तासांनंतर रिफंड नाही",
      cardBody: "रिफंड विनंत्या फक्त पेमेंटच्या 24 तासांच्या आत स्वीकारल्या जातात.",
      bullets: [
        "रिफंड विनंती 24 तासांच्या आत करा.",
        "24 तासांनंतर कोणत्याही परिस्थितीत रिफंड नाही.",
        "डोमेन, होस्टिंग आणि थर्ड-पार्टी शुल्क नॉन-रिफंडेबल.",
        "स्कोपनुसार रिव्हिजन आणि सहाय्य."
      ],
      contact: "सहाय्याशी संपर्क"
    }
  },
  es: {
    nav: { services: "Servicios", process: "Proceso", portfolio: "Portafolio", pricing: "Precios", whyUs: "Por qué", faq: "FAQ", contact: "Contacto", whatsapp: "WhatsApp", cta: "Iniciar proyecto" },
    hero: { badge: "Estudio startup moderno para web, apps y SaaS", titleA: "Lanza un producto en el que", titleB: "tus clientes realmente confíen", subtitle: "Vertex Web Solutions diseña y desarrolla sitios web, aplicaciones y productos móviles rápidos, hermosos y enfocados en conversión para fundadores ambiciosos.", primaryCta: "Iniciar proyecto", secondaryCta: "Hablar por WhatsApp", consoleTitle: "Consola de Lanzamiento", consoleSubtitle: "Listo para crecer", live: "En vivo", steps: ["Descubrimiento", "Diseño", "Desarrollo", "Lanzamiento"] },
    stats: [
      { value: "25+", label: "Productos entregados y en planificación" },
      { value: "99%", label: "Cobertura mobile-first" },
      { value: "7d", label: "Primera vista previa promedio" },
      { value: "4.9★", label: "Satisfacción del cliente" }
    ],
    trustedBy: { kicker: "Construido con un stack moderno", title: "Herramientas confiables que usamos cada día" },
    services: {
      kicker: "Servicios", title: "Todo lo que tu startup necesita para lanzar y escalar",
      description: "Estrategia, diseño e ingeniería bajo el mismo techo — entregas más rápidas y credibilidad desde el día uno.",
      items: [
        { title: "Desarrollo web", description: "Sitios premium optimizados para velocidad, SEO y generación de leads." },
        { title: "Aplicaciones web", description: "Dashboards, portales y productos SaaS con React y Node." },
        { title: "Apps móviles", description: "Apps iOS y Android multiplataforma con un look moderno y limpio." },
        { title: "E-Commerce", description: "Tiendas online de alta conversión con pagos seguros y analítica." },
        { title: "Mantenimiento", description: "Actualizaciones, correcciones y mejoras continuas para enfocarte en crecer." },
        { title: "Marca y UI", description: "Logo, identidad y UI de producto que se sienten premium y consistentes." }
      ]
    },
    process: {
      kicker: "Cómo trabajamos", title: "De la idea al producto en cuatro pasos claros",
      description: "Proceso simple y transparente: alcance claro, demos semanales y entregas a tiempo.",
      steps: [
        { title: "Descubrimiento", description: "Entendemos tus objetivos, usuarios y métricas de éxito antes de escribir código." },
        { title: "Diseño", description: "Wireframes y UI en Figma. Apruebas cada pantalla antes del desarrollo." },
        { title: "Desarrollo", description: "Construcción de calidad con vistas previas semanales y mejoras continuas." },
        { title: "Lanzamiento", description: "Desplegamos, monitoreamos y te ayudamos a iterar con soporte opcional." }
      ]
    },
    portfolio: { kicker: "Trabajo seleccionado", title: "Proyectos reales, entregados de principio a fin", description: "Una muestra de productos recientes diseñados, construidos y lanzados por nosotros.", clickHint: "Ver caso", details: "Detalles", outcome: "Resultado", timeline: "Plazo", features: "Funciones clave", tech: "Tecnología", viewLive: "Ver en vivo", discuss: "Hablar de un proyecto similar", close: "Cerrar" },
    pricing: {
      kicker: "Precios",
      title: "Precios a la medida de lo que realmente necesitas",
      description: "Cada proyecto es diferente. Cotizamos según las funciones, la complejidad del diseño, las integraciones y el plazo — solo pagas por lo que usas.",
      factorsTitle: "Qué define tu cotización",
      factors: [
        { title: "Funciones y alcance", description: "Número de páginas, dashboards, roles, contenidos y herramientas de administración." },
        { title: "Diseño y personalización", description: "UI a medida, identidad de marca, animaciones e ilustraciones." },
        { title: "Integraciones y plazo", description: "Pagos, CRMs, APIs, analítica y la rapidez con la que necesitas lanzar." }
      ],
      howTitle: "Cómo cotizamos",
      steps: [
        { title: "Comparte tu necesidad", description: "Cuéntanos qué quieres construir por el formulario o WhatsApp." },
        { title: "Recibe una propuesta clara", description: "En un día hábil enviamos alcance, plazo y cotización fija." },
        { title: "Apruebas y empezamos", description: "Sin costos ocultos. Pago por hitos según entregas." }
      ],
      ctaTitle: "Obtén tu cotización personalizada",
      ctaDescription: "Cuéntanos sobre tu proyecto y recibe una estimación transparente en 24 horas.",
      primaryCta: "Solicitar cotización gratis",
      secondaryCta: "Hablar por WhatsApp",
      note: "Llamada de descubrimiento gratuita. Sin compromiso hasta aprobar el alcance."
    },
    whyUs: {
      kicker: "Por qué Vertex", title: "Un equipo pequeño que entrega como uno grande",
      description: "Combinamos la velocidad de un freelance con la calidad de una agencia.",
      items: [
        { title: "Stack moderno", description: "React, Node, TypeScript y las mejores herramientas." },
        { title: "Entrega rápida", description: "Mayoría de proyectos en 2-6 semanas, con vistas semanales." },
        { title: "Listo para SEO", description: "Markup, performance y datos estructurados optimizados." },
        { title: "Mobile-first", description: "Cada pantalla se ve genial en móvil, tablet y desktop." },
        { title: "Precios transparentes", description: "Alcance claro, cotización fija y pagos por hitos." },
        { title: "Soporte real", description: "Habla con una persona real por WhatsApp." }
      ]
    },
    testimonials: { kicker: "Amado por fundadores", title: "Lo que dicen nuestros clientes" },
    faq: {
      kicker: "FAQ", title: "Preguntas más frecuentes",
      items: [
        { q: "¿Cuánto dura un proyecto típico?", a: "La mayoría de sitios en 2-3 semanas. Web apps personalizadas 4-8 semanas según el alcance." },
        { q: "¿Cómo se calcula el precio?", a: "Según funciones, complejidad, integraciones y plazo. Tras una llamada inicial enviamos cotización fija en 24h." },
        { q: "¿Ofrecen mantenimiento después del lanzamiento?", a: "Sí, planes mensuales opcionales para actualizaciones y mejoras." },
        { q: "¿Qué tecnología usan?", a: "React, Node.js, TypeScript, Tailwind, MongoDB y Firebase." },
        { q: "¿Pueden rediseñar mi sitio actual?", a: "Por supuesto. Diseño moderno, mejor performance y SEO." },
        { q: "¿Cómo empezamos?", a: "Comparte tu necesidad por formulario o WhatsApp. Respondemos en un día hábil." }
      ]
    },
    about: {
      kicker: "Sobre Vertex", title: "Un estudio moderno para fundadores ambiciosos",
      intro: "Vertex Web Solutions es un equipo pequeño que diseña y construye productos hermosos, rápidos y orientados a conversión para startups y pymes.",
      sub: "Nos importa la artesanía, la velocidad y los resultados — cada proyecto debe mostrar la mejor versión de nuestros clientes.",
      pillars: [
        ["Artesanía", "Diseño pixel-perfect y código limpio en cada proyecto."],
        ["Velocidad", "Plazos ajustados, vistas previas semanales y comunicación clara."],
        ["Honestidad", "Alcance y precios transparentes, sin sorpresas."],
        ["Asociación", "Tratamos tu producto como si fuera nuestro — incluso después del lanzamiento."]
      ]
    },
    cta: { title: "¿Listo para lanzar un producto en el que tus clientes confíen?", description: "Cuéntanos en 60 segundos. Respondemos en un día hábil con alcance, plazo y cotización.", primary: "Iniciar proyecto", secondary: "Hablar por WhatsApp" },
    contact: {
      kicker: "Contacto", title: "Cuéntanos qué quieres construir",
      description: "Comparte tu necesidad y te responderemos con una cotización gratuita.",
      whatsapp: "WhatsApp", email: "Email",
      form: { name: "Nombre", namePlaceholder: "Tu nombre", email: "Email", emailPlaceholder: "tu@ejemplo.com", phone: "Teléfono", phonePlaceholder: "+91", projectType: "Tipo de proyecto", requirement: "Necesidad", requirementPlaceholder: "Describe tu negocio, objetivos y funciones deseadas.", submit: "Enviar consulta", sending: "Enviando…", whatsappCta: "Enviar por WhatsApp", success: "¡Gracias! Recibimos tu consulta y responderemos en 24h.", error: "No se pudo enviar ahora. Intenta de nuevo o escríbenos por WhatsApp." },
      projectTypes: ["Sitio web", "Aplicación web", "App móvil", "E-Commerce", "Mantenimiento"]
    },
    footer: { tagline: "Sitios web, apps y productos móviles modernos para fundadores ambiciosos.", quickLinks: "Enlaces rápidos", social: "Síguenos", noRefund: "Política de no reembolso", rights: "Todos los derechos reservados.", language: "Idioma" },
    refund: {
      back: "Volver al inicio", kicker: "Política", title: "Política de No Reembolso",
      intro: "No se procesarán reembolsos después de 24 horas del pago.",
      cardTitle: "Sin reembolsos pasadas 24 horas",
      cardBody: "Las solicitudes de reembolso se aceptan solo dentro de las 24 horas del pago.",
      bullets: [
        "Solicitar dentro de las 24 h del pago.",
        "Sin reembolso pasadas 24 h.",
        "Dominio, hosting y terceros no son reembolsables.",
        "Revisiones y soporte según alcance acordado."
      ],
      contact: "Contactar soporte"
    }
  },
  fr: {
    nav: { services: "Services", process: "Processus", portfolio: "Portfolio", pricing: "Tarifs", whyUs: "Pourquoi nous", faq: "FAQ", contact: "Contact", whatsapp: "WhatsApp", cta: "Lancer un projet" },
    hero: { badge: "Studio startup moderne pour sites, apps et SaaS", titleA: "Lancez un produit auquel", titleB: "vos clients font vraiment confiance", subtitle: "Vertex Web Solutions conçoit et développe des sites, applications web et produits mobiles rapides, beaux et orientés conversion pour fondateurs ambitieux.", primaryCta: "Lancer un projet", secondaryCta: "Discuter sur WhatsApp", consoleTitle: "Console de lancement", consoleSubtitle: "Prêt à grandir", live: "En direct", steps: ["Découverte", "Design", "Développement", "Lancement"] },
    stats: [
      { value: "25+", label: "Produits livrés & prévus" },
      { value: "99%", label: "Couverture mobile-first" },
      { value: "7d", label: "Premier aperçu en moyenne" },
      { value: "4.9★", label: "Satisfaction client" }
    ],
    trustedBy: { kicker: "Construit avec une stack moderne", title: "Des outils fiables que nous utilisons chaque jour" },
    services: {
      kicker: "Services", title: "Tout ce dont votre startup a besoin pour lancer et grandir",
      description: "Stratégie, design et ingénierie réunis — pour livrer plus vite et inspirer confiance dès le premier jour.",
      items: [
        { title: "Développement web", description: "Sites premium optimisés pour la vitesse, le SEO et la génération de leads." },
        { title: "Applications web", description: "Dashboards, portails et SaaS construits avec React et Node." },
        { title: "Apps mobiles", description: "Applications iOS et Android multiplateformes au design moderne." },
        { title: "E-Commerce", description: "Boutiques à forte conversion avec paiements sécurisés et analytics." },
        { title: "Maintenance", description: "Mises à jour, corrections et améliorations continues." },
        { title: "Marque & UI", description: "Logo, identité et UI produit premium et cohérents." }
      ]
    },
    process: {
      kicker: "Notre méthode", title: "De l'idée au produit en quatre étapes",
      description: "Un processus simple et transparent : périmètre clair, démos hebdomadaires et livraison à temps.",
      steps: [
        { title: "Découverte", description: "Nous comprenons vos objectifs, utilisateurs et métriques avant d'écrire du code." },
        { title: "Design", description: "Wireframes et UI dans Figma. Vous validez chaque écran avant le développement." },
        { title: "Développement", description: "Construction de qualité production avec aperçus hebdomadaires." },
        { title: "Lancement", description: "Déploiement, monitoring et accompagnement avec support optionnel." }
      ]
    },
    portfolio: { kicker: "Sélection", title: "Des projets réels, livrés de bout en bout", description: "Un aperçu de produits récemment conçus, développés et lancés.", clickHint: "Voir l'étude", details: "Détails du projet", outcome: "Résultat", timeline: "Délai", features: "Fonctionnalités", tech: "Stack", viewLive: "Voir en ligne", discuss: "Parler d'un projet similaire", close: "Fermer" },
    pricing: {
      kicker: "Tarifs",
      title: "Des tarifs sur mesure, selon vos besoins réels",
      description: "Chaque projet est différent. Nous chiffrons selon les fonctionnalités, la complexité du design, les intégrations et le délai — vous ne payez que ce dont vous avez besoin.",
      factorsTitle: "Ce qui détermine votre devis",
      factors: [
        { title: "Fonctionnalités & périmètre", description: "Nombre de pages, dashboards, rôles, contenus et outils d'admin." },
        { title: "Design & personnalisation", description: "UI sur mesure, identité de marque, animations et composants spécifiques." },
        { title: "Intégrations & délai", description: "Paiements, CRM, API, analytics et rapidité de lancement." }
      ],
      howTitle: "Comment nous chiffrons",
      steps: [
        { title: "Partagez votre besoin", description: "Dites-nous ce que vous voulez construire via le formulaire ou WhatsApp." },
        { title: "Recevez une proposition claire", description: "Sous un jour ouvré, nous envoyons périmètre, délai et devis fixe." },
        { title: "Vous validez et on démarre", description: "Aucun coût caché. Paiement par jalons liés à la livraison." }
      ],
      ctaTitle: "Obtenez votre devis personnalisé",
      ctaDescription: "Parlez-nous de votre projet — recevez une estimation transparente sous 24 h.",
      primaryCta: "Demander un devis gratuit",
      secondaryCta: "Discuter sur WhatsApp",
      note: "Appel découverte gratuit. Aucun engagement avant validation du périmètre."
    },
    whyUs: {
      kicker: "Pourquoi Vertex", title: "Une petite équipe qui livre comme une grande",
      description: "La vitesse d'un freelance, la qualité d'une agence.",
      items: [
        { title: "Stack moderne", description: "React, Node, TypeScript et les meilleurs outils." },
        { title: "Livraison rapide", description: "La plupart des projets en 2-6 semaines avec aperçus hebdomadaires." },
        { title: "Prêt pour le SEO", description: "Markup, performance et données structurées optimisés." },
        { title: "Mobile-first", description: "Chaque écran est superbe sur mobile, tablette et desktop." },
        { title: "Tarifs transparents", description: "Périmètre clair, devis fixe et paiements par jalons." },
        { title: "Vrai support", description: "Un vrai humain sur WhatsApp, pas un ticket." }
      ]
    },
    testimonials: { kicker: "Adoré par les fondateurs", title: "Ce que nos clients disent de nous" },
    faq: {
      kicker: "FAQ", title: "Questions les plus posées",
      items: [
        { q: "Combien de temps prend un projet ?", a: "La plupart des sites en 2-3 semaines. Apps web sur mesure : 4-8 semaines selon le périmètre." },
        { q: "Comment le prix est-il calculé ?", a: "Selon fonctionnalités, complexité, intégrations et délai. Après un appel découverte, devis fixe sous 24 h." },
        { q: "Proposez-vous de la maintenance ?", a: "Oui, des forfaits mensuels optionnels pour mises à jour et améliorations." },
        { q: "Quelle stack utilisez-vous ?", a: "React, Node.js, TypeScript, Tailwind, MongoDB et Firebase." },
        { q: "Pouvez-vous refaire mon site actuel ?", a: "Bien sûr. Design moderne, meilleures performances et meilleur SEO." },
        { q: "Comment commence-t-on ?", a: "Partagez votre besoin via le formulaire ou WhatsApp. Réponse sous un jour ouvré." }
      ]
    },
    about: {
      kicker: "À propos", title: "Un studio moderne pour fondateurs ambitieux",
      intro: "Vertex Web Solutions est une petite équipe qui conçoit et construit des produits beaux, rapides et orientés conversion pour startups et PME.",
      sub: "Artisanat, vitesse et résultats — chaque projet doit montrer la meilleure version de nos clients.",
      pillars: [
        ["Artisanat", "Design pixel-parfait et code propre sur chaque projet."],
        ["Vitesse", "Délais serrés, aperçus hebdomadaires et communication claire."],
        ["Honnêteté", "Périmètre et tarifs transparents, aucune surprise."],
        ["Partenariat", "Nous traitons votre produit comme le nôtre — même après le lancement."]
      ]
    },
    cta: { title: "Prêt à lancer un produit en lequel vos clients ont confiance ?", description: "Parlez-nous de votre projet en 60 secondes. Réponse sous un jour ouvré avec périmètre, délai et devis.", primary: "Lancer un projet", secondary: "Discuter sur WhatsApp" },
    contact: {
      kicker: "Contact", title: "Dites-nous ce que vous voulez construire",
      description: "Partagez votre besoin, nous revenons vers vous avec un devis gratuit.",
      whatsapp: "WhatsApp", email: "Email",
      form: { name: "Nom", namePlaceholder: "Votre nom", email: "Email", emailPlaceholder: "vous@exemple.com", phone: "Téléphone", phonePlaceholder: "+91", projectType: "Type de projet", requirement: "Besoin", requirementPlaceholder: "Décrivez votre activité, vos objectifs et les fonctionnalités souhaitées.", submit: "Envoyer la demande", sending: "Envoi…", whatsappCta: "Envoyer plutôt sur WhatsApp", success: "Merci ! Nous avons reçu votre demande, réponse sous 24 h.", error: "Envoi impossible. Réessayez ou contactez-nous sur WhatsApp." },
      projectTypes: ["Site web", "Application web", "App mobile", "E-Commerce", "Maintenance"]
    },
    footer: { tagline: "Sites, web apps et produits mobiles modernes pour fondateurs ambitieux.", quickLinks: "Liens rapides", social: "Suivez-nous", noRefund: "Politique de non-remboursement", rights: "Tous droits réservés.", language: "Langue" },
    refund: {
      back: "Retour à l'accueil", kicker: "Politique", title: "Politique de non-remboursement",
      intro: "Aucun remboursement ne sera accordé après 24 heures du paiement.",
      cardTitle: "Pas de remboursement après 24 heures",
      cardBody: "Les remboursements sont acceptés uniquement dans les 24 heures suivant le paiement.",
      bullets: [
        "Demande sous 24 h après paiement.",
        "Pas de remboursement après 24 h.",
        "Domaine, hébergement et services tiers non remboursables.",
        "Révisions et support selon le scope convenu."
      ],
      contact: "Contacter le support"
    }
  }
};
