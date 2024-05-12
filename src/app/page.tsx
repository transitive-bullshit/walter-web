import { GitHub, Twitter } from '@/icons'
import * as config from '@/lib/config'

import styles from './page.module.css'
import { Simulation } from './simulation'

export default function App() {
  return (
    <>
      <Simulation />

      <Overlay />
    </>
  )
}

function Overlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.content} />

      <footer className={styles.footer}>
        <div className={styles.copyright}>{config.copyright}</div>

        <div className={styles.social}>
          <a href={config.twitterUrl} target='_blank' rel='noopener noreferrer'>
            <Twitter className={styles.icon} />
          </a>

          <a href={config.githubUrl} target='_blank' rel='noopener noreferrer'>
            <GitHub className={styles.icon} />
          </a>
        </div>
      </footer>
    </div>
  )
}
