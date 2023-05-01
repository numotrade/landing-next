import { clsx } from "clsx";

import TokenIcon from "./tokenIcon";

export default function ProvideLiquidity() {
  return (
    <div className="earn-card hidden sm:flex">
      <div
        className={clsx(
          "h-24 w-full p-2",
          "bg-gradient-to-tr from-[#7c7c84] to-[#2474cc]",
        )}
      >
        <p className="w-fit rounded-lg bg-white bg-opacity-50 p-2 font-medium">
          Provide liquidity
        </p>
      </div>
      <div className="relative left-[8px] top-[-32px] flex h-fit w-fit items-center rounded-lg bg-white p-2">
        <TokenIcon
          src={
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
          }
          size={48}
        />
        <TokenIcon
          src={
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
          }
          size={48}
        />
      </div>

      <div className="-mt-8 flex flex-col gap-4  p-4">
        <h2 className="">ETH + USDC</h2>
      </div>
    </div>
  );
}
