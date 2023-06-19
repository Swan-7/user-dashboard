import React from "react";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { FaSearch, FaBell } from 'react-icons/fa';
import avatar from '@/assets/avatar.png';
import styles from './Header.module.scss';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import Logo from '@/assets/logo.png';
import { Avatar } from "@mui/material";

const Header = () => {
    const { data: session } = useSession();

    const userImage = session?.user?.image ?? avatar.src;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={Logo.src} alt="pablo-sign-in" width={120} height={25} />
                    </Link>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search for anything" />
                    <FaSearch className={styles.searchIcon} />
                </div>
                <nav className={styles.navigation}>
                    <Link href="/docs" className={styles.navLink}>
                        <span>Docs</span>
                    </Link>
                    <FaBell className={styles.notificationIcon} />
                    <div className={styles.userProfile}>
                        <Avatar src={userImage} alt={session?.user?.name as string} className={styles.avatar} />
                        <span className={styles.userName} onClick={toggleDropdown}>
                            Adedeji
                            {isDropdownOpen ? (
                                <FaCaretUp className={styles.dropdownIcon} />
                            ) : (
                                <FaCaretDown className={styles.dropdownIcon} />
                            )}
                            {isDropdownOpen && (
                                <div className={styles.dropdown}>
                                    {/* Dropdown menu content */}
                                    <a href="/profile">Profile</a>
                                    <a href="/settings">Settings</a>
                                    <a href="/logout">Logout</a>
                                </div>
                            )}
                        </span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
