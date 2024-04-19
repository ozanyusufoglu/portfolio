import Section from '@/components/Section';
import PostPreview from '../../components/PostPreview';
import { posts } from '@/lib/data';
import getPostdata from '@/lib/getPostData';

export default async function Posts() {
  const postData = await getPostdata();

  console.log(posts);

  // const postPreviews = posts.map(
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

  const postPreviews = postData.map(
    (post, index) => {
      console.log({ ...post });
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
        justify-center gap-x-20 gap-y-20 lg:flex-row items-center 
        lg:flex-nowrap"
    >
      {postPreviews}
    </Section>
  );
}
