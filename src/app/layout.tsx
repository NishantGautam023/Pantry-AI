import {
  ClerkProvider, SignedIn, UserButton
} from '@clerk/nextjs'


import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./layout.module.css";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pantry System",
  description: "Manage your Pantry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={OpenSans.className}>
          <div className={styles.container}>



            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}