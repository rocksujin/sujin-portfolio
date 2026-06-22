import type { ReactNode } from 'react'
import styles from './about.module.scss'

const experience: {
  period: string
  company: string
  role: string
  desc2: ReactNode
}[] = [
  {
    period: 'Aug 2022 — Present',
    company: 'Asurion Korea',
    role: 'UI/UX Engineer',
 //   desc: '미국 기업이지만 입사 이후 한국 지사가 상당 부분 독립적으로 운영되면서, 해외 직원들과의 협업 빈도는 많지 않았습니다. UX팀 소속이지만 실제로는 배포와 검증 단계에서 프론트엔드 팀과 더 긴밀하게 협업하는 포지션이었어요. 요청사항은 비즈니스팀과 PO, 시각적인 부분은 디자이너, 소스와 배포는 개발자, 검증은 QA팀과 소통하며 다양한 플랫폼을 만들고 개선했습니다.',
    desc2: 'Although Asurion is a US-based company, the Korea office operated fairly independently after I joined, so direct collaboration with overseas teams was limited. While I was on the UX team, I worked most closely with the frontend team during deployment and QA. I coordinated with business stakeholders and POs on requirements, designers on visual direction, developers on implementation and release, and QA on validation — building and improving multiple platforms through that process.',
},
  {
    period: 'Sep 2021 — Jun 2022',
    company: 'Insutil',
    role: 'UI Developer',
  //  desc: 'AI 딥러닝 기반 언어 분석 솔루션을 구축하려던 스타트업이었고, SI 사업으로 인천공항 내부망 작업도 함께 진행했습니다. 설계 파트가 따로 없어서, 사내 솔루션 홍보를 위한 랜딩페이지 제작과 솔루션 테스트에 주니어 디자이너와 함께 참여했습니다. 인천공항 작업 때는 개발자들과 함께 출장을 가서 외부 직원들과도 협력했습니다.',
    desc2: 'Insutil was a startup building a deep learning-based language analysis and AI solution, while also delivering custom IT infrastructure projects for clients, including Incheon Airport\'s internal network systems. With no dedicated design team, I worked alongside a junior designer on landing pages and product testing for the in-house solution. For the airport project, I also traveled on-site with developers to collaborate directly with external staff.',
  },
  {
    period: 'Jun 2019 — Sep 2021',
    company: 'Douzone Bizon',
    role: 'UI Developer',
   // desc: 'ERP, 기업용 솔루션 등을 개발하는 B2B 기업에서 UI 개발자로 첫발을 내디뎠습니다. 기업용 솔루션 본부에 소속되어 채팅, 스트리밍, 보험관리, 회계, 일정관리, 영상통화, 랜딩페이지 등 다양한 분야의 화면을 작업했습니다. 접근성에 대해서도 많이 배웠고, 영어로 된 기술 문서를 팀원들을 위해 번역하는 일도 맡았습니다.',
    desc2: (
      <>
        I started my career as a UI developer at a B2B company building ERP and enterprise solutions. Within the enterprise solutions division, I worked across a wide range of domains — chat, streaming, insurance management, accounting, scheduling, video calls, and{' '}
        <a
          href="https://www.wehago.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
         landing pages
        </a>. This is also where I learned the fundamentals of accessibility, and I took on translating English-language technical documentation for the team.
      </>
    ),
  },
]

const skills = [
  {
    label: 'Languages',
    items: ['React', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    label: 'Styling & Markup',
    items: ['SCSS', 'Styled-Components', 'HTML5 / CSS3'],
  },
  {
    label: 'Design',
    items: ['Figma', 'Adobe Creative Suite'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Cursor AI', 'Claude Code','Jira', 'Notion'],
  },
  {
    label: 'Framework',
    items: ['Next.js'],
  },
  {
    label: 'Languages',
    items: ['Korean','English' ],
  },
]

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.label}>About</p>
        <h1 className={styles.title}>Who I Am</h1>
        <p className={styles.intro}>
        {/* 디자인과 프론트엔드 엔지니어링의 경계에서 일하는 UX Engineer입니다. 배포 직전까지도 계속 바뀌는 요구사항을 정제된 구조로 만들어가며, 다양한 팀과 협업하는 프로젝트에서 단독 UX Engineer로서 프로덕션 수준의 인터페이스를 구현해왔습니다. 보이지 않는 문제를 보이게 만들고, 정해진 가이드가 없는 영역에서 새로운 방식을 설계하는 것에 관심이 있습니다. 특히 접근성 중심의 개발과, 사람들이 복잡한 시스템을 실제로 어떻게 이해하고 탐색하는지에 집중하고 있습니다. */}
        UX Engineer working at the intersection of design and frontend engineering — taking iterative requirements and shaping them into clean, production-ready interfaces, often as the sole UX Engineer on cross-functional projects. I care about making invisible problems visible and designing for moments no playbook covers yet. Particularly focused on accessibility-first development and how people actually understand complex systems.
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Experience</p>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.company} className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelinePeriod}>{item.period}</span>
                <span className={styles.timelineCompany}>{item.company}</span>
              </div>
              <div className={styles.timelineBody}>
                <h2 className={styles.timelineRole}>{item.role}</h2>
                {/* <p className={styles.timelineDesc}>- {item.desc}</p> */}
                <p className={styles.timelineDesc}>{item.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Skills</p>
        <div className={styles.skillsGrid}>
          {skills.map((group) => (
            <div key={group.label} className={styles.skillGroup}>
              <p className={styles.skillGroupLabel}>{group.label}</p>
              <ul className={styles.skillList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.skillItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}