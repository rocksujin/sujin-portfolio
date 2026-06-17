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
            안녕하세요, UI개발자/ UX Engineer 류수진 입니다.
            기술 스택의 변화에 기민하게 대응하며 성장해 왔으며, 항상 <strong>확장성, 접근성, 사용성</strong>을 최우선 가치로 두고 작업합니다.<br />
        UX Engineer working at the intersection of design and front-end architecture. I care about building scalable, maintainable digital products with accessibility at the core — translating UX requirements into clean, purposeful code. Experienced working within global cross-functional teams, and fluent in both Korean and English.
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