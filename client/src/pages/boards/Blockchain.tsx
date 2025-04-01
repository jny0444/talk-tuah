import Header from "@/components/Header";
import { GetAllPosts } from "@/hooks/useContractRead";
import { SubmitPost } from "@/hooks/useContractWrite";

const Blockchain = () => {
  // const [posts, setPosts] = useState([]);

  return (
    <div className="background min-h-screen">
      <Header />
      <div className="text-black p-4">
        <h1 className="text-center font-lexend text-3xl font-bold">
          Blockchain
        </h1>
        <SubmitPost postType={0} />
      </div>
      <GetAllPosts postType={0}/>
    </div>
  );
};

export default Blockchain;
