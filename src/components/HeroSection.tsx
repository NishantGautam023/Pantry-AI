import styles from './HeroSection.module.css';
import Image from 'next/image';
import PantryImage from "../../public/images/pantryHome.png"
import Link from 'next/link';



export default function HeroSection() {




    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Welcome to Pantry AI</h1>
                <p>Manage your pantry smartly with the power of AI</p>
                <Link href="/sign-in">
                    <button>Get Started</button>
                </Link>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={PantryImage}
                    alt="Pantry AI Hero"
                    width={500}
                    height={500}
                    layout="responsive"
                />
            </div>
        </div>
    );
}