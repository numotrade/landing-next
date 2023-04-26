import Link from "next/link";

import Button from "@/components/button";
import Hedge from "@/components/hedge";
import LiquidStaking from "@/components/liquidStaking";
import ProvideLiquidity from "@/components/provideLiquidity";

export default function Home() {
  return (
    <div className="top-card min-h-[90vh] justify-center">
      <div className="flex h-full flex-col items-center justify-between gap-8">
        <h1 className="text-center">Decentralized Derivatives Exchange</h1>
        <p className="p3 max-w-md text-center text-lg">
          Access leverage with no counterparty risk, liquidations, or oracles,
          on any token.
        </p>
        <Link href="https://app.numoen.com">
          <Button variant="primary">Launch App</Button>
        </Link>
        <div className="flex w-full justify-center gap-4">
          <LiquidStaking />
          <ProvideLiquidity />
          <Hedge />
        </div>
      </div>
    </div>
  );
}
