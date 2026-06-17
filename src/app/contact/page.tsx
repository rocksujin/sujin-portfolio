import styles from './contact.module.scss'

const links = [
  {
    label: 'Email',
    value: 's.ryu8643@gmail.com',
    href: 'mailto:s.ryu8643@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sujin-ryu',
    href: 'https://linkedin.com/in/sujin-ryu',
  },
  {
    label: 'GitHub',
    value: 'github.com/rocksujin',
    href: 'https://github.com/rocksujin',
  },
]

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.label}>Contact</p>
        <h1 className={styles.title}>Get in Touch</h1>
        {/* <p className={styles.desc}>
          오픈 마인드로 다양한 제안을 기다리고 있습니다. 커피 챗(Coffee Chat) 제안도 좋으니 편하게 연락 주세요! 😊<br />
          I'm open to various proposals. Feel free to reach out through any of the channels below.
        </p> */}
      </div>

      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.link}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <div className={styles.linkLeft}>
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkValue}>{link.value}</span>
            </div>
            <span className={styles.linkArrow}>→</span>
          </a>
        ))}
      </div>
    </main>
  )
}