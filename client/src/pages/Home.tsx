import { useEffect } from 'react';
import Header from '@/components/Header';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import {SparklesText} from '@/components/ui/sparkle-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/122870185?v=4",
    "https://avatars.githubusercontent.com/u/140409722?v=4",
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className='background'>
      <Header/>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center gap-8 select-none mt-[20dvh]'>
          <GradualSpacing text="Go Talk 1+1 = 2ah" className='text-center font-lexend font-medium text-8xl max-lg:text-6xl max-md:text-4xl'/>
          <div className='space-y-1'>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500 max-md:text-lg'>Connect to <span className='text-black'>Sepolia Testnet</span></h3>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500 max-md:text-lg'>through <span className='text-black'>Metamask</span></h3>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500 max-md:text-lg'>and post <SparklesText text="Anonymously" className='text-center text-black font-lexend font-medium text-3xl inline max-md:text-lg'/></h3>
          </div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'><button className='font-wallet font-semibold bg-inherit text-xl px-6 py-2 rounded-md duration-300 hover:shadow-lg [word-spacing:-0.3rem] max-md:text-lg'>Check Out Repo<span className='[word-spacing:0.1rem]'> <FontAwesomeIcon icon={faGithub} /></span></button></a>
        </div>
        <div id='forums' className='flex flex-col gap-10 mt-[20dvh] pt-[5dvh] select-none'>
          <div>
            <a href="#forums" className='scroll-smooth'><h3 className='font-lexend font-semibold text-3xl text-center max-md:text-xl'>Continue to Forums <FontAwesomeIcon icon={faCircleArrowRight} /></h3></a>
          </div>
            <div className='grid grid-cols-3 max-2xl:scale-[.65] max-2xl:gap-[30rem] max-lg:gap-16 max-lg:grid-cols-1 justify-items-center max-2xl:-mt-[8dvh] max-lg:-mt-[20dvh]'>
            <div className='relative'>
              <img src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Blockchain.gif" alt="" className='z-10 min-w-[30rem] max-sm:min-w-80 max-h-[30rem] max-md:max-h-80 object-cover rounded-[3rem] cursor-pointer border-8 border-gray-200 hover:shadow-2xl duration-300 ease-in-out'/>
              <h3 className='absolute top-40 max-md:top-20 text-3xl font-lexend text-gray-300 backdrop-blur-xl ml-2 pl-20 max-sm:pl-10 max-sm:pr-[6.65rem] pr-[14.15rem] py-10'>Blockchain</h3>
            </div>
            <div className='relative'>
              <img src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Shet.gif" alt="" className='z-10 min-w-[30rem] max-sm:min-w-80 max-h-[30rem] max-md:max-h-80 object-cover rounded-[3rem] cursor-pointer border-8 border-gray-200 hover:shadow-2xl duration-300 ease-in-out'/>
              <h3 className='absolute top-40 max-md:top-20 text-3xl font-lexend text-gray-300 backdrop-blur-xl ml-2 pl-20 max-sm:pl-10 max-sm:pr-[5.6rem] pr-[13.1rem] py-10'>Shetposting</h3>
            </div>
            <div className='relative'>
              <img src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Political.gif" alt="" className='z-10 min-w-[30rem] max-sm:min-w-80 max-h-[30rem] max-md:max-h-80 object-cover rounded-[3rem] cursor-pointer border-8 border-gray-200 hover:shadow-2xl duration-300 ease-in-out'/>
              <h3 className='absolute top-40 max-md:top-20 text-3xl font-lexend text-gray-300 backdrop-blur-xl ml-2 pl-20 max-sm:pl-10 max-sm:pr-[9.3rem] pr-[16.8rem] py-10'>Political</h3>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-center text-center mt-[30dvh] mb-10 space-y-8 max-lg:mt-[-15dvh] max-sm:scale-[0.85] select-none'>
          <h2 className='font-lexend text-4xl select-none max-md:text-xl'>Made with <FontAwesomeIcon icon={faBitcoin} /> by</h2>
          <div className='flex flex-row justify-center gap-20 max-lg:gap-10 max-md:flex-col max-md:items-center'>
            <a href="">
              <div className='flex flex-row items-center gap-4 bg-black px-4 py-3 rounded-xl text-white hover:scale-105 duration-200 ease-in-out'>
                <img src={avatarUrls[0]} alt="Avatar" className='h-14 rounded-full select-none'/>
                <div className='flex flex-col items-start'>
                  <h2 className='font-wallet font-bold text-xl'>jny0444</h2>
                  <h3 className='font-lexend text-gray-300'>Backend Developer</h3>
                </div>
              </div>
            </a>
            <a href="">
              <div className='flex flex-row items-center gap-4 bg-black px-4 py-3 rounded-xl text-white hover:scale-105 duration-200 ease-in-out'>
                <img src={avatarUrls[1]} alt="Avatar" className='h-14 rounded-full select-none'/>
                <div className='flex flex-col items-start'>
                  <h2 className='font-wallet font-bold text-xl'>skarwuuu</h2>
                  <h3 className='font-lexend text-gray-300'>Frontend Developer</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
