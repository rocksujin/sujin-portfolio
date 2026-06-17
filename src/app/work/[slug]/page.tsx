import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import styles from './page.module.scss'
import Image from 'next/image'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className={styles.main}>
      <Link href="/work" className={styles.back}>
        ← Back to Work
      </Link>

      <div className={styles.header}>
        <p className={styles.company}>{project.company}</p>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Period</span>
            <span className={styles.metaValue}>{project.period}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>UX Engineer</span>
          </div>
        </div>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>

      {(project.githubUrl || project.liveUrl) && (
          <div className={styles.links}>
            {project.liveUrl && (
                <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                View Live →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtnSecondary}
              >
                View Code →
              </a>
            )}
          </div>
        )}

      <div className={styles.thumbnail}>
      {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} mockup`}
            fill
            className={styles.thumbnailImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className={styles.thumbnailPlaceholder}>
            {project.slug}
          </span>
        )}
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>01 — Context</p>
        <h2 className={styles.sectionTitle}>Background</h2>
        <p className={styles.sectionBody}>{project.summary || 'Coming soon.'}</p>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>02 — Challenge</p>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <p className={styles.sectionBody}>{project.problem || 'Coming soon.'}</p>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>03 — Approach</p>
        <h2 className={styles.sectionTitle}>What I Did</h2>
        <ul className={styles.highlights}>
          {project.highlights.length > 0
            ? project.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>{h}</li>
              ))
            : <li className={styles.highlight}>Coming soon.</li>
          }
        </ul>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>04 — Outcome</p>
        <h2 className={styles.sectionTitle}>Result</h2>
        <p className={styles.sectionBody}>{project.problem || 'Coming soon.'}</p>
      </div>
    </main>
  )
}