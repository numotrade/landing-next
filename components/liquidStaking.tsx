import TokenIcon from "./tokenIcon";

export default function LiquidStaking() {
  return (
    <div className="liquid-staking-bg earn-card hidden items-center gap-6 p-6 sm:flex">
      <p className="p1">Liquid Staking Boost</p>
      <TokenIcon
        src={
          "https://assets.coingecko.com/coins/images/18834/small/wstETH.png?1633565443"
        }
        size={48}
      />
    </div>
  );
}
