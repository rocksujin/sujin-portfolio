export type Project = {
    slug: string
    title: string
    company: string
    period: string
    stack: string[]
    summary: string
    highlights: string[]
  }
  
  export const projects: Project[] = [
    {
      slug: 'crm-platform',
      title: 'CRM Platform for Experts',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'Styled-Components', 'SCSS'],
      summary: '',
      highlights: [],
    },
    {
      slug: 'admin-portal',
      title: 'Admin Portal for Operations',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'SCSS'],
      summary: '',
      highlights: [],
    },
    {
      slug: 'ai-chat',
      title: 'Generative AI Chat Interface',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['TypeScript', 'SCSS'],
      summary: '',
      highlights: [],
    },
    {
      slug: 'skt-portal',
      title: 'SKT Device Insurance & Protection Portal',
      company: 'Asurion Korea',
      period: 'Aug 2022 - Present',
      stack: ['React', 'Less', 'CSS'],
      summary: '',
      highlights: [],
    },
  ]