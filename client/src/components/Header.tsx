import { useState, useEffect } from "react";
import { faLink, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWallet } from "@/hooks/useWallet";

const Header = () => {
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);

  const { address, isConnected, disconnect, connectWallet } = useWallet();

  useEffect(() => {
    const updatePageSize = () => {
      setPageSize(document.getElementById("root")?.clientWidth);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  if (pageSize !== undefined && pageSize < 768) {
    return (
      <div className="flex flex-row justify-between items-center px-4 py-5">
        <a href="/" className="flex flex-row gap-2 items-center">
          <img
            src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/TalkLogo.jpg"
            alt="Logo"
            className="h-12 rounded-xl select-none"
          />
          <h2 className="font-lexend text-xl font-semibold select-none leading-5">
            Tawk
            <br />
            Twoah
          </h2>
        </a>
        <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-black backdrop-blur-lg px-3 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-100 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
          <span className="text-lg font-space">
            <FontAwesomeIcon icon={faLink} />
          </span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between items-center px-16 py-8">
        <a href="/" className="flex flex-row gap-6 items-center">
          <img
            src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/TalkLogo.jpg"
            alt="Logo"
            className="h-16 rounded-xl select-none"
          />
          <h2 className="font-lexend text-3xl font-semibold select-none">
            Tawk Twoah
          </h2>
        </a>
        <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-black backdrop-blur-lg px-6 py-2 text-base text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-100 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
          {isConnected ? (
            <span className="text-lg font-lexend" onClick={disconnect}>
              {address?.trim().slice(0, 4)}...{address?.trim().slice(-4)}
              <span className="[word-spacing:0.2rem]">
                {" "}
                <FontAwesomeIcon icon={faWallet} />
              </span>
            </span>
          ) : (
            <span className="text-lg font-lexend" onClick={connectWallet}>
              Connect Wallet
              <span className="[word-spacing:0.2rem]">
                {" "}
                <FontAwesomeIcon icon={faWallet} />
              </span>
            </span>
          )}
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </button>
      </div>
    );
  }
};

export default Header;
