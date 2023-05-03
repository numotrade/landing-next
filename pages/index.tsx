import Button from "@/components/button";
import Hedge from "@/components/hedge";
import LiquidStaking from "@/components/liquidStaking";
import ProvideLiquidity from "@/components/provideLiquidity";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-12 flex w-full max-w-5xl flex-col items-center gap-12">
      <Head>
        <title>Numoen</title>
      </Head>
      <div className="top-card flex flex-col h-[90vh] overflow-clip pt-12 sm:pt-24">
        <div className="flex h-full flex-col items-center gap-8">
          <h1 className="text-center">Hedge any Uniswap position!</h1>
          <p className="p3 max-w-md text-center text-2xl">
            Earn fees from Uniswap with no impermanent loss.
          </p>
          <Link href="https://app.numoen.com">
            <Button variant="primary">Launch App</Button>
          </Link>
        </div>
        <div className="relative grow-0 -bottom-10 flex w-full items-center justify-center gap-4 sm:row-start-3">
          <LiquidStaking />
          <ProvideLiquidity />
          <Hedge />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        {/* <Link href="/developers" className="flex w-full items-center gap-2">
          <p className="p1">Developers</p>
          <IoIosArrowForward className="fill-black" />
        </Link> */}
        <h2 className="mb-6 w-full">
          Numoen developed a next-generation{" "}
          <span className="text-[#3b82f6]">Power Market Maker Protocol</span>
        </h2>
        <div className="grid w-full gap-6 sm:grid-cols-3">
          <div className="">
            <p className="p2">Gamma Neutral Vault</p>
            <p className="p3">Uniswap positions loose money. Our vault hedges the volatility risk so you don't have to worry about it.</p>
          </div>
          <div className="">
            <p className="p2">Decentralized</p>
            <p className="p3">No one owns the protocol. PMMP has no governable parameters and no external oracle dependencies.</p>
          </div>
          <div className="">
            <p className="p2">Open-source and Audited</p>
            <p className="p3">The codebase is 100% open source and completely immutable. Please check the docs to review our audits.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 pt-32">
        <Link href="/developers" className="flex w-full items-center gap-2">
          <p className="p1">Backers</p>
        </Link>
        <div className="grid w-full gap-6 sm:grid-cols-3">
          <div className="h-24 rounded-xl border-2 border-gray-200 bg-white p-6 transform ease-in-out hover:scale-105 duration-300 items-center justify-center w-full flex">
            <Image src="/social.png" alt="social" width={363} height={34} />
          </div>
          <div className="h-24 rounded-xl border-2 border-gray-200 bg-white p-6 transform ease-in-out hover:scale-105 duration-300 items-center justify-center w-full flex">
            <Image
              src="/newform.svg"
              className="fill-black text-black"
              alt="newform"
              width={200}
              height={100}
            />
          </div>
          <div className="h-24 rounded-xl border-2 border-gray-200 bg-white p-6 transform ease-in-out hover:scale-105 duration-300 items-center justify-center w-full flex">
            <Image
              src="celo.svg"
              alt="celo"
              width={200}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
