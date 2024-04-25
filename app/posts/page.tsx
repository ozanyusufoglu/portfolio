import Section from '@/components/Section';
import PostPreview from '../../components/PostPreview';
import { values } from '@/util/data';
import ValuePreview from '@/components/ValuePreview';
import { getPosts } from '@/util/getPostsMetadata';

export default async function Posts() {
  // const postData = await getPostsMetadata();

  const valuePreviews = values.map((value, index) => {
    return (
      <ValuePreview
        key={index}
        {...value}
      />
    );
  });

  // const postPreviews = postData.map(
  //   (post, index) => {
  //     console.log(post);
  //     return (
  //       <PostPreview
  //         key={index}
  //         {...post}
  //       />
  //     );
  //   }
  // );

  return (
    <Section
      styleProps="flex flex-col flex-wrap 
        justify-center gap-x-20 gap-y-20 lg:flex-row items-center 
        "
    >
      {valuePreviews}
    </Section>
  );
}
