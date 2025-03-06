import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetAllPosts } from "@/hooks/useContractRead";
import { SubmitPost } from "@/hooks/useContractWrite";

const Blockchain = () => {
  // const [posts, setPosts] = useState([]);

  return (
    <div className="background">
      <Header />
      <div className="text-black p-4">
        Blockchain
        <SubmitPost />
      </div>
      <GetAllPosts />
      <Footer />
    </div>
  );
};

export default Blockchain;
