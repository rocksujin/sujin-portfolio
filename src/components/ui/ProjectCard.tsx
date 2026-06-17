import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/data/projects'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className={styles.card}>
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
      <div className={styles.body}>
        <p className={styles.company}>{project.company}</p>
        <h2 className={styles.title}>{project.title}</h2>
        {project.summary && (
          <p className={styles.summary}>{project.summary}</p>
        )}
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  )
}