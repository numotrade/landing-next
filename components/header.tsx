import Button from "./button";
import Menu from "./menu";
import Resources from "./resources";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-4 z-10 flex w-full justify-center px-8 sm:px-10">
      <div className="flex w-full max-w-xs items-center justify-between rounded-2xl bg-gray-900 p-1">
        <NumoenIcon />
        {/* <Link
          className="hidden rounded-xl px-2 py-1 hover:opacity-80 sm:flex"
          href="/developers"
        >
          <p className="p2 text-white">Developers</p>
        </Link> */}
        <Resources />
        <div className="flex items-center gap-1 sm:gap-0">
          <Link href="https://app.numoen.com" className="">
            <Button variant="primary" className="bg-gray-800">
              Launch App
            </Button>
          </Link>
          <Menu />
        </div>
      </div>
    </div>
  );
}

const NumoenIcon: React.FC = () => {
  return (
    <Link className="h-10 w-10 rounded-xl bg-white p-1.5" href="/">
      <Image
        src="/numoen.png"
        alt="Numoen Logo"
        width={30}
        height={30}
        priority
      />
    </Link>
  );
};
