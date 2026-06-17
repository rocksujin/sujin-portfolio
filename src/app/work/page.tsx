import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import styles from './work.module.scss'

export default function Work() {
  const workProjects = projects.filter((p) => p.category === 'work')
  const personalProjects = projects.filter((p) => p.category === 'personal')

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.label}>Selected Work</p>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <div className={styles.grid}>
        {workProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {personalProjects.length > 0 && (
        <div className={styles.personalSection}>
          <p className={styles.label}>Personal Project</p>
          <div className={styles.grid}>
            {personalProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}