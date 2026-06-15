/* ============================================================
   site-data.js — content for the personal-site UI kit.
   Bilingual (EN / 中文). Structured around the three career
   parts from Zhao Wang's interview deck. Content drawn from the
   CV (zhao_wang_cv_Academic.qmd) and Presentation_ZH.html.

   Bilingual fields are { en, zh }; plain strings are shared.
   Read them with the tx(value, lang) helper. Exposed as window.SITE.
   ============================================================ */
window.SITE = {
  ui: {
    nav: {
      about:        { en: "About",        zh: "简介" },
      work:         { en: "Career",       zh: "工作经历" },
      talks:        { en: "Talks",        zh: "演讲" },
      publications: { en: "Publications", zh: "论文发表" },
      contact:      { en: "Get in touch", zh: "联系我" },
    },
    hero: {
      status:  { en: "Open to collaboration", zh: "欢迎合作交流" },
      seeWork: { en: "See my work",            zh: "查看工作经历" },
      scholar: { en: "Scholar",                zh: "学术主页" },
    },
    sections: {
      aboutEyebrow:  { en: "About",          zh: "简介" },
      aboutTitle:    { en: "Research that ships as software", zh: "把研究转化为可用的软件" },
      workEyebrow:   { en: "Career in three parts", zh: "三段工作经历" },
      workTitle:     { en: "Ten years across structures, infrastructure & transport AI", zh: "十年：从结构工程到基础设施与交通AI" },
      workIntro:     { en: "From civil & structural engineering, to national infrastructure data and AI, to open-source transport-network science.", zh: "从土木与结构工程，到国家级基础设施数据与人工智能，再到开源交通网络科学。" },
      talksEyebrow:  { en: "Talks & demos",  zh: "演讲与演示" },
      talksTitle:    { en: "Watch the research in action", zh: "研究成果实录" },
      talksIntro:    { en: "How satellite imagery and machine learning can map road conditions where survey data doesn't exist.", zh: "如何用卫星影像与机器学习，在缺乏实地调查数据的地区评估路况。" },
      pubsEyebrow:   { en: "Publications",   zh: "论文发表" },
      pubsTitle:     { en: "Selected publications", zh: "代表性论文" },
      pubsIntro:     { en: "18 peer-reviewed journal papers and selected conference papers. Full citations on Google Scholar.", zh: "18 篇同行评审期刊论文及代表性会议论文。完整引用见 Google Scholar。" },
      eduTitle:      { en: "Education", zh: "教育背景" },
      rolesLabel:    { en: "Roles", zh: "职位" },
    },
    pubs: {
      all:        { en: "All",        zh: "全部" },
      journal:    { en: "Journal",    zh: "期刊" },
      conference: { en: "Conference", zh: "会议" },
      best:       { en: "Best Paper", zh: "最佳论文" },
      doi:        { en: "DOI",        zh: "DOI" },
      find:       { en: "Find paper", zh: "查找论文" },
    },
    contact: {
      title: { en: "Let's build something useful", zh: "让我们一起做点有用的东西" },
      body:  { en: "Open to research collaborations, tool development and consulting on transport data, GIS and machine learning.", zh: "欢迎在交通数据、GIS 与机器学习方向的科研合作、工具开发与咨询。" },
      back:  { en: "Back to top", zh: "回到顶部" },
    },
  },

  person: {
    name: "Zhao Wang",
    nameZh: "王曌",
    role:        { en: "Transport Data Scientist & GIS Researcher", zh: "交通数据科学家 & GIS 研究员" },
    affiliation: { en: "Institute for Transport Studies · University of Leeds", zh: "交通研究所 · 英国利兹大学" },
    tagline:     { en: "I build open-source tools that turn messy spatial data into route networks planners can act on — across cycling, road safety and resilient infrastructure.", zh: "我开发开源工具，把杂乱的空间数据转化为规划者可直接使用的交通路网——涵盖骑行、道路安全与韧性基础设施。" },
    email: "wangzhao0217@gmail.com",
    location: { en: "Leeds, UK", zh: "英国 · 利兹" },
    links: {
      github: "https://github.com/wangzhao0217",
      scholar: "https://scholar.google.com/scholar?q=Zhao+Wang+transport+network+rubberised+concrete",
    },
  },

  stats: [
    { value: "18",   label: { en: "Journal articles",     zh: "期刊论文" },   sublabel: { en: "peer-reviewed",     zh: "同行评审" } },
    { value: "6",    label: { en: "Open-source packages", zh: "开源软件包" }, sublabel: { en: "R · Python · Rust", zh: "R · Python · Rust" } },
    { value: "5",    label: { en: "Conference papers",    zh: "会议论文" },   sublabel: { en: "incl. Best Paper",  zh: "含最佳论文奖" } },
    { value: "10yr", label: { en: "Research & practice",  zh: "科研与工程" }, sublabel: { en: "UK · EU",           zh: "英国 · 欧盟" } },
  ],

  about: [
    { en: "I'm a transport data scientist with a Ph.D. in Civil & Structural Engineering and over six years of experience in geospatial analysis, network modelling and spatial database design.",
      zh: "我是一名交通数据科学家，拥有土木与结构工程博士学位，在地理空间分析、网络建模与空间数据库设计领域拥有六年以上经验。" },
    { en: "My work bridges academic research and national infrastructure practice — from open-source R, Python and Rust packages adopted by UK government transport agencies, to machine learning for infrastructure condition assessment.",
      zh: "我的工作连接学术研究与国家基础设施实践——从被英国政府交通机构采用的开源 R、Python 与 Rust 软件包，到面向基础设施状态评估的机器学习。" },
  ],

  // ---- Three career parts (mirrors the interview deck) ----
  parts: [
    {
      num: "PART 1",
      title:  { en: "Civil & Structural Engineering", zh: "土木与结构工程" },
      period: "2015 – 2022",
      roles: [
        { en: "Ph.D., Civil & Structural Engineering — University of Sheffield", zh: "土木与结构工程博士 — 英国谢菲尔德大学" },
        { en: "Research Associate — Nuclear AMRC, University of Sheffield",       zh: "研究助理 — 英国先进制造研究中心 Nuclear AMRC" },
        { en: "Structural Engineer — Waterman Group",                            zh: "结构工程师 — 英国 Waterman Group" },
      ],
      blurb: { en: "Material constitutive modelling, large-scale nonlinear FE dynamics and special-structure assessment.", zh: "材料本构建模、大型非线性有限元动力学与特种结构评估。" },
      projects: [
        { title: { en: "Concrete constitutive modelling & FE simulation", zh: "混凝土本构与有限元仿真" },
          image: null,
          blurb: { en: "Constitutive models for high-performance & rubberised concrete; 3D nonlinear FE dynamics for a 9 m drop and near-field blast on nuclear decommissioning containers (DCC).", zh: "高性能与橡胶混凝土本构模型；核退役容器（DCC）9 米极限跌落与近场爆炸的三维非线性有限元动力仿真。" },
          tags: [{ tone: "kraft", label: { en: "FEA", zh: "有限元" } }, { tone: "slate", label: { en: "Concrete", zh: "混凝土" } }],
          links: [] },
        { title: { en: "Structural assessment & AI crack detection", zh: "结构评估与 AI 智能检测" },
          image: null,
          blurb: { en: "CS454 CAT-2 assessment of Greys Bridge; Drax FGD steel-structure stability; AI image-based concrete crack monitoring.", zh: "Greys 大桥 CS454 CAT-2 评估；Drax 电厂 FGD 钢结构稳定性分析；AI 图像混凝土裂缝智能监测。" },
          tags: [{ tone: "slate", label: { en: "Assessment", zh: "结构评估" } }, { tone: "heather", label: "AI" }],
          links: [] },
      ],
    },
    {
      num: "PART 2",
      title:  { en: "National Highways & TRL", zh: "英国国家公路局 & 英国交通研究所" },
      period: "2020 – present",
      roles: [
        { en: "Senior Asset Data & Intelligence Analyst — National Highways", zh: "高级资产数据与智能分析师 — 英国国家公路局" },
        { en: "Researcher — Transport Research Laboratory (TRL)",             zh: "研究员 — 英国交通研究所 (TRL)" },
      ],
      blurb: { en: "Infrastructure data governance and transport AI at national scale.", zh: "国家级基础设施数据治理与交通人工智能。" },
      projects: [
        { title: { en: "Unpaved Road Condition Analysis", zh: "未铺装路网 AI 评估" },
          image: "assets/unpaved-roads-ml.jpg",
          imageAlt: { en: "Multimodal machine-learning architecture diagram", zh: "多模态机器学习神经网络架构图" },
          meta: { en: "TRL · Python · multimodal ML", zh: "TRL · Python · 多模态机器学习" },
          blurb: { en: "Assessing unpaved roads from satellite imagery with multimodal ML and a fine-tuned LLaVA vision-language model — cut survey cost to €22/km, deployed in Tanzania & Madagascar. Best Paper, ITS Asia-Pacific.", zh: "用多模态机器学习与微调的 LLaVA 视觉大模型评估未铺装道路，将调查成本降至约 €22/km，应用于坦桑尼亚与马达加斯加；获 ITS 亚太会议最佳论文奖。" },
          tags: [{ tone: "kraft", label: "Python" }, { tone: "heather", label: { en: "Deep learning", zh: "深度学习" } }, { tone: "slate", label: { en: "Remote sensing", zh: "遥感" } }],
          links: [{ label: "GitHub", href: "https://github.com/wangzhao0217/satellite-unpaved-roads", icon: "github" }, { label: "DOI", href: "https://doi.org/10.1016/j.jtrangeo.2025.104525", icon: "link-45deg" }] },
        { title: { en: "National asset data alignment: GDMS ⇄ Confirm", zh: "国家级资产数据空间对齐：GDMS ⇄ Confirm" },
          image: null,
          meta: { en: "National Highways · Python · ArcPy", zh: "英国国家公路局 · Python · ArcPy" },
          blurb: { en: "Rebuilt the spatial-matching engine in Python/ArcPy to reconcile two national drainage-asset datasets across the Strategic Road Network — cut data deviation by 99% and manual review by 85%, now deployed nationwide.", zh: "用 Python/ArcPy 重构空间匹配引擎，对齐国家级路网两大排水资产数据库，数据偏差降低 99%、人工复审减少 85%，并已在全国推广部署。" },
          tags: [{ tone: "slate", label: "ArcGIS Pro" }, { tone: "kraft", label: "Python" }, { tone: "sage", label: { en: "ETL", zh: "数据管线" } }],
          links: [] },
        { title: { en: "Road safety & flood-risk intelligence", zh: "道路安全与防汛风险智能分析" },
          image: "assets/flood-checker.png",
          imageAlt: { en: "Flood-event image checker beside a road-asset map", zh: "防汛事件图像核查工具与路网资产地图" },
          meta: { en: "TRL / National Highways · ML · GIS", zh: "TRL / 国家公路局 · 机器学习 · GIS" },
          blurb: { en: "Skid-resistance forecasting from climate data; a collision-risk model for Ireland's roads; PointCNN LiDAR asset extraction; and STATS19 collision clustering to prioritise the Road Liable to Flooding programme.", zh: "基于气候数据的路面抗滑预测；为爱尔兰道路开发的碰撞风险模型；PointCNN 激光雷达资产提取；以及基于 STATS19 碰撞聚类的易涝路段防汛优先级排序。" },
          tags: [{ tone: "heather", label: { en: "ML", zh: "机器学习" } }, { tone: "slate", label: { en: "LiDAR", zh: "激光雷达" } }, { tone: "clay", label: { en: "Flood risk", zh: "防汛" } }],
          links: [] },
      ],
    },
    {
      num: "PART 3",
      title:  { en: "University of Leeds — ITS", zh: "英国利兹大学 · 交通研究所" },
      period: "2023 – present",
      roles: [
        { en: "Research Fellow — Institute for Transport Studies (Horizon Europe)", zh: "研究员 — 交通研究所（欧盟 Horizon Europe 项目）" },
      ],
      blurb: { en: "National transport-network modelling and high-performance open-source GIS.", zh: "国家级交通网络建模与高性能开源 GIS。" },
      projects: [
        { title: { en: "Network Planning Tool for Scotland", zh: "苏格兰国家自行车路网规划平台 (NPT)" },
          image: "assets/npt-scotland.png",
          imageAlt: { en: "Cycle route network coloured by flow, Edinburgh", zh: "爱丁堡自行车路网按流量着色" },
          meta: { en: "Lead developer · R · live tool", zh: "主要开发者 · R · 在线平台" },
          blurb: { en: "A national, open cycle-network planning tool used by all 32 Scottish local authorities to estimate cycle uptake and prioritise investment (NPT & NPW).", zh: "国家级开源自行车路网规划平台（NPT 与 NPW），已被苏格兰全部 32 个地方政府用于估算骑行需求并辅助投资决策。" },
          tags: [{ tone: "slate", label: "R" }, { tone: "sage", label: { en: "Route networks", zh: "路网" } }],
          links: [{ label: "GitHub", href: "https://github.com/nptscot/npt", icon: "github" }, { label: { en: "Live tool", zh: "在线平台" }, href: "https://nptscot.github.io", icon: "box-arrow-up-right" }] },
        { title: { en: "stplanr", zh: "stplanr" },
          image: "assets/od-desire-lines.png",
          imageAlt: { en: "Origin–destination desire lines across a region", zh: "区域起讫点（OD）期望线" },
          meta: { en: "Contributor · R · 50,000+ downloads", zh: "贡献者 · R · 下载量 5 万+" },
          blurb: { en: "Sustainable transport planning with R: desire lines, routing and travel-flow aggregation. An rOpenSci package in production use by UK government transport agencies.", zh: "R 语言可持续交通规划包：期望线、路径计算与流量聚合。rOpenSci 旗下软件包，被英国政府交通机构投入实际使用。" },
          tags: [{ tone: "slate", label: "R" }, { tone: "heather", label: "rOpenSci" }],
          links: [{ label: "GitHub", href: "https://github.com/ropensci/stplanr", icon: "github" }, { label: "DOI", href: "https://doi.org/10.32614/RJ-2018-053", icon: "link-45deg" }] },
        { title: { en: "corenet", zh: "corenet" },
          image: null,
          meta: { en: "First author · R · J. Transport Geography 2026", zh: "第一作者 · R · 《Journal of Transport Geography》2026" },
          blurb: { en: "A flexible framework for generating and prioritising 'core' cycle network designs, combining diverse datasets with user requirements — used by Transport Scotland and DfT.", zh: "一套灵活的框架，结合多源数据与用户需求生成并优选『核心』自行车路网，已应用于苏格兰交通局与英国交通部。" },
          tags: [{ tone: "slate", label: "R" }, { tone: "sage", label: { en: "Networks", zh: "路网" } }, { tone: "clay", label: { en: "Optimisation", zh: "优化" } }],
          links: [{ label: "GitHub", href: "https://github.com/nptscot/corenet", icon: "github" }, { label: "DOI", href: "https://doi.org/10.1016/j.jtrangeo.2025.104549", icon: "link-45deg" }] },
        { title: { en: "parenx & anime — network simplification", zh: "parenx 与 anime — 路网简化与匹配" },
          image: null,
          meta: { en: "Python · R · Rust", zh: "Python · R · Rust" },
          blurb: { en: "parenx simplifies complex networks via image skeletonisation; anime is a Rust-accelerated route-matching engine (built with Esri engineers) delivering up to 1000× speed-ups on large-scale spatial computation.", zh: "parenx 基于图像骨架化简化复杂路网；anime 是与 Esri 工程师合作、用 Rust 重构的路网匹配引擎，在大规模空间计算中实现最高 1000 倍提速。" },
          tags: [{ tone: "kraft", label: "Python" }, { tone: "heather", label: "Rust" }],
          links: [{ label: "parenx", href: "https://pypi.org/project/parenx/", icon: "box-arrow-up-right" }, { label: "anime", href: "https://github.com/JosiahParry/anime", icon: "github" }] },
        { title: { en: "Horizon Europe — ZEV-UP · ePowerMove · WibiCharge", zh: "欧盟 Horizon Europe — ZEV-UP · ePowerMove · WibiCharge" },
          image: null,
          meta: { en: "Lead researcher (Leeds) · EV systems", zh: "利兹大学项目负责人 · 新能源交通" },
          blurb: { en: "Leading Leeds' work on EU EV projects: feasibility & life-cycle assessment for frugal EVs (ZEV-UP), smart-charging network planning (ePowerMove) and wireless-charging infrastructure siting (WibiCharge).", zh: "负责利兹大学在欧盟新能源汽车项目中的工作：低成本电动车可行性与全生命周期评估（ZEV-UP）、智能充电网络规划（ePowerMove）与无线充电基础设施选址（WibiCharge）。" },
          tags: [{ tone: "sage", label: { en: "EV", zh: "电动车" } }, { tone: "slate", label: { en: "Optimisation", zh: "优化" } }],
          links: [] },
      ],
    },
  ],

  education: [
    { degree: { en: "Ph.D., Civil & Structural Engineering", zh: "土木与结构工程 博士" }, school: { en: "University of Sheffield", zh: "英国谢菲尔德大学" }, year: "2015 – 2019" },
    { degree: { en: "MSc, Civil Engineering (Distinction)", zh: "土木工程 硕士（优异）" }, school: { en: "Cardiff University", zh: "英国卡迪夫大学" }, year: "2013 – 2014" },
    { degree: { en: "BSc, Civil Engineering", zh: "土木工程 学士" }, school: { en: "Shijiazhuang Railway University", zh: "石家庄铁道大学" }, year: "2008 – 2012" },
  ],

  talk: {
    title: { en: "Assessment of Unpaved Road Networks using Satellite Imagery & Machine Learning", zh: "基于卫星影像与机器学习的未铺装路网评估" },
    venue: { en: "Intelligent Transport Systems Asia-Pacific, Chengdu — Best Paper Award", zh: "智能交通系统亚太会议，成都 — 最佳论文奖" },
    poster: "assets/unpaved-roads-ml.jpg",
    youtubeId: "", // ← set your own talk/demo recording id
    note: { en: "Drop in your own talk or demo recording — set talk.youtubeId in site-data.js.", zh: "在 site-data.js 中设置 talk.youtubeId，即可嵌入你的演讲或演示录像。" },
  },

  // Academic titles/venues stay in English (papers are published in English).
  publications: [
    { year: "2026", type: "Journal", authors: "Wang, Z., Hu, H., Mahfouz, H., Fonseca-Zamora, J.P., Lucas-Smith, M., Carlino, D., Calder, A., Hu, C., Davis, M., Talbot, J., Lovelace, R.", title: "Corenet: a flexible framework for generating and prioritising core cycle network designs", venue: "Journal of Transport Geography, 131, 104549", doi: "10.1016/j.jtrangeo.2025.104549" },
    { year: "2026", type: "Journal", authors: "Wang, Z., Xin, C., Workman, R., Hu, H., Yu, X., Tian, Y., Lovelace, R., Zhang, J., Chen, H.", title: "Advancing unpaved road assessment in Africa: leveraging multimodal machine learning and large language-and-vision assistants across satellite imagery resolutions", venue: "Journal of Transport Geography, 131, 104525", doi: "10.1016/j.jtrangeo.2025.104525" },
    { year: "2025", type: "Journal", authors: "Deakin, W., Wang, Z., Parry, J., Lovelace, R.", title: "Route network simplification for transport planning", venue: "Environment and Planning B: Urban Analytics and City Science", doi: "10.1177/23998083251387986" },
    { year: "2025", type: "Conference", authors: "Lovelace, R., Wang, Z., Mahfouz, H.", title: "Mapping, classifying, and integrating diverse street network datasets: new methods and open source tools for active travel planning", venue: "33rd GIS Research UK Conference (GISRUK), Bristol, UK" },
    { year: "2025", type: "Journal", authors: "Feng, W.K., Xin, C.L., Wang, Z., Yu, X.Y.", title: "Design of a type of strike-slip active fault container for shaking table tests", venue: "Journal of Rock Mechanics and Geotechnical Engineering", doi: "10.1016/j.jrmge.2025.03.001" },
    { year: "2025", type: "Journal", authors: "Fei, Y., Xin, C.L., Wang, Z., Yu, X.Y., Feng, W.K., Hu, Y.", title: "Investigating deformation and failure mechanisms of discontinuous anti-dip bench rock slopes through shaking table tests and numerical simulations", venue: "Rock Mechanics and Rock Engineering, 58, 5329–5361", doi: "10.1007/s00603-024-04346-y" },
    { year: "2025", type: "Journal", authors: "Xin, C.L., Zeng, L., Wang, Z., Feng, W.K., Yu, X., Hajirasouliha, I.", title: "Characterizing dynamic responses of rock slopes to near-fault pulse-like ground motions: insights from shaking table tests and numerical analysis", venue: "Rock Mechanics and Rock Engineering", doi: "10.1007/s00603-025-04798-w" },
    { year: "2025", type: "Journal", authors: "Xin, C.L., Li, W.H., Wang, Z., Feng, W.K., Yu, X., Hajirasouliha, I.", title: "Seismic stability evaluation of benched bedding rock slopes with varying landforms", venue: "Engineering Geology, 344, 108216", doi: "10.1016/j.enggeo.2025.108216" },
    { year: "2025", type: "Journal", authors: "Xin, C.L., Yang, L.J., Wang, Z., Yu, X., Feng, W.K.", title: "Seismic resilience analysis of high-speed railway tunnels across fault zones using ensemble learning approach", venue: "Underground Space", doi: "10.1016/j.undsp.2025.04.011" },
    { year: "2024", type: "Journal", authors: "Wang, Z., Hu, H., Papastergiou, P., Angelakopoulos, H., Guadagnini, M., Pilakoutas, K.", title: "Effect of fibre length on the mechanical properties of SFRC using recycled steel fibres", venue: "Construction and Building Materials, 415, 134890", doi: "10.1016/j.conbuildmat.2024.134890" },
    { year: "2024", type: "Journal", authors: "Xin, C.L., Fei, Y., Feng, W.K., Wang, Z., Li, W.H.", title: "Seismic responses and shattering cumulative effects of bedding parallel stepped rock slope: model test and numerical simulation", venue: "Journal of Rock Mechanics and Geotechnical Engineering", doi: "10.1016/j.jrmge.2024.03.031" },
    { year: "2024", type: "Journal", authors: "Xin, C.L., Li, W.H., Wang, Z., Feng, W.K., Hajirasouliha, I., Yu, X.Y.", title: "Shaking table tests on the stability of dip and anti-dip rock slopes with structural planes induced by seismic motions", venue: "Engineering Geology, 340, 107707", doi: "10.1016/j.enggeo.2024.107707" },
    { year: "2024", type: "Conference", authors: "Lovelace, R., Wang, Z., Deakin, W., Parry, J.", title: "Reproducible methods for network simplification for data visualisation and transport planning", venue: "32nd GIS Research UK Conference (GISRUK), Leeds, UK", doi: "10.5281/zenodo.11077553" },
    { year: "2023", type: "Journal", authors: "Workman, R., Wong, P., Wright, A., Wang, Z.", title: "Prediction of unpaved road conditions using high-resolution optical satellite imagery and machine learning", venue: "Remote Sensing, 15(16), 3985", doi: "10.3390/rs15163985" },
    { year: "2023", type: "Journal", authors: "Chen, L., Wang, Z., Li, B., de Borst, R.", title: "Computation of the crack opening displacement in the phase-field model", venue: "International Journal of Solids and Structures, 283, 112496", doi: "10.1016/j.ijsolstr.2023.112496" },
    { year: "2022", type: "Journal", authors: "Xin, C.L., Wang, Z., Hajirasouliha, I., Chen, T., Gao, B.", title: "Seismic response mechanisms of casing-shape composite tunnel lining: theoretical analysis and shaking table test verification", venue: "Soil Dynamics and Earthquake Engineering, 162, 107440", doi: "10.1016/j.soildyn.2022.107440" },
    { year: "2022", type: "Conference", authors: "Wang, Z., Workman, R.", title: "Assessment of unpaved road network using satellite imagery and machine learning", venue: "Intelligent Transport Systems Asia-Pacific, Chengdu, China", best: true },
    { year: "2020", type: "Journal", authors: "Wang, Z., Hajirasouliha, I., Guadagnini, M., Pilakoutas, K.", title: "Axial behaviour of FRP-confined concrete columns: an experimental investigation", venue: "Construction and Building Materials, 263, 121023", doi: "10.1016/j.conbuildmat.2020.121023" },
    { year: "2020", type: "Journal", authors: "Wang, Z., Hu, H., Guadagnini, M., Pilakoutas, K.", title: "Tensile stress-strain characteristics of rubberised concrete from flexural tests", venue: "Construction and Building Materials, 236, 117591", doi: "10.1016/j.conbuildmat.2019.117591" },
    { year: "2019", type: "Journal", authors: "Wang, Z., Chen, L., Guadagnini, M., Pilakoutas, K.", title: "Shear behaviour model for confined and unconfined rubberised concrete", venue: "Journal of Composites for Construction", doi: "10.1061/(ASCE)CC.1943-5614.0000962" },
    { year: "2018", type: "Journal", authors: "Hu, H., Wang, Z., Figueiredo, F.P., Papastergiou, P., Guadagnini, M., Pilakoutas, K.", title: "Post-cracking tensile behaviour of blended steel fibre reinforced concrete", venue: "Structural Concrete", doi: "10.1002/suco.201800100" },
    { year: "2017", type: "Conference", authors: "Wang, Z., Margarit, D.E., Guadagnini, M., Pilakoutas, K.", title: "Shear behaviour of confined and unconfined rubberised concrete", venue: "1st Int. Conf. on Construction Materials for Sustainable Future, Zadar, Croatia" },
    { year: "2017", type: "Conference", authors: "Margarit, D.E., Wang, Z., Guadagnini, M., Pilakoutas, K.", title: "Proof-of-concept testing of FRP confined rubberised concrete coupling beams", venue: "Advanced Composites in Construction (ACIC), Sheffield, UK" },
  ],
};
