import Link from 'next/link'
import styles from './Cover.module.scss'

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'SCSS',
  'Styled-Components',
  'Figma',
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
        <p className={`${styles.coverDesc} ${styles.fadeUp}`}>
          Bridging <strong>design and front-end architecture</strong> — building
          scalable, accessible digital products that users actually enjoy.
        </p>
        <div className={`${styles.coverCta} ${styles.fadeUp}`}>
          <Link href="/work" className={styles.btnPrimary}>View Work →</Link>
          <Link href="/contact" className={styles.btnSecondary}>Get in Touch</Link>
        </div>
        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          Scroll
        </div>
      </div>

      <div className={styles.coverRight}>
        <p className={styles.stackLabel}>Tech Stack</p>
        <div className={styles.stackGrid}>
          {stack.map((item) => (
            <div key={item} className={styles.stackItem}>
              <span className={styles.stackDot} />
              <span className={styles.stackName}>{item}</span>
            </div>
          ))}
        </div>
        <div className={styles.coverStats}>
          <div className={styles.stat}>
            <p className={styles.statNum}>6+</p>
            <p className={styles.statLabel}>Years Exp.</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statNum}>3</p>
            <p className={styles.statLabel}>Companies</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statNum}>EN/KR</p>
            <p className={styles.statLabel}>Bilingual</p>
          </div>
        </div>
      </div>
    </section>
  )
}