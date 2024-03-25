import PostPreview from "@/components/PostPreview";
import { postData } from "./postData";

export default function Posts() {
  const postPreviews = postData.map((post, index) => {
    return <PostPreview key={index} {...post} />;
  });

  return (
    <section className="p-x-40 flex flex-row gap-x-20">{postPreviews}</section>
  );
}
