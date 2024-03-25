import Image from "next/image";
// import styles from "./page.module.css";
import Posts from "./posts/page";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="p-y-40 flex flex-col">
      <Section>
        <div className="flex w-1/2 flex-row gap-x-4 text-lg">
          <div className="flex flex-col gap-y-8">
            <h1 className={"text-3xl font-bold"}>Welcome</h1>
            <p>We will be talking about Nextjs and fundamentals</p>
          </div>
          <div className="flex w-1/2 flex-col items-center">
            <Image
              className={"animate-float"}
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
      </Section>

      <Section>
        <Posts />
      </Section>

      {/* <section>Features</section> */}
    </main>
  );
}

// .heroContainer {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: row;
//   box-shadow: -5px 5px 0 black;
//   border: 2px solid black;
//   padding: 5rem;

//   /* gap: 2rem; */
// }

// .heroTitle {
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   font-size: 2rem;
//   width: 50%;
// }

// .reactLogo {
//   animation: float 1s ease-in-out infinite alternate-reverse;
// }

// @keyframes float {
//   from {
//     transform: translateY(0px);
//   }

//   to {
//     /* transform: rotate(90deg) */
//     transform: translateY(20px);
//   }

// }

// .blog {
//   display: flex;
//   flex-direction: row;
//   padding: 10rem 0;
//   gap: 5rem;
// }
