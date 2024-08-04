import Link from 'next/link';
import styles from './404.module.css'; // Optional: Create a CSS module for styling

export default function Custom404() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.description}>Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className={styles.homeLink}>
                Go back home
            </Link>
        </div>
    );
}