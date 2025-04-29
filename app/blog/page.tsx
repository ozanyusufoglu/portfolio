import Section from '@/components/Section';
import PostPreview from '../../components/PostPreview';
import { getPosts } from '@/util/getPostDataBySlug';

export default async function Posts() {
  const postsData = await getPosts();

  const postPreviews = postsData.map((post, index) => {
    const { title, slug, icon, cover, previewItems } = post;
    return (
      <PostPreview
        key={index}
        title={title}
        icon={icon}
        slug={slug}
        cover={cover}
        previewItems={previewItems}
      />
    );
  });

  return (
    <Section className="flex flex-col gap-8 sm:pt-40 prose-a:no-underline prose ">
      <h1 className="text-4xl font-medium">Blog 🧠</h1>
      <p className="">
        A mostly a technical blog where I share some cases or challanges when
        building products 🐵 + 🧠 + 🤖
      </p>
      {postPreviews}
    </Section>
  );
}
