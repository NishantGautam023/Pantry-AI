import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-1 items-center justify-center mt-10 mb-12">
            <SignUp path="/sign-in" />
        </div>
    )


} 