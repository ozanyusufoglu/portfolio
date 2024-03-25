import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationItem from "./NavigationItem";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-100 px-40 py-20">
      <div>
        <NavigationItem href="https://github.com/ozanyusufoglu/scrimba-nextjs-workshop">
          <div className="flex flex-row items-center space-x-4">
            <Image
              src="github-mark.svg"
              alt="github logo"
              width={30}
              height={30}
            ></Image>
            <p>Show me to the source code</p>
          </div>
        </NavigationItem>
      </div>

      <br />
      <br />
      <div>
        <p>
          Built by{" "}
          <Link href="https://github.com/ozanyusufoglu/" className="font-bold">
            Özgür Ozan
          </Link>{" "}
          with 🐵🧠
        </p>
      </div>
      <br />
      <p className="font-bold">2024</p>
    </div>
  );
}
