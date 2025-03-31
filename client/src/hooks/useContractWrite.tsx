import abi from "@/constants";
import { useWriteContract, useAccount } from "wagmi";

export function SubmitPost({ postType }: { postType: number }) {
  const { isConnected } = useAccount();
  const { writeContract } = useWriteContract();

  if (!isConnected) {
    return (
      <div className="bg-black/10 backdrop-blur-md p-5 rounded-xl border border-white/20 text-center font-lexend">
        Please connect your wallet
      </div>
    );
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const heading = formData.get("title") as string;
    const content = formData.get("description") as string;

    writeContract({
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      abi: abi,
      functionName: "createPost",
      args: [heading, content, BigInt(postType)],
    });
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col space-y-6 p-6 bg-black/10 backdrop-blur-md rounded-xl border border-white/20 max-w-xl mx-auto my-8"
    >
      <div className="space-y-2">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="border border-white/30 bg-white/50 p-3 w-full rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          className="border border-white/30 bg-white/50 p-3 w-full rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-fit self-center font-lexend bg-black text-white px-3 py-2 rounded-xl active:scale-95 duration-300 ease-in-out min-[600px]:text-lg xl:text-xl xl:px-4 xl:py-3"
      >
        Submit Post
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20"></div>
        </div>
      </button>
    </form>
  );
}

export function submitComment() {
  const { writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const heading = formData.get("heading") as string;
    const content = formData.get("content") as string;
    const postType = 0;

    writeContract({
      address: import.meta.env.CONTRACT_ADDRESS,
      abi: abi,
      functionName: "createPost",
      args: [heading, content, BigInt(postType)],
    });
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-6 p-6 bg-black/10 backdrop-blur-md rounded-xl border border-white/20 max-w-xl mx-auto my-8"
    >
      <div className="space-y-2">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="border border-white/30 bg-white/50 p-3 w-full rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          className="border border-white/30 bg-white/50 p-3 w-full rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        className="group/button relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-black backdrop-blur-lg px-6 py-3 text-base font-lexend text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-100 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
      >
        Submit Comment
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20"></div>
        </div>
      </button>
    </form>
  );
}
