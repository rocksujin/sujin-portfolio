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
    thumbnail?: string
    category?: 'work' | 'personal'
    githubUrl?: string
    liveUrl?: string
  }
  
  export const projects: Project[] = [
    {
      slug: 'crm-platform',
      title: 'CRM Platform for Experts',
      company: 'Asurion Korea',
      period: 'Jan 2026 - Present',
      thumbnail: '/images/mockup_crm.png',
      stack: ['TypeScript', 'Styled-Components', 'SCSS'],
      summary: 'This project started with a harder task than writing code — convincing the team to strip out MUI entirely and rebuild from scratch. Internal tooling meant no one felt urgency to improve it. I made the case for maintainability and future scalability, and the component system I built is now scoped for expansion into a larger platform ecosystem.',
      problem: 'The team had moved fast with MUI under deadline pressure, but customizing it to match the design had become a significant burden. Developers saw no urgency — it was internal tooling. Designers wanted their specs matched. Bridging that gap was the first challenge. Design specs were incomplete and development ran ahead of design, meaning I had to independently define folder structure, layout, and component architecture from the ground up.',
      highlights: [
      'Advocated for removing MUI entirely, making the case through maintainability and scalability. Arguments alone weren\'t enough — I showed the team a live demo of the token system using a VS Code extension that renders color variables visually. "Change navy-10 once, it updates everywhere." Seeing it clicked faster than explaining it.',
      'Designed independent components (Button, Input, Select) with systematized variants. Separated component styles with Styled-Components and page layouts with SCSS — deliberately architected for reuse across future platforms.',
      'Used TypeScript prop types to prevent semantic HTML violations by other developers. Incorrect tag usage surfaces as a type error immediately.',
      'Owned structural decisions that neither design nor development formally defined — where side-drawers mount, how repeated components nest, how files are organized. Invisible work, but the kind that determines whether a codebase stays clean at scale.',
      'Worked side-by-side with a developer to test STT accuracy and AI chat behavior in real time. When the AI\'s call-summary feature needed UI that didn\'t exist yet — like how a summary should visually surface mid-call — I defined those interactions directly with the designer rather than waiting for a spec.',
      ],
      result: 'Delivered a design system of 20+ components that eliminated MUI dependency in favor of a fully custom system built for long-term maintainability. The system\'s reception led to a leadership-level proposal to extend it into a larger platform ecosystem, with the architecture supporting subsequent AI chat and STT feature expansions.',
      category: 'work',
    
  },
    {
      slug: 'admin-portal',
      title: 'Admin Portal for Operations',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      thumbnail: '/images/mockup_admin.png',
      stack: ['TypeScript', 'SCSS'],
      summary: 'This project changed a workflow where even a simple announcement required an IT request and a deployment cycle. Built to give business teams direct control over their content — and architected so well from the start that three years later, it ran a completely different service without modification.',
      problem: 'Non-technical teams — Marketing, HR, Security — had no way to update content independently. Every popup, announcement, or terms change went through IT and waited on a deployment. Requirements arrived fast through a planner, quickly pushing scope well beyond the initial brief — meaning the architecture had to absorb growth I couldn\'t fully predict at the start.',
      highlights: [
        'Designed a modular architecture from day one, enabling continuous scope expansion without structural rework. What started as 4 main menus and 10 sub-menus has grown to 9 main menus and 26 sub-menus.',
        'Extracted recurring elements (CKEditor, image upload, form components) into shared components, handling scope growth through variant expansion rather than new builds.',
        'Prioritized intuitive, minimal UI for non-technical operators — reducing the learning curve for business team users.',
        'Challenged the 1920px min-width spec after observing colleagues using the portal on laptops during remote work and meetings. Proposed and implemented a 1280px responsive layout. Feedback afterward: "So much easier to use on a laptop."'
      ],
      result: 'Multiple business teams — Security, Marketing, SCM, HR, AI Operations — gained the ability to manage content independently, without IT involvement or deployment cycles. The architecture, originally scoped for SKT Portal, was adopted three years later for T Switch Plus with no structural changes required — one admin platform, two production services.',
      category: 'work',
    },
    {
      slug: 'ai-chat',
      title: 'Generative AI Chat Interface',
      company: 'Asurion Korea',
      period: 'Feb 2025 - Apr 2025',
      thumbnail: '/images/mockup_ai.png',
      stack: ['TypeScript', 'SCSS'],
      summary: 'Before writing a single line of code, I spent a day on the call center floor. What I saw was 25 open memo windows — agents copying and pasting their way through every shift. That image shaped this project from the start: a standalone AI chat platform, built first to prove the interaction pattern before integrating it anywhere. It\'s since been folded into the CRM, with other platforms next in line.',
      problem: 'Agents were managing dozens of memo windows across their screens, manually copying and pasting responses throughout every shift. This was the core inefficiency. With no planner involved and no existing reference for this kind of AI interface internally, the development team had to define and anticipate every possible use case ourselves — developer and designer working together to cover the unknowns, treating this as a pattern to validate before deciding where it belonged.',
    highlights: [
      'Disabled input during active streaming with a responding placeholder — giving agents an unambiguous signal of system state.',
      'Built markdown rendering using react-markdown, remark-gfm, github-markdown-css, and DOMPurify. Customized visual elements including link colors to match the platform\'s design theme.',
      'Maintained session-based conversation history to preserve context throughout a shift.',
      'Designed dedicated error and timeout UI states, ensuring agents could recover gracefully without confusion.',
      'Architected the system to be platform-agnostic from the start — the same interaction model is now live inside the CRM, with structure in place to extend to additional platforms.'
    ],
    result: 'Shipped in one month as a standalone platform, the interface proved its value quickly enough to be folded directly into the CRM — agents no longer need to leave their primary workspace to access AI assistance, with the same pattern now under consideration for additional platforms.',
    category: 'work',
    },
    {
      slug: 'skt-portal',
      title: 'SKT Device Insurance & Protection Portal',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      thumbnail: '/images/screen_skt.png',
      stack: ['React', 'Less', 'CSS'],
      summary: 'When I first opened the codebase, I found code ordered without any hierarchy, files scattered without logic, and multiple "common" files with different names doing the same thing — the accumulated result of years of work by 50+ developers before I even joined. This was a live, high-traffic site with real customers and an active team of developers working in parallel, so my focus was on improving the codebase incrementally without ever risking what was already running in production.',
      problem: 'No UI or style documentation existed. Naming conventions and CSS methodologies varied widely between global and local contributors. Years of accumulated dead code, duplicate mobile/PC implementations, and inconsistent patterns had created a codebase prone to deployment-time bugs.',
      highlights: ['Respected existing patterns while writing new code to a consistently higher standard, incrementally improving codebase coherence.',
        'Removed dead code, unused tracking scripts, and consolidated device-specific implementations into single components — reducing code volume by approximately 75% in affected areas.',
        'Extended antd\'s Datepicker beyond its defaults: added a confirm button, repositioned the mobile close button, and handled divergent mobile/PC requirements within a single component.',
        'For the My Page launch, I was brought in to support the frontend team — delivering 4 menu pages with one other developer in 2 months, dividing responsibilities across markup, styling, and a dedicated history page to ship on time.'
      ],
      result: 'This project gave me a firsthand view of what an unmanaged codebase costs over time. Over four years, I delivered ~20 pages end-to-end, including high-traffic surfaces like the main homepage and My Page, while continuously refactoring legacy code without disrupting a live production environment. I\'m still maintaining this codebase today, handling ongoing CRs as they come in.',
      category: 'work',
      liveUrl: 'https://tallcare.co.kr/',
    },
    {
      slug: 'a11y-analyzer',
      title: 'Accessibility Flow Analyzer',
      company: 'Personal Project',
      period: '2026',
      thumbnail: '/images/screen_kayai.png',
      stack: ['Next.js', 'TypeScript', 'SCSS'],
      summary: 'A self-initiated tool built to put my own accessibility claims to the test. Enter any public URL or paste a component snippet, and it analyzes the code against WCAG and KWCAG standards — then overlays the focus flow directly on the page so you can see, not just read, how a screen reader or keyboard user would move through it.',
      problem: 'Accessibility audits are usually either too abstract (a checklist of rules) or too disconnected from the actual interface (a report you read separately from the page). I wanted to see the focus order the same way a user experiences it — visually, in context — rather than inferring it from a list of violations.',
      highlights: [
        'Built dual input modes: full URL analysis for any public website, and direct snippet analysis for in-progress component code.',
        'Implemented WCAG and KWCAG rule checks to evaluate semantic structure, ARIA usage, and keyboard accessibility.',
        'Designed a focus-flow overlay that renders directly on top of the analyzed page, visually tracing the tab order step by step instead of presenting it as a disconnected report.',
      ],
      result: 'Live and open source — built end-to-end with Claude Code as both a personal tool and a way to validate accessibility decisions on real interfaces, including my own portfolio.',
      category: 'personal',
      githubUrl: 'https://github.com/rocksujin/accessibility-project',
      liveUrl: 'https://rocksujin.github.io/accessibility-project/',
    },
  ]

