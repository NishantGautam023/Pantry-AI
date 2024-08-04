import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import PantryPic from "../../public/images/Pantry.png"

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
}
    from '@clerk/nextjs'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link href="/" className={styles.logoWrap}>
                    <Image
                        src={PantryPic}
                        alt="Logo"
                        width={50}
                        height={50}
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>Pantry AI</span>
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link href="/" className={styles.link}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/about" className={styles.link}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.btnWrap}>
                    <SignedOut>
                        <Link href="/sign-in">
                            <button className={styles.btn}>Login</button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
}