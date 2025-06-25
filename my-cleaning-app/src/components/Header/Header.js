import React from 'react';
import Link from "next/link";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <strong className={styles.title}>CarCleaningPro</strong>
            <nav>
<Link href={'/'} className={styles.link}>Home</Link>
<Link href={'/about'} className={styles.link}>About</Link>
<Link href={'/contact'} className={styles.link}>Contact</Link>
<Link href={'/service'} className={styles.link}>Service</Link>
<Link href={'/price'} className={styles.link}>Price</Link>
            </nav>
        </header>
    );
};

export default Header;
