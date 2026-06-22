import styles from './about.module.scss'

const experience = [
  {
    period: 'Aug 2022 — Present',
    company: 'Asurion Korea',
    role: 'UI/UX Engineer',
    desc: '프로젝트별 유일한 UX 엔지니어로서, 전역 및 국내 크로스 기능 팀과 긴밀히 협력하며 종단간 프론트엔드 개발과 UX 결정을 주도했습니다.',
    desc2: 'Served as the sole UX Engineer per project, independently leading end-to-end frontend development and UX decision-making in close collaboration with global and local cross-functional teams.',
},
  {
    period: 'Sep 2021 — Jun 2022',
    company: 'Insutil',
    role: 'UI Developer',
    desc: '인천공항 온사이트 배포 지원을 포함한 랜딩 페이지와 중요한 내부 네트워크 시스템의 종단간 UI 개발을 주도했습니다. 디자이너와 직접 협력하며 주니어 디자이너를 지도했습니다.',
    desc2: 'Led end-to-end UI development for landing pages and critical internal network systems, including on-site deployment support for Incheon Airport. Collaborated directly with designers and mentored a junior designer.',
  },
  {
    period: 'Jun 2019 — Sep 2021',
    company: 'Douzone Bizon',
    role: 'UI Developer',
    desc: 'B2B 플랫폼을 위한 반응형, 고성능 웹 인터페이스 개발을 주도했습니다. 접근성과 SEO 최적화를 위해 시멘틱 HTML과 Open Graph 마크업을 적용했습니다.',
    desc2: 'Developed responsive, high-performance web interfaces for B2B platforms — including complex streaming and finance modules — with accessibility and SEO best practices applied through semantic HTML and Open Graph markup.',
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
    items: ['Git', 'Cursor AI', 'Jira', 'Notion'],
  },
  {
    label: 'Framework',
    items: ['Next.js'],
  },
  {
    label: 'Languages',
    items: ['English', 'Korean'],
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
                <p className={styles.timelineDesc}>- {item.desc}</p>
                <p className={styles.timelineDesc}>- {item.desc2}</p>
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