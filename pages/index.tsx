import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-8 rounded-xl border border-gray-200 bg-white p-6 pt-24 text-sm">
        <h1 className="text-6xl font-semibold">Crypto, done the right way</h1>
        <p className="max-w-md text-center text-lg text-secondary">
          Access leverage with no counterparty risk, liquidations, or oracles on
          any market.
        </p>
        <Link
          href="app.numoen.com"
          className="rounded-xl bg-black px-4 py-2 text-white"
        >
          Launch App
        </Link>
      </div>
    </>
  );
}
