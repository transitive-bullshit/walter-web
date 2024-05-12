import { Footer } from '../footer'
import { Header } from '../header'
import { LoginForm } from './login-form'
import styles from './page.module.css'

export default function SignUpPage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <LoginForm />
      </main>

      <Footer />
    </>
  )
}
