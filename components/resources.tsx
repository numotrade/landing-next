import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { ImBook, ImGithub, ImTwitter } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

import Popover from "./popover";

const size = 20;

export default function Resources() {
  return (
    <Popover
      button={
        <>
          <p className="p2 text-white">Resources</p>
          <IoIosArrowDown className="transform fill-white duration-300 ui-open:-rotate-180" />
        </>
      }
      contents={
        <div className="grid rounded-xl bg-gray-900 p-2">
          <Link
            className="resource-item"
            href="https://numoen.gitbook.io/numoen"
          >
            <ImBook size={size} />

            <p>Documentation</p>
          </Link>
          <Link
            className="resource-item"
            href="https://numoen.gitbook.io/numoen"
          >
            <FaDiscord size={size} />

            <p>Discord</p>
          </Link>
          <Link
            className="resource-item"
            href="https://numoen.gitbook.io/numoen"
          >
            <ImGithub size={size} />
            <p>Github</p>
          </Link>
          <Link
            className="resource-item"
            href="https://numoen.gitbook.io/numoen"
          >
            <ImTwitter size={size} />
            <p>Twitter</p>
          </Link>
        </div>
      }
    />
  );
}
