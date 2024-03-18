import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./posts/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTitle}>
            <h1 className={styles.title}>Welcome</h1>
            <p>We will be talking about Nextjs and fundamentals</p>
            <h1 className="text-3xl font-bold underline">and Tailwind!</h1>
          </div>
          <div className={styles.heroImage}>
            <Image
              className={styles.reactLogo}
              src="/react.svg"
              width={150}
              height={150}
              alt="Picture of the author"
            ></Image>

            <Image
              src="/next.svg"
              width={200}
              height={200}
              alt="Picture of the author"
            ></Image>
          </div>
        </div>
      </section>

      <section className={styles.blog}>
        <Posts />
      </section>

      {/* <section>
        Features
      </section> */}
    </main>
  );
}
