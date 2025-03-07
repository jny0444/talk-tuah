import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetAllPosts } from "@/hooks/useContractRead";
import { SubmitPost } from "@/hooks/useContractWrite";

const Shetposting = () => {
  return (
    <div className="background">
      <Header />
      <div className="text-black p-4">
        ShetPosting
        <SubmitPost postType={1} />
      </div>
      <GetAllPosts />
      <Footer />
    </div>
  );
};

export default Shetposting;
