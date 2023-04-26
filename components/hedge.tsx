import { clsx } from "clsx";
import Image from "next/image";

import TokenIcon from "./tokenIcon";

export default function Hedge() {
  return (
    <div className="earn-card ">
      <div
        className={clsx(
          "h-24 w-full p-2",
          "bg-gradient-to-tr from-[#fff] to-[#ff007a]"
        )}
      >
        <p className="w-fit rounded-lg bg-white bg-opacity-50 p-2 font-medium">
          Hedge Uniswap V3
        </p>
        <div className="w-full justify-end">
          <Image
            src="/uniswap.svg"
            alt="uniswap"
            height={85}
            width={85}
            className="relative right-[-160px] top-[-30px]"
          />
        </div>
      </div>
      <div className="relative left-[8px] top-[-32px] flex h-fit w-fit items-center rounded-lg bg-white p-2">
        <TokenIcon
          src={
            "https://raw.githubusercontent.com/rainbow-me/assets/master/blockchains/arbitrum/info/logo.png"
          }
          size={48}
        />
        <TokenIcon
          src={
            "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
          }
          size={48}
        />
      </div>

      <div className="-mt-8 flex flex-col gap-4  p-4">
        <h2 className="">ARB + ETH</h2>
      </div>
    </div>
  );
}
