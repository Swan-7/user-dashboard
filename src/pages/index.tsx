import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Dashboard from './dashboard'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'



export default function Home() {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="User Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Header/>
          <SideBar/>
          <Dashboard/>      
      </main>
    </>
  )
}
