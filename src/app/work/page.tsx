import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import styles from './work.module.scss'

export default function Work() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.label}>Selected Work</p>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}