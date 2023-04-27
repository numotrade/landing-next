import Head from "next/head";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

import Button from "@/components/button";
import Hedge from "@/components/hedge";
import LiquidStaking from "@/components/liquidStaking";
import ProvideLiquidity from "@/components/provideLiquidity";

export default function Home() {
  return (
    <div className="mb-12 flex w-full max-w-5xl flex-col items-center gap-12">
      <Head>
        <title>Numoen</title>
      </Head>
      <div className="top-card grid h-[90vh] grid-rows-2 justify-center overflow-clip pt-12 sm:grid-rows-3 sm:pt-0">
        <div className="flex h-full flex-col items-center gap-8 sm:row-start-2">
          <h1 className="text-center">Decentralized Derivatives Exchange</h1>
          <p className="p3 max-w-md text-center text-lg">
            Access leverage with no counterparty risk, liquidations, or oracles,
            on any token.
          </p>
          <Link href="https://app.numoen.com">
            <Button variant="primary">Launch App</Button>
          </Link>
        </div>
        <div className="relative -bottom-10 flex w-full items-center justify-center gap-4 sm:row-start-3">
          <LiquidStaking />
          <ProvideLiquidity />
          <Hedge />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Link href="/" className="flex w-full items-center gap-2">
          <p className="p1">Developers</p>
          <IoIosArrowForward className="fill-black" />
        </Link>
        <h2 className="mb-6 w-full">
          Numoen developed a next-generation{" "}
          <span className="text-[#3b82f6]">Power Market Maker Protocol</span>
        </h2>
        <div className="grid w-full gap-6 sm:grid-cols-3">
          <div className="">
            <p className="p2">Liquidation-free derivatives on any token</p>
            <p className="p3">badfjhakfjasdkljfklas fjkdasljf jfkadjfkadjfa</p>
          </div>
          <div className="">
            <p className="p2">No oracles or admin keys</p>
            <p className="p3">badfjhakfjasdkljfklas fjkdasljf jfkadjfkadjfa</p>
          </div>
          <div className="">
            <p className="p2">Open-source and audited</p>
            <p className="p3">badfjhakfjasdkljfklas fjkdasljf jfkadjfkadjfa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
