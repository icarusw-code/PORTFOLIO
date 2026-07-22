export const headerNav = [
  { title: "expertise", url: "#expertise" },
  { title: "case studies", url: "#case-studies" },
  { title: "demos", url: "#demos" },
  { title: "research", url: "#projects" },
  { title: "experience", url: "#experience" },
  { title: "contact", url: "#contact" },
];

export const heroData = {
  eyebrow: "MES · MCS · SMART FACTORY",
  title: "Reliable systems for factories that never stop.",
  description:
    "I am a Manufacturing Systems Engineer focused on MES/MCS integration, material-flow optimization, and deployment automation for large-scale EV battery plants across the United States.",
  availability: "Based in Michigan · Supporting multi-site operations",
  metrics: [
    { value: "90%", label: "less deployment verification time" },
    { value: "8", label: "U.S. manufacturing sites supported" },
    { value: "24/7", label: "high-throughput production environments" },
    { value: "E2E", label: "MES–MCS–WMS–ERP traceability" },
  ],
};

export const expertiseText = [
  {
    index: "01",
    title: "Manufacturing Systems",
    description:
      "Designing and stabilizing the software layer that connects production, logistics, and automated equipment.",
    tags: ["MES", "MCS", "CIM", "RTD", "MHS", "WMS", "ERP"],
  },
  {
    index: "02",
    title: "Automation & Diagnostics",
    description:
      "Turning repetitive deployment checks and production investigations into reliable, repeatable workflows.",
    tags: ["Python", "REST API", "Regex", "GitLab", "Root Cause Analysis"],
  },
  {
    index: "03",
    title: "Data & Material Flow",
    description:
      "Using data to improve routing accuracy, reveal bottlenecks, and support faster operational decisions.",
    tags: ["Oracle SQL", "Routing Logic", "Visualization", "Performance Analysis"],
  },
  {
    index: "04",
    title: "Industrial Integration",
    description:
      "Coordinating control, infrastructure, and production teams through complex commissioning and go-live cycles.",
    tags: ["PLC", "OPC-UA", "HSMS-GEM", "Solace", "Pub/Sub"],
  },
];

export const caseStudies = [
  {
    index: "01",
    label: "DEPLOYMENT INTEGRITY",
    title: "MES Deployment Audit & UI Intelligence",
    summary:
      "A two-part toolset: a seven-step deployment audit that traces changed UI source to server registrations, and a semantic search server that indexes MES UI structure and service metadata.",
    challenge:
      "Manual checks could miss indirect service dependencies or deployed requirements, while navigating a large C# WPF/XAML codebase made UI behavior analysis slow.",
    contribution:
      "Built automated GitLab diff analysis, BR/DA extraction, dependency tracing, server-list reconciliation, requirement cross-validation, and a FastAPI semantic-search pipeline grounded in static analysis and embeddings.",
    impact: ["90% reduction in verification time", "Seven dependent checks consolidated into one workflow"],
    stack: ["Python", "Flet", "GitLab REST API", "Oracle", "FastAPI", "Embeddings"],
    note: "Professional case study · Details generalized to protect proprietary systems",
  },
  {
    index: "02",
    label: "WIP RECONCILIATION",
    title: "MES–CIM Pallet Consistency Check",
    summary:
      "A bulk reconciliation tool that compares pallet presence, physical state, and transaction history between MES and CIM and exports dashboard and CSV reports.",
    challenge:
      "More than 130,000 records had to be compared efficiently to separate true missing pallets, FULL/EMPTY state mismatches, and operational exceptions.",
    contribution:
      "Implemented optimized Oracle bulk fetch, cross-system consistency rules, transaction-code mapping, summary dashboards, and fast CSV export for the full comparison result.",
    impact: ["130K+ records processed", "Missing and FULL/EMPTY discrepancies classified"],
    stack: ["Python", "Pandas", "Oracle", "Bulk Fetch", "CSV Reporting"],
    note: "Professional case study · Repository details pending public-source review",
  },
  {
    index: "03",
    label: "SYSTEM INTEGRATION",
    title: "Multi-site Smart Factory Deployment",
    summary:
      "Commissioning and stabilization of MES/MCS interfaces for automated material handling in high-throughput EV battery production.",
    challenge:
      "Multiple system layers and equipment vendors had to maintain end-to-end material traceability during go-live.",
    contribution:
      "Led interface validation, coordinated cross-functional issue resolution, and supported on-site production stabilization.",
    impact: ["Deployment support across 8 U.S. manufacturing sites", "24/7 production support"],
    stack: ["MES", "MCS", "CIM", "WMS/ERP", "PLC", "HSMS-GEM"],
    note: "Experience summary · No confidential architecture or production data shown",
  },
];

export const selectedProjects = [
  {
    index: "01",
    title: "Off-Screen Player Imputation",
    type: "Independent Research · Spatial Analytics",
    description:
      "A training-free, real-time method for estimating off-camera football players from broadcast tracking data, evaluated by downstream pitch-control and team control-share error.",
    tags: ["Python", "Spatial Analytics", "Benchmarking", "Open Data", "Research"],
    links: [
      { label: "GitHub", url: "https://github.com/nowayfootball/offscreen-impute" },
      { label: "arXiv", url: "https://arxiv.org/abs/2607.11548" },
    ],
  },
  {
    index: "02",
    title: "Space-Creating vs. Dead Possession",
    type: "Independent Research · Football Analytics",
    description:
      "An off-ball possession-quality framework that distinguishes possession that creates usable space from possession that never moves the opponent’s defensive block.",
    tags: ["Python", "Pitch Control", "Statistical Validation", "xT", "VAEP"],
    links: [
      { label: "GitHub", url: "https://github.com/nowayfootball/junk-possession" },
    ],
  },
];

export const journeyText = [
  {
    period: "2023 — PRESENT",
    title: "Manufacturing Systems Engineer (MES)",
    organization: "LG CNS America",
    location: "Michigan · Ohio · Georgia",
    description:
      "Supporting large-scale smart-factory deployment, integration, and production stabilization across multiple U.S. EV battery plants.",
  },
  {
    period: "2014 — 2018",
    title: "Bachelor of Computer Science",
    organization: "Hongik University",
    location: "Seoul, South Korea",
    description:
      "Built a foundation in software engineering that grew through games, immersive systems, full-stack products, and industrial automation.",
  },
];

export const contactText = [
  {
    label: "EMAIL",
    value: "cordelia35794@gmail.com",
    link: "mailto:cordelia35794@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "seongjin-choi",
    link: "https://www.linkedin.com/in/seongjin-choi-0b3a96234/",
  },
  {
    label: "GITHUB",
    value: "icarusw-code",
    link: "https://github.com/icarusw-code",
  },
  {
    label: "RESEARCH",
    value: "nowayfootball",
    link: "https://github.com/nowayfootball",
  },
];

const englishUi = {
  brandSubtitle: "MANUFACTURING SYSTEMS",
  openNavigation: "Open navigation",
  closeNavigation: "Close navigation",
  skipToContent: "Skip to main content",
  heroPrimary: "View case studies",
  heroSecondary: "Start a conversation",
  terminalLabel: "Current systems focus",
  terminalFile: "systems_overview.log",
  terminalRole: "ROLE",
  terminalDomain: "DOMAIN",
  terminalFocus: "FOCUS",
  terminalStatus: "STATUS",
  terminalRoleValue: "Manufacturing Systems Engineer",
  terminalDomainValue: "MES / MCS / Smart Factory",
  terminalFocusValue: "Integration · Reliability · Automation",
  terminalStatusValue: "Production systems online",
  expertiseEyebrow: "AREAS OF EXPERTISE",
  expertiseTitle: <>From equipment signals<br />to operational decisions.</>,
  expertiseIntro: "I work across the layers where software, automation, and production meet.",
  caseEyebrow: "PROFESSIONAL CASE STUDIES",
  caseTitle: <>Complex systems,<br />measurable outcomes.</>,
  caseIntro: "Public-safe summaries of work performed in large-scale manufacturing environments. Proprietary implementation details and production data are intentionally excluded.",
  challenge: "CHALLENGE",
  contribution: "CONTRIBUTION",
  openDemo: "Open interactive demo",
  projectsEyebrow: "INDEPENDENT RESEARCH",
  projectsTitle: <>Research built<br />in public.</>,
  projectsIntro: "Outside manufacturing, I use open data to define, test, and publish spatial football analytics methods. These projects demonstrate reproducible Python research, quantitative validation, and technical communication.",
  viewProject: "View project",
  experienceEyebrow: "EXPERIENCE",
  experienceTitle: <>Built through<br />different systems.</>,
  experienceIntro: "My path moved from interactive software into the operational systems behind advanced manufacturing—while keeping the same curiosity about how complex parts work together.",
  contactEyebrow: "LET'S CONNECT",
  contactTitle: <>Let’s build systems<br />people can rely on.</>,
  footerBuilt: "Designed and built with React · Michigan, USA",
};

const koreanContent = {
  headerNav: [
    { title: "전문 분야", url: "#expertise" },
    { title: "주요 사례", url: "#case-studies" },
    { title: "데모", url: "#demos" },
    { title: "독립 연구", url: "#projects" },
    { title: "경력", url: "#experience" },
    { title: "연락처", url: "#contact" },
  ],
  heroData: {
    eyebrow: "MES · MCS · 스마트팩토리",
    title: "멈추지 않는 공장을 위한 신뢰할 수 있는 시스템.",
    description: "미국 대규모 전기차 배터리 공장에서 MES/MCS 통합, 물류 흐름 최적화, 배포 자동화를 담당하는 Manufacturing Systems Engineer입니다.",
    availability: "미시간 거주 · 미국 다사업장 운영 지원",
    metrics: [
      { value: "90%", label: "배포 전 검증 시간 단축" },
      { value: "8", label: "지원한 미국 제조 사업장" },
      { value: "24/7", label: "고처리량 생산 환경 운영 지원" },
      { value: "E2E", label: "MES–MCS–WMS–ERP 추적성" },
    ],
  },
  expertiseText: [
    { index: "01", title: "제조 시스템", description: "생산·물류·자동화 설비를 연결하는 소프트웨어 계층을 설계하고 안정화합니다.", tags: ["MES", "MCS", "CIM", "RTD", "MHS", "WMS", "ERP"] },
    { index: "02", title: "자동화 및 진단", description: "반복적인 배포 검증과 생산 장애 분석을 신뢰할 수 있는 자동화 절차로 전환합니다.", tags: ["Python", "REST API", "Regex", "GitLab", "Root Cause Analysis"] },
    { index: "03", title: "데이터 및 물류 흐름", description: "데이터를 활용해 라우팅 정확도를 높이고 병목을 발견하며 더 빠른 운영 의사결정을 지원합니다.", tags: ["Oracle SQL", "Routing Logic", "Visualization", "Performance Analysis"] },
    { index: "04", title: "산업 시스템 통합", description: "복잡한 시운전과 Go-live 과정에서 제어·인프라·생산 조직을 연결하고 문제 해결을 주도합니다.", tags: ["PLC", "OPC-UA", "HSMS-GEM", "Solace", "Pub/Sub"] },
  ],
  caseStudies: [
    {
      index: "01", label: "배포 무결성", title: "MES 배포 감사 및 UI 인텔리전스",
      summary: "변경된 UI 소스부터 서버 등록까지 7단계로 검증하는 배포 감사 도구와 MES UI 구조·서비스 메타데이터를 인덱싱하는 시맨틱 검색 서버로 구성된 도구군입니다.",
      challenge: "수동 검증에서는 간접 서비스 종속성이나 배포요건 누락을 놓칠 수 있었고, 대규모 C# WPF/XAML 코드에서 UI 동작을 찾는 데 시간이 오래 걸렸습니다.",
      contribution: "GitLab 변경분 분석, BR/DA 추출, 종속성 조회, 서버 목록 대조, 배포요건 교차검증과 정적 분석·임베딩 기반 FastAPI 시맨틱 검색 파이프라인을 구축했습니다.",
      impact: ["검증 시간 90% 단축", "서로 의존하는 7단계 검증을 하나의 워크플로로 통합"],
      stack: ["Python", "Flet", "GitLab REST API", "Oracle", "FastAPI", "Embeddings"],
      note: "회사 업무 사례 · 사내 시스템 보호를 위해 세부 구현은 일반화했습니다",
    },
    {
      index: "02", label: "데이터 정합성", title: "MES–CIM 파렛트 정합성 Check",
      summary: "MES와 CIM의 파렛트 존재 여부, 물리 상태, 트랜잭션 이력을 대조하고 Dashboard와 CSV 결과로 출력하는 대용량 정합성 분석 도구입니다.",
      challenge: "13만 건 이상의 데이터를 효율적으로 비교해 실제 누락 파렛트, FULL/EMPTY 상태 불일치, 운영 예외를 구분해야 했습니다.",
      contribution: "Oracle Bulk Fetch 최적화, 시스템 간 정합성 규칙, 트랜잭션 코드 매핑, 요약 Dashboard와 고속 CSV 출력을 구현했습니다.",
      impact: ["13만 건 이상 데이터 처리", "누락 및 FULL/EMPTY 불일치 사유 분류"],
      stack: ["Python", "Pandas", "Oracle", "Bulk Fetch", "CSV Reporting"],
      note: "회사 업무 사례 · 공개 소스 검토 후 저장소 링크 추가 예정",
    },
    {
      index: "03", label: "시스템 통합", title: "다사업장 스마트팩토리 구축",
      summary: "고처리량 전기차 배터리 생산 환경에서 자동 물류 설비와 MES/MCS 인터페이스를 시운전하고 안정화했습니다.",
      challenge: "여러 시스템 계층과 설비 공급사가 Go-live 과정에서도 자재의 End-to-End 추적성을 유지해야 했습니다.",
      contribution: "인터페이스 검증을 주도하고 유관 조직 간 장애 대응을 조율하며 현장 생산 안정화를 지원했습니다.",
      impact: ["미국 8개 제조 사업장 구축 지원", "24/7 생산 운영 지원"],
      stack: ["MES", "MCS", "CIM", "WMS/ERP", "PLC", "HSMS-GEM"],
      note: "경력 요약 · 기밀 아키텍처와 실제 생산 데이터는 포함하지 않습니다",
    },
  ],
  selectedProjects: [
    {
      index: "01", title: "Off-Screen Player Imputation", type: "독립 연구 · 공간 데이터 분석",
      description: "중계 화면 밖 선수 위치를 학습 없이 실시간 추정하고, 궤적 오차뿐 아니라 Pitch Control과 팀 점유 영향으로 성능을 검증한 공개 연구입니다.",
      tags: ["Python", "Spatial Analytics", "Benchmarking", "Open Data", "Research"],
      links: [
        { label: "GitHub", url: "https://github.com/nowayfootball/offscreen-impute" },
        { label: "arXiv", url: "https://arxiv.org/abs/2607.11548" },
      ],
    },
    {
      index: "02", title: "Space-Creating vs. Dead Possession", type: "독립 연구 · 축구 데이터 분석",
      description: "공을 소유한 시간이 실제 공간 창출로 이어졌는지, 상대 수비 블록을 움직이지 못한 비효율적 점유였는지를 구분하는 Off-ball 점유 품질 프레임워크입니다.",
      tags: ["Python", "Pitch Control", "Statistical Validation", "xT", "VAEP"],
      links: [
        { label: "GitHub", url: "https://github.com/nowayfootball/junk-possession" },
      ],
    },
  ],
  journeyText: [
    { period: "2023 — 현재", title: "Manufacturing Systems Engineer (MES)", organization: "LG CNS America", location: "미시간 · 오하이오 · 조지아", description: "미국 여러 전기차 배터리 공장에서 대규모 스마트팩토리 구축, 시스템 통합, 생산 안정화를 지원하고 있습니다." },
    { period: "2014 — 2018", title: "컴퓨터공학 학사", organization: "홍익대학교", location: "서울, 대한민국", description: "게임과 몰입형 시스템, 풀스택 제품, 산업 자동화로 확장된 소프트웨어 엔지니어링의 기초를 쌓았습니다." },
  ],
  contactText: [
    { label: "이메일", value: "cordelia35794@gmail.com", link: "mailto:cordelia35794@gmail.com" },
    { label: "링크드인", value: "seongjin-choi", link: "https://www.linkedin.com/in/seongjin-choi-0b3a96234/" },
    { label: "깃허브", value: "icarusw-code", link: "https://github.com/icarusw-code" },
    { label: "연구 GitHub", value: "nowayfootball", link: "https://github.com/nowayfootball" },
  ],
  ui: {
    brandSubtitle: "제조 시스템 엔지니어",
    openNavigation: "메뉴 열기", closeNavigation: "메뉴 닫기", skipToContent: "본문으로 바로가기",
    heroPrimary: "주요 사례 보기", heroSecondary: "연락하기", terminalLabel: "현재 전문 영역", terminalFile: "systems_overview.log",
    terminalRole: "역할", terminalDomain: "도메인", terminalFocus: "중점 영역", terminalStatus: "상태",
    terminalRoleValue: "Manufacturing Systems Engineer", terminalDomainValue: "MES / MCS / 스마트팩토리", terminalFocusValue: "통합 · 신뢰성 · 자동화", terminalStatusValue: "생산 시스템 운영 중",
    expertiseEyebrow: "전문 분야", expertiseTitle: <>설비 신호에서<br />운영 의사결정까지.</>, expertiseIntro: "소프트웨어와 자동화, 생산이 만나는 모든 계층을 다룹니다.",
    caseEyebrow: "주요 업무 사례", caseTitle: <>복잡한 시스템,<br />측정 가능한 결과.</>, caseIntro: "대규모 제조 환경에서 수행한 업무를 공개 가능한 범위로 정리했습니다. 사내 구현 세부 정보와 실제 생산 데이터는 의도적으로 제외했습니다.",
    challenge: "과제", contribution: "기여", openDemo: "인터랙티브 데모 열기",
    projectsEyebrow: "독립 연구", projectsTitle: <>공개하고 검증한<br />개인 연구.</>, projectsIntro: "제조 시스템 업무 밖에서는 공개 데이터를 활용해 축구 공간 분석 방법론을 정의하고 검증해 발표합니다. 재현 가능한 Python 연구, 정량 평가, 기술 문서화 역량을 보여주는 작업입니다.", viewProject: "프로젝트 보기",
    experienceEyebrow: "경력", experienceTitle: <>서로 다른 시스템을<br />거치며 성장했습니다.</>, experienceIntro: "인터랙티브 소프트웨어에서 첨단 제조 운영 시스템으로 영역을 확장했지만, 복잡한 요소가 함께 작동하는 방식을 탐구하는 관심은 그대로 이어지고 있습니다.",
    contactEyebrow: "연락하기", contactTitle: <>사람들이 신뢰할 수 있는<br />시스템을 만들겠습니다.</>, footerBuilt: "React로 직접 설계 및 개발 · Michigan, USA",
  },
};

export const siteContent = {
  en: { headerNav, heroData, expertiseText, caseStudies, selectedProjects, journeyText, contactText, ui: englishUi },
  ko: koreanContent,
};
