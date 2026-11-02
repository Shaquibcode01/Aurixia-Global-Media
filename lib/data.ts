export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "seo",
    icon: "search",
    title: "Search Engine Optimisation",
    short: "Rank higher, reach further, convert better.",
    tagline: "Rank higher. Stay there.",
    body: "We build sustainable organic visibility through technical SEO, content strategy, and authoritative link building. Our approach is data-first — we audit your current position, identify the highest-value keyword opportunities, and execute a roadmap that compounds month over month.",
    stat: "3.2X",
    statLabel: "Avg. organic traffic growth in 6 months",
    items: [
      "Technical SEO audit & site health fixes",
      "Keyword research & content gap analysis",
      "On-page optimisation & schema markup",
      "Authority link building & digital PR",
      "Local SEO & Google Business Profile",
      "Monthly ranking & traffic reports",
    ],
  },
  {
    id: "performance",
    icon: "trend",
    title: "Performance Marketing",
    short: "Data-driven paid campaigns that deliver measurable ROI.",
    tagline: "Every rupee working harder.",
    body: "We run paid campaigns across Google, Meta, and programmatic channels with a singular focus: measurable ROI. From audience research and creative strategy to bid management and conversion optimisation, we own the full paid funnel.",
    stat: "8X",
    statLabel: "Average return on ad spend",
    items: [
      "Google Search, Display & Shopping campaigns",
      "Meta (Facebook & Instagram) paid social",
      "Audience segmentation & retargeting",
      "Landing page CRO & A/B testing",
      "Weekly performance dashboards",
    ],
  },
  {
    id: "social",
    icon: "share",
    title: "Social Media Marketing",
    short: "Content and community that builds brand equity at scale.",
    tagline: "Community that converts.",
    body: "We manage your brand's social presence end-to-end — content calendars, creative production, community management, and influencer partnerships. We build audiences that actually engage, not just follow.",
    stat: "4.7X",
    statLabel: "Average engagement rate vs industry benchmark",
    items: [
      "Platform strategy & content calendar",
      "Original creative — reels, carousels, stories",
      "Community management & DM handling",
      "Influencer identification & campaign management",
      "Monthly analytics & growth reporting",
    ],
  },
  {
    id: "content",
    icon: "pen",
    title: "Content Strategy",
    short: "Stories that position your brand as the authority.",
    tagline: "Be the answer they find.",
    body: "From long-form articles and thought leadership to video scripts and email journeys, we build content engines that attract, educate and convert — mapped to every stage of your buyer's journey.",
    stat: "212%",
    statLabel: "Avg. lift in inbound leads from content",
    items: [
      "Content audit & editorial strategy",
      "Blogs, whitepapers & case studies",
      "Video & podcast scripting",
      "Email nurture & newsletter programmes",
      "Content distribution & repurposing",
    ],
  },
  {
    id: "brand",
    icon: "star",
    title: "Brand Identity",
    short: "Visual and verbal systems that make you unforgettable.",
    tagline: "Unforgettable by design.",
    body: "We craft visual and verbal brand systems that make you impossible to ignore. From logo and colour palette to messaging architecture and brand guidelines, we give your brand the foundation it needs to scale consistently.",
    stat: "150+",
    statLabel: "Brand identities created across industries",
    items: [
      "Brand discovery & positioning workshop",
      "Logo design & visual identity system",
      "Messaging architecture & tagline",
      "Brand guidelines document",
      "Social media & marketing templates",
    ],
  },
  {
    id: "web",
    icon: "chart",
    title: "Web & Analytics",
    short: "Sites and dashboards built to perform and inform.",
    tagline: "Sites built to perform. Data built to inform.",
    body: "We design and develop high-performance websites and set up analytics infrastructure that gives you real visibility into what's working. From GA4 and GTM to custom dashboards, we turn data into decisions.",
    stat: "99",
    statLabel: "Average Lighthouse performance score",
    items: [
      "Website design & development (React / WordPress)",
      "GA4 & Google Tag Manager setup",
      "Conversion tracking & goal configuration",
      "Custom reporting dashboards",
      "Core Web Vitals & performance optimisation",
    ],
  },
];

export const PROCESS = [
  { n: "01", title: "Discover", text: "We audit your brand, market, and competitors to find the real opportunity.", channel: "seo" },
  { n: "02", title: "Strategise", text: "A full-funnel growth plan built around your specific business goals.", channel: "paid" },
  { n: "03", title: "Execute", text: "Creative campaigns launched with precision across every relevant channel.", channel: "social" },
  { n: "04", title: "Scale", text: "We double down on what works and compound your results month over month.", channel: "content" },
];

export const CHANNELS = [
  { id: "seo", label: "SEO", value: 30, color: "#C5A042" },
  { id: "paid", label: "Paid", value: 25, color: "#000080" },
  { id: "social", label: "Social", value: 25, color: "#6B6BC4" },
  { id: "content", label: "Content", value: 20, color: "#E3CFA0" },
];

export const WHY = [
  "Strategy-first thinking — every campaign starts with a clear growth objective.",
  "Full-funnel execution — from awareness to conversion, we own the journey.",
  "Transparent reporting — real numbers, no vanity metrics, no excuses.",
  "Delhi NCR roots, global ambition — local insight with international standards.",
];

export const CASES = [
  {
    cat: "Performance Marketing",
    duration: "3 months",
    industry: "D2C Food & Beverage",
    client: "Confidential client",
    title: "From ₹4L to ₹38L monthly revenue on paid alone.",
    challenge:
      "The brand had great product-market fit offline but their paid campaigns were burning budget at a 1.4x return with no clear audience structure.",
    solution:
      "We rebuilt the account around full-funnel audiences, launched creative testing sprints, and rebuilt the landing pages for mobile-first conversion.",
    tags: ["Meta Ads", "Google Shopping", "CRO"],
    results: [
      ["9.4X", "Return on ad spend (from 1.4X)"],
      ["₹38L", "Monthly revenue by month 3"],
      ["-46%", "Cost per acquisition"],
    ],
  },
  {
    cat: "Brand Identity",
    duration: "6 weeks",
    industry: "Ayurvedic Beauty & Wellness",
    client: "Confidential client",
    title: "A 6-year-old brand that finally looked premium-retail ready.",
    challenge:
      "The brand had loyal customers but dated branding that was holding them back from premium retail and D2C growth. Their visual identity didn't reflect the quality of their products.",
    solution:
      "Complete brand identity overhaul — new logo system, earthy-premium colour palette, packaging redesign, and a brand guidelines document that their in-house team could execute consistently.",
    tags: ["Brand Identity", "Packaging Design", "Brand Guidelines"],
    results: [
      ["2.3X", "Increase in average order value post-rebrand"],
      ["3", "Premium retail listings secured within 4 months"],
      ["41%", "Increase in website conversion rate"],
    ],
  },
  {
    cat: "Social Media",
    duration: "4 months",
    industry: "Real Estate",
    client: "Confidential client",
    title: "12,000 qualified leads from Instagram in one quarter.",
    challenge:
      "The developer was running generic real estate content with 0.4% engagement and no lead pipeline from social. Their competitors were dominating Instagram with aspirational content.",
    solution:
      "We repositioned their social presence around lifestyle storytelling — neighbourhood guides, architect interviews, and resident testimonial reels. Combined with a targeted lead-gen campaign, we built a pipeline that their sales team could work.",
    tags: ["Instagram", "Reels", "Lead Gen"],
    results: [
      ["12K", "Qualified leads in Q3"],
      ["5.1%", "Average engagement rate (vs 0.4% before)"],
      ["3.8X", "Growth in follower base"],
    ],
  },
  {
    cat: "SEO",
    duration: "8 months",
    industry: "EdTech",
    client: "Confidential client",
    title: "From page 6 to position 1 for 140 high-intent keywords.",
    challenge:
      "The courses were great, but organic traffic was flat. Competitors with larger budgets owned every commercial keyword in the category.",
    solution:
      "A technical clean-up, topic-cluster content strategy and a focused digital PR programme built authority where it counted — fast.",
    tags: ["Technical SEO", "Topic Clusters", "Link Building"],
    results: [
      ["4.1X", "Organic sessions in 8 months"],
      ["140", "Keywords ranking in position 1–3"],
      ["62%", "Drop in blended CAC"],
    ],
  },
  {
    cat: "Content",
    duration: "5 months",
    industry: "B2B SaaS",
    client: "Confidential client",
    title: "Thought leadership that filled a 6-month sales pipeline.",
    challenge:
      "The company sold to CFOs but had no voice in the category. Sales cycles were long and outbound was getting ignored.",
    solution:
      "We launched a research-led content programme — a quarterly benchmark report, executive newsletters and LinkedIn thought leadership — all feeding a gated nurture flow.",
    tags: ["Research Report", "Newsletter", "LinkedIn"],
    results: [
      ["212%", "Increase in inbound demo requests"],
      ["18K", "Newsletter subscribers"],
      ["₹4.2Cr", "Pipeline influenced"],
    ],
  },
];

export const FAQ = [
  { q: "How quickly can you start?", a: "Most engagements kick off within 5–7 business days of signing. We begin with a discovery workshop and audit so strategy is locked before spend starts." },
  { q: "Do you work with startups or only established brands?", a: "Both. Early-stage teams get lean, scrappy growth sprints; established brands get full-funnel programmes with dedicated pods." },
  { q: "What does a free audit include?", a: "A review of your website, search visibility, paid accounts and social presence — plus a prioritised list of quick wins and a 90-day opportunity map." },
  { q: "How do you report results?", a: "Live dashboards plus a monthly review call. Real numbers tied to revenue and leads — no vanity metrics." },
];

export const TESTIMONIALS = [
  { quote: "Aurixia rebuilt our paid funnel from scratch. Within one quarter our ROAS went from 1.4x to over 9x — and it has held.", name: "Founder", org: "D2C Food Brand" },
  { quote: "They don't pitch vanity metrics. Every report ties back to revenue, and every call ends with a clear next move.", name: "Head of Marketing", org: "B2B SaaS" },
  { quote: "The rebrand changed how retailers see us. We went from 'local label' to shelf-ready in under two months.", name: "Co-founder", org: "Wellness Brand" },
];

export const MARQUEE = ["SEO", "Performance Marketing", "Social Media", "Content Strategy", "Brand Identity", "Web & Analytics", "Growth Strategy"];
