import { useReadContract } from "wagmi";
import { wagmiContractConfig } from "@/constants/wagmiConfig";

function GetAllPosts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getPost", // Make sure this matches your contract
  });

  if (isLoading) return (<div>Loading...</div>);
  if (isError || !Array.isArray(posts)) return <div>No posts found</div>;

  return (
    <>
      {posts.map((post: any) => (
        <div key={post.id} className="p-4 border-b">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  );
}

function GetComments(postId: string) {
  const { data: comments } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getComment",
    args: [postId],
    query: {
      enabled: !!postId,
    },
  });

  if (!Array.isArray(comments)) {
    return <div>No comments found</div>;
  }

  return (
    <>
      {comments.map((comment: any) => (
        <div key={comment.id} className="p-4 border-b">
          <p>{comment.content}</p>
        </div>
      ))}
    </>
  );
}

export { GetAllPosts, GetComments };
