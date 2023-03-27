import Header from '../views/header';

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Blumelist</h1>
      </main>
    </>
  )
}
