import Image from 'next/image';
import Posts from './posts/page';
import Feature from '../components/Feature';
import Section from '../components/Section';
import { features } from '@/lib/data';
import { links } from '@/lib/data';

export default function Home() {
  return (
    <main className="flex flex-col border-4 border-red-100">
      <Section
        styleProps="flex flex-auto flex-col items-center
          justify-center gap-x-20"
      >
        <div className="relative flex w-1/2 flex-row gap-x-4 text-lg">
          <div
            className="h-10rem rounded-ful absolute left-[-30rem]
              top-[-10rem] -z-10 h-[20rem] w-[20rem]
              bg-purple-200 blur-[10rem]"
          ></div>
          <div
            className="h-10rem left-[-30 rem] absolute top-[10rem]
              h-[10rem] w-[10rem] rounded-full bg-red-200
              blur-[10rem]"
          ></div>
          <div className="flex flex-col gap-y-8">
            <h1 className={'text-3xl font-bold'}>
              Welcome
            </h1>
            <p>My website</p>
          </div>
          <div className="w-min-1/2 flex w-1/2 flex-col items-center gap-y-8">
            <Image
              className={'animate-float'}
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

      <Posts />

      <Section styleProps="flex flex-col gap-y-8">
        {features.map((item, index) => {
          return (
            <Feature
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Section>
    </main>
  );
}
