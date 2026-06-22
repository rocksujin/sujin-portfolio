import type { ReactNode } from 'react'
import Link from 'next/link'
import styles from './Cover.module.scss'

const highlights = [
  'Make the invisible visible',
  'Design for moments no playbook covers yet',
  'Turn uncertainty into something people can act on',
]

const stats: { num: ReactNode; label: string }[] = [
  { num: '7+', label: 'Years Exp.' },
  { num: <>3&times;</>, label: 'Scope, 0 Rework' },
  { num: 'KR/EN', label: 'Bilingual' },
]

export default function Cover() {
  return (
    <section className={styles.cover}>
      <div className={styles.coverLeft}>
        <p className={`${styles.coverLabel} ${styles.fadeUp}`}>
          Available for new opportunities
        </p>
        <h1 className={`${styles.coverName} ${styles.fadeUp}`}>
          Sujin<br /><em>Ryu</em>
        </h1>
        <p className={`${styles.coverTitle} ${styles.fadeUp}`}>UX Engineer</p>
        {/* <p className={`${styles.coverDesc} ${styles.fadeUp}`}>
          Bridging <strong>design intent and production reality</strong> — building scalable, accessible digital products that users actually enjoy.
        </p> */}
        <div className={`${styles.coverCta} ${styles.fadeUp}`}>
          <Link href="/work" className={styles.btnPrimary}>View Work →</Link>
          <Link href="/contact" className={styles.btnSecondary}>Get in Touch</Link>
        </div>
      </div>

      <div className={styles.coverRight}>
        {/* <p className={styles.stackLabel}>Philosophy</p> */}
        <p className={styles.philosophy}>
          I think in systems,<br />I build for people.
        </p>

        <div className={styles.highlightList}>
          {highlights.map((item) => (
            <div key={item} className={styles.highlightItem}>
              <span className={styles.stackDot} />
              <span className={styles.stackName}>{item}</span>
            </div>
          ))}
        </div>

        <div className={styles.coverStats}>
          {stats.map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <p className={styles.statNum}>{num}</p>
              <p className={styles.statLabel}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}