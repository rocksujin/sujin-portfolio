import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.left}>© 2026 Sujin Ryu</p>
      <p className={styles.right}>UX Engineer — Seoul, Korea</p>
    </footer>
  )
}