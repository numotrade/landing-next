import Background from "./background";
import Footer from "./footer";
import Header from "./header";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["greek"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      <main
        className={`${inter.className} flex min-h-screen flex-col items-center px-4 pt-10 sm:px-10`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
