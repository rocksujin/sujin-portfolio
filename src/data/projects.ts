export type Project = {
    slug: string
    title: string
    company: string
    period: string
    stack: string[]
    summary: string
    problem: string
  highlights: string[]
  result: string
  }
  
  export const projects: Project[] = [
    {
      slug: 'crm-platform',
      title: 'CRM Platform for Experts',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'Styled-Components', 'SCSS'],
      summary: 'An internal CRM tool built for Asurion\'s in-house experts. As the sole UX Engineer on the project, I led end-to-end frontend development — from architecting the design system to implementing accessible, reusable components in close collaboration with a local design team.',
      problem: '일정 압박으로 인해 초기 개발팀이 MUI를 임의로 도입해 빠르게 개발을 시작했지만, 확장성과 유지보수 문제가 드러나면서 MUI를 제거하고 자체 디자인 시스템으로 전환하는 시점에 내가 투입됐다. 디자이너의 컴포넌트 설계 경험이 부족해 스타일이 통일되지 않았고 빠진 속성이 많아 개발 중 잦은 디자인 수정 요청이 발생했다. 디자인 스펙보다 개발이 선행되는 구조였기 때문에 폴더 구조와 레이아웃 설계를 포함한 아키텍처 전반을 독자적으로 결정해야 했다. \n\n I joined the project at a pivotal moment — the team had initially built with MUI under tight deadlines, but as scalability and maintenance concerns grew, the decision was made to migrate to a custom design system. The designer lacked experience in component-level design, resulting in inconsistent styles and incomplete specs that frequently required back-and-forth during development. Since development ran ahead of design, I independently defined the folder structure, layout architecture, and component system from the ground up.',
    highlights: [
      'Designed independent components (Button, Input, Select, etc.) with systematized variants, separating component styles with Styled-Components and page layouts with SCSS — a deliberate architectural decision to enable reuse across future platforms.',
      'Pushed back on the designer\'s inconsistent use of values and proposed a token-based system, resulting in a unified Figma token library synced with code variables.',
      'Built a component showcase page as internal documentation, enabling other developers to adopt the design system consistently.',
      'Prioritized keyboard navigation over screen reader support, reflecting the real-world usage pattern of call center agents who rely on keyboard-driven workflows.',
      'Independently designed and implemented interactions with no design spec — including drawers, circular loading indicators, and dropdowns.',
      'Leveraged TypeScript to review and prevent semantic HTML violations by other developers, maintaining structural integrity across the codebase.',
    ],
    result: 'Delivered a design system of 20+ components over 3 months, with an architecture capable of supporting subsequent feature expansions including AI search and STT integration. Successfully migrated away from MUI dependency to a fully custom system, establishing long-term maintainability and cross-platform scalability.',
  },
    {
      slug: 'admin-portal',
      title: 'Admin Portal for Operations',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'SCSS'],
      summary: '',
      problem: '',
      highlights: [],
      result: '',
    },
    {
      slug: 'ai-chat',
      title: 'Generative AI Chat Interface',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'SCSS'],
      summary: '',
      problem: '',
    highlights: [],
    result: '',
    },
    {
      slug: 'skt-portal',
      title: 'SKT Device Insurance & Protection Portal',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['React', 'Less', 'CSS'],
      summary: '',
      problem: '',
      highlights: [],
      result: '',
    },
  ]