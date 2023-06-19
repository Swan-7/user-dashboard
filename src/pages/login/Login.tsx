import { useSession, signIn, signOut } from "next-auth/react";
import { FC } from 'react';
import Image from 'next/image';
import styles from './Login.module.scss';
import Logo from '@/assets/logo.png';
import LoginIcon from '@/assets/login_icon.png';

interface LoginProps {
    onLogin: () => void;
  }

const Login: FC<LoginProps> = ({ onLogin }) => {
    const { data: session } = useSession();
    const handleLogin = () => {
        onLogin();
      };

    // if (session) {
    //     return <>
    //     Signed in as {session?.user?.email} <br/>
    //     <p>Welcome {session?.user?.name}</p>
    //     <button onClick={() =>  signOut()}>Sign out</button>
    //     </>
    // }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftGrid}>
                        <Image src={Logo.src} alt="pablo-sign-in" width={120} height={25}/>
                        <Image src={LoginIcon.src} alt="pablo-sign-in" width={480} height={400}/>
                    </div>
                    <div className={styles.rightGrid}>
                        <form onSubmit={handleLogin}>
                            <h2>Welcome</h2>
                            <p>Enter your details to login</p>
                            <div className={styles.formContent}>
                                <div className={styles.formField}>
                                    <input type="email" id="email" name="email" placeholder="Email"/>
                                </div>
                                <div className={styles.formField}>
                                    <input type="password" id="password" name="password" placeholder="Password"/>
                                </div>
                                <div className={styles.formField}>
                                    <a href="/forgot-password">Forgot Password?</a>
                                </div>
                                <div className={styles.formField}>
                                    <button type="submit">Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Not signed in <br /> */}
            {/* <button onClick={() => signIn()}>Sign in</button> */}
        </>
    );
};

export default Login;
