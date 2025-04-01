import Header from "@/components/Header";
import { GetAllPosts } from "@/hooks/useContractRead";
import { SubmitPost } from "@/hooks/useContractWrite";

const Political = () => {
  return (
    <div className="background min-h-screen">
      <Header />
      <div className="text-black p-4">
        <h1 className="text-center font-lexend text-3xl font-bold">
          Political
        </h1>
        <SubmitPost postType={2} />
      </div>
      <GetAllPosts postType={2}/>
    </div>
  );
};

export default Political;
