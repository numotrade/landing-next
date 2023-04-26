import Link from "next/link";

import Button from "@/components/button";

export default function Home() {
  return (
    <div className="top-card">
      <h1 className="text-center">Decentralized Derivatives Exchange</h1>
      <p className="p3 max-w-md text-center text-lg">
        Access leverage with no counterparty risk, liquidations, or oracles, on
        any token.
      </p>
      <Link href="https://app.numoen.com">
        <Button variant="primary">Launch App</Button>
      </Link>
    </div>
  );
}
