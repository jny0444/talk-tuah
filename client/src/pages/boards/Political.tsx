import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetAllPosts } from "@/hooks/useContractRead";
import { SubmitPost } from "@/hooks/useContractWrite";

const Political = () => {
  return (
    <div className="background">
      <Header />
      <div className="text-black p-4">
        Political
        <SubmitPost postType={2}/>
      </div>
      <GetAllPosts />
      <Footer />
    </div>
  );
}

export default Political