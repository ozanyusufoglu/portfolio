import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    // .component {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    //     padding: 5rem 10rem;
    //     background-color: lavender;
    // }

    <div className="bg-purple-100 px-40 py-20">
      <div>
        <Link
          href="https://github.com/ozanyusufoglu/scrimba-nextjs-workshop"
          className={styles.sourceCode}
        >
          <Image
            src="github-mark.svg"
            alt="github logo"
            width={30}
            height={30}
          ></Image>
          <p>Show me to the source code</p>
        </Link>
      </div>

      <br />
      <br />
      <div>
        <p>
          Built by <Link href="https://github.com/ozanyusufoglu/">Ozan</Link>{" "}
          with 🐵🧠
        </p>
      </div>
      <br />
      <h4>2024</h4>
    </div>
  );
}
