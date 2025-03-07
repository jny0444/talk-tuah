import { useChainId, useReadContract } from "wagmi";
import { wagmiContractConfig } from "@/constants/wagmiConfig";

function GetAllPosts() {
  const chainId = useChainId();
  console.log("Chain ID:", chainId);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getAllPosts",
    args: [],
  });

  console.log("Posts data:", posts);
  console.log("Is loading:", isLoading);
  console.log("Is error:", isError);
  console.log("Error:", error);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message || "An error occurred"}</div>;
  if (!posts || !Array.isArray(posts) || posts.length === 0)
    return <div>No posts found</div>;

  return (
    <>
      {posts.map((post: any) => (
        <div key={post.postId} className="p-4 border-b">
          <h2>{post.heading}</h2>
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
