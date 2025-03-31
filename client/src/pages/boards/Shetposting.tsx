import Header from "@/components/Header";
import { GetAllPosts } from "@/hooks/useContractRead";
import { SubmitPost } from "@/hooks/useContractWrite";

const Shetposting = () => {
  return (
    <div className="background min-h-screen">
      <Header />
      <div className="text-black p-4">
        <h1 className="text-center font-lexend text-3xl font-bold">
          ShetPosting
        </h1>
        <SubmitPost postType={1} />
      </div>
      <GetAllPosts />
    </div>
  );
};

export default Shetposting;
