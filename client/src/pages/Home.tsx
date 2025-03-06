import { Link } from "react-router-dom";
import { useEffect } from "react";

import Header from "@/components/Header";
import About from "@/components/About";
import { Card } from "@/components/Card";
import Footer from "@/components/Footer";

import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { SparklesText } from "@/components/ui/sparkle-text";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="background select-none space-y-20 min-[600px]:space-y-28 lg:space-y-36 xl:space-y-48">
      <Header />
      <div className="flex flex-col items-center justify-center gap-8 min-[600px]:gap-16 pb-20 md:pb-32">
        <div>
          <GradualSpacing
            text="Go Tawk 1+1 = 2ah"
            className="font-lexend text-4xl min-[600px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          />
          <GradualSpacing
            text="on Web3"
            className="font-lexend text-4xl min-[600px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            duration={0.9}
            delayMultiple={0.1}
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-lexend text-gray-500 text-lg min-[600px]:text-2xl md:text-3xl xl:text-4xl">
            Connect to <span className="text-black">Sepolia Testnet</span>
          </h2>
          <h2 className="font-lexend text-gray-500 text-lg min-[600px]:text-2xl md:text-3xl xl:text-4xl">
            through <span className="text-black">Metamask</span>
          </h2>
          <h2 className="font-lexend text-gray-500 text-lg min-[600px]:text-2xl md:text-3xl xl:text-4xl">
            and post{" "}
            <SparklesText
              text="Anonymously"
              className="text-black font-lexend font-normal inline text-lg min-[600px]:text-2xl md:text-3xl xl:text-4xl"
            />
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button className="font-lexend bg-black text-white px-3 py-2 rounded-xl hover:scale-105 active:scale-95 duration-300 ease-in-out min-[600px]:text-lg xl:text-xl xl:px-4 xl:py-3">
              Check Out Repo
              <span className="[word-spacing:0.2rem]">
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </button>
          </a>
          <a href="#boards">
            <button className="font-lexend bg-black text-white px-3 py-2 rounded-xl hover:scale-105 active:scale-95 duration-300 ease-in-out min-[600px]:text-lg xl:text-xl xl:px-4 xl:py-3">
              Continue to Boards
              <span className="[word-spacing:0.3rem]">
                {" "}
                <FontAwesomeIcon icon={faNewspaper} />
              </span>
            </button>
          </a>
        </div>
      </div>
      <About />
      <div
        id="boards"
        className="flex flex-col items-center justify-center gap-8 pt-10 xl:gap-16"
      >
        <div>
          <h3 className="font-lexend text-4xl xl:text-5xl">Boards</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <Link to="/boards/blockchain">
            <Card
              image="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Blockchain.gif"
              title="Blockchain"
            />
          </Link>
          <Link to="/boards/shetposting">
            <Card
              image="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Shet.gif"
              title="Shetposting"
            />
          </Link>
          <Link to="/boards/political">
            <Card
              image="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Political.gif"
              title="Political"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
