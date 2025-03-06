import abi from "@/constants";
import { useWriteContract } from "wagmi";
import dotenv from "dotenv";

dotenv.config();

export function SubmitPost() {
  const { writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const heading = formData.get("heading") as string;
    const content = formData.get("content") as string;
    const postType = 0;

    writeContract({
      address: `0x${import.meta.env.CONTRACT_ADDRESS}`,
      abi: abi,
      functionName: "createPost",
      args: [heading, content, BigInt(postType)],
    });
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="border p-2 w-full"
      />
      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

// export function submitComment() {
//   const { writeContract } = useWriteContract();

//   async function submit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const heading = formData.get("heading") as string;
//     const content = formData.get("content") as string;
//     const postType = 0;

//     writeContract({
//       address: `0x${import.meta.env.CONTRACT_ADDRESS}`,
//       abi: abi,
//       functionName: "createPost",
//       args: [heading, content, BigInt(postType)],
//     });
//   }

//   return (
//     <form onSubmit={submit} className="space-y-4">
//       <input
//         name="title"
//         type="text"
//         placeholder="Title"
//         className="border p-2 w-full"
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         className="border p-2 w-full"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

