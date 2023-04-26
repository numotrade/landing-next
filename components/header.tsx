import Image from "next/image";
import Link from "next/link";

import Button from "./button";
import Resources from "./resources";

export default function Header() {
  return (
    <div className="fixed top-4 z-10 flex w-full justify-center px-8 sm:px-10">
      <div className="flex w-full max-w-md items-center justify-between rounded-2xl bg-gray-900 p-1 ">
        <NumoenIcon />
        {/* <Link className="hidden hover:opacity-80 md:flex" href="/trade/">
          <p className="p2 text-white">PMMP</p>
        </Link> */}
        <Link className="hidden hover:opacity-80 sm:flex" href="/earn/">
          <p className="p2 text-white">Developers</p>
        </Link>
        <Resources />
        <Link href="https://app.numoen.com">
          <Button variant="primary" className="bg-gray-800">
            Launch App
          </Button>
        </Link>
      </div>
    </div>
  );
}

const NumoenIcon: React.FC = () => {
  return (
    <div className="h-10 w-10 rounded-xl bg-white p-1.5">
      <Image
        src="/numoen.svg"
        alt="Numoen Logo"
        width={30}
        height={30}
        priority
      />
    </div>
  );
};
