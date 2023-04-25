import React from "react";

import Background from "./background";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      <main>{children}</main>
    </>
  );
}
