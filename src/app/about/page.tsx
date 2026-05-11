import styles from './about.module.scss'

const experience = [
  {
    period: 'Aug 2022 — Present',
    company: 'Asurion Korea',
    role: 'UI/UX Engineer',
    desc: 'Coming soon.',
  },
  {
    period: 'Sep 2021 — Jun 2022',
    company: 'Insutil',
    role: 'UI Developer',
    desc: 'Coming soon.',
  },
  {
    period: 'Jun 2019 — Sep 2021',
    company: 'Douzone Bizon',
    role: 'UI Developer',
    desc: 'Coming soon.',
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
          Coming soon.
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
                <p className={styles.timelineDesc}>{item.desc}</p>
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