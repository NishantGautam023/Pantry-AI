import { SignIn } from "@clerk/nextjs";


export default function Page() {
    return (
        <div className="hello">
            <SignIn path="/sign-in" />
        </div>
    )
}