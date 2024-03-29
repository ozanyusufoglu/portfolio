import Section from '@/components/Section';
import PostPreview from '../../components/PostPreview';
import { posts } from '@/lib/data';

export default function Posts() {
  const postPreviews = posts.map(
    (post, index) => {
      return (
        <PostPreview
          key={index}
          {...post}
        />
      );
    }
  );

  return (
    <Section
      styleProps="flex flex-col flex-wrap 
        justify-center gap-x-20 gap-y-20 lg:flex-row 
        lg:flex-nowrap"
    >
      {postPreviews}
    </Section>
  );
}
