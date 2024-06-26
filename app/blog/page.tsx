import Section from '@/components/Section';
import PostPreview from '../../components/PostPreview';
import { getPosts, getAllPostsSlug } from '@/util/getPostsMetadata';

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
    <Section className="flex flex-col flex-wrap justify-start gap-x-20 gap-y-20 lg:flex-row items-center">
      {postPreviews}
    </Section>
  );
}
