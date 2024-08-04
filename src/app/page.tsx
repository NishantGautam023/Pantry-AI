import HeroSection from "../components/HeroSection"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {

  const user = await currentUser();


  if (user) {
    // If user is logged in, redirect to dashboard
    redirect('/dashboard');
  }


  return (
    <>
      <main>
        <HeroSection />
      </main>
    </>
  );
}