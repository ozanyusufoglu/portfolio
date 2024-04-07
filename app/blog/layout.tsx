import Section from '@/components/Section';
import Image from 'next/image';
import Button from '@/components/Button';

export default function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return (
    <article
      className="min-h-screen my-48 flex flex-col items-center
        gap-y-16"
    >
      <Image
        alt="caption"
        width={1000}
        height={200}
        src="/man_looking_at_mobile_phone.jpg"
        className="shadow-md"
      />
      <div className="prose prose-slate dark:prose-invert antialiased">
        {children}
      </div>
      <Button styleProps="bg-red-100">
        Try pomodoro technique
      </Button>
    </article>
  );
}
