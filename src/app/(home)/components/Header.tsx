import Image from "next/image";
import Link from "next/link";
import PantryPic from "../../../public/images/pantry.png"

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
                        <SignInButton mode="modal">
                            <button className={styles.btn}>Login</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
}