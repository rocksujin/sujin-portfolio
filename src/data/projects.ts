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
      period: 'Jan 2026 - Present',
      stack: ['Next.js(App Router)', 'TypeScript', 'Styled-Components', 'SCSS'],
      summary: '부족한 리소스와 내부망이라는 이유로 묵인되던 MUI 기반 코드를 걷어내고, 처음부터 다시 설계하자고 설득하는 것부터 시작한 프로젝트입니다. 유지보수와 다음 프로젝트로의 확장성을 근거로 설득했고, 추후 이 컴포넌트 시스템은 더 큰 세계관의 프로젝트로 확장될 예정입니다.',
      problem: '일정 압박으로 MUI를 임의 도입해 빠르게 개발했지만, 확장성과 유지보수 문제가 드러났다. MUI를 커스텀하는 것은 큰 부담이었고, 개발자들은 내부망이라는 이유로 개선 필요성을 느끼지 못했다. 디자이너는 본인 디자인대로 맞춰지길 원했고, 이 간극을 메우는 것이 첫 번째 과제였다. 디자인 스펙은 불완전했고, 개발이 디자인보다 선행되는 구조였기 때문에 폴더 구조, 레이아웃, 컴포넌트 아키텍처 전반을 독자적으로 결정해야 했다.',
    highlights: [
      'Designed independent components (Button, Input, Select, etc.) with systematized variants, separating component styles with Styled-Components and page layouts with SCSS — a deliberate architectural decision to enable reuse across future platforms.',
      'Pushed back on the designer\'s inconsistent use of values and proposed a token-based system, resulting in a unified Figma token library synced with code variables.',
      'Built a component showcase page as internal documentation, enabling other developers to adopt the design system consistently.',
      'Prioritized keyboard navigation over screen reader support, reflecting the real-world usage pattern of call center agents who rely on keyboard-driven workflows.',
      'Independently designed and implemented interactions with no design spec — including drawers, circular loading indicators, and dropdowns.',
      'Leveraged TypeScript to review and prevent semantic HTML violations by other developers, maintaining structural integrity across the codebase.',
    ],
    result: '20개 이상의 컴포넌트를 포함한 디자인 시스템을 구축했으며, AI 검색 및 STT 기능 확장까지 지원하는 아키텍처를 완성했다. MUI 의존성을 완전히 제거하고 자체 시스템으로 전환해 장기적인 유지보수성과 확장성을 확보했다. 이 컴포넌트 시스템은 향후 더 큰 규모의 플랫폼으로 확장될 예정이다.',
  },
    {
      slug: 'admin-portal',
      title: 'Admin Portal for Operations',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'SCSS'],
      summary: '간단한 공지 하나를 올리려 해도 IT팀에 요청하고 배포를 기다려야 했던 구조를 바꾼 프로젝트입니다. 비즈니스팀이 직접 콘텐츠를 관리할 수 있게 하는 것이 목표였고, 처음부터 확장을 염두에 두고 설계한 아키텍처는 3년 후 전혀 다른 서비스에서도 그대로 구현하여 사용 중입니다.',
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
      summary: '처음 코드를 열었을 때, 계층 구조를 전혀 고려하지 않은 코드 순서, 중구난방의 파일 위치, 이름만 다른 공통 파일들이 가득했습니다. 50명 이상의 글로벌 개발자가 몇년간 쌓아온 결과였습니다. 저는 이 시스템을 무너뜨리지 않으면서 조금씩 나아지게 만드는 방법을 배웠고, 그 경험이 이후 제가 코드를 대하는 방식의 기준이 됐습니다.',
      problem: '',
      highlights: [],
      result: '',
    },
  ]