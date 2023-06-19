import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Dashboard from './dashboard'
import Login from './login'
import Header from '../components/Header/Header'
// import Login from '../components/Login/Login'
import SideBar from '../components/SideBar/SideBar'

interface Props {
  onLogout: () => void;
  onLogin: () => void;
}

export default function Home({ onLogout, onLogin }: Props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check the login status from local storage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogin = () => {
    // Update the login status in local storage
    localStorage.setItem('isLoggedIn', 'true');
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Update the login status in local storage
    localStorage.setItem('isLoggedIn', 'false');
    setLoggedIn(false);
  };

  return (
    <>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="User Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      {/* {loggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
          <Header/>
          {/* <SideBar/> */}
          {/* <Dashboard/>   */}
          {/* <Login/>     */}
      </main>
    </>
  )
}