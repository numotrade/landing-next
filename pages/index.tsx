import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-8 p-6 pt-24 text-sm bg-white border border-gray-200 rounded-xl">
        <h1 className="text-6xl font-semibold">Crypto, done the right way</h1>
        <p className="max-w-md text-lg text-center text-secondary">
          Access leverage with no counterparty risk, liquidations, or oracles on
          any market.
        </p>
        <Link
          href="app.numoen.com"
          className="px-4 py-2 text-white bg-black rounded-xl"
        >
          Launch App
        </Link>
      </div>
    </>
  );
}
