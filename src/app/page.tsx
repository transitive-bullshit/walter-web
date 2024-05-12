import { Footer } from './footer'
import { Header } from './header'
import styles from './page.module.css'
import { Simulation } from './simulation'

export default function HomePage() {
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
      <Header />

      <div className={styles.content} />

      <Footer />
    </div>
  )
}
