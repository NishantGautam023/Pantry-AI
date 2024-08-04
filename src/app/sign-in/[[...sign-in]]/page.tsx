import { SignIn } from "@clerk/nextjs";
import styles from "../SignInPage.module.css"
export default function Page() {
    return (
        <div className={styles.container}>
            <SignIn path="/sign-in" />
        </div>
    )


}