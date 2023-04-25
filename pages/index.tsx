import Link from "next/link";

import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-8 rounded-xl border border-gray-200 bg-white p-6 pt-24 text-sm">
        <h1 className="text-center">Decentralized Derivatives Exchange</h1>
        <p className="p1 max-w-md text-center text-secondary">
          Access leverage with no counterparty risk, liquidations, or oracles,
          on any token.
        </p>
        <Link href="https://app.numoen.com">
          <Button variant="primary">Launch App</Button>
        </Link>
      </div>
    </>
  );
}
