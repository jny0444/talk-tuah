import { useEffect } from 'react';
import Header from '@/components/Header';
import { Card } from '@/components/Card';
import Footer from '@/components/Footer';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { SparklesText } from '@/components/ui/sparkle-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className='background space-y-56 max-2xl:space-y-52 max-xl:space-y-48 max-lg:space-y-44 max-md:space-y-36 max-sm:space-y-24'>
      <Header/>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center gap-10 select-none mb-40'>
          <div>
            <GradualSpacing text="Go Tawk 1+1 = 2ah" className='text-center font-lexend font-medium text-8xl max-lg:text-6xl max-md:text-4xl'/>
            <GradualSpacing text="on Web3" className='text-center font-lexend font-medium text-8xl max-lg:text-6xl max-md:text-4xl' duration={0.9} delayMultiple={0.1}/>
          </div>
          <div className='space-y-1'>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500 max-md:text-lg'>Connect to <span className='text-black'>Sepolia Testnet</span></h3>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500 max-md:text-lg'>through <span className='text-black'>Metamask</span></h3>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500 max-md:text-lg'>and post <SparklesText text="Anonymously" className='text-center text-black font-lexend font-medium text-3xl inline max-md:text-lg'/></h3>
          </div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'><button className='font-lexend text-xl px-6 py-2.5 rounded-md duration-300 hover:shadow-xl hover:scale-105 active:scale-100 max-md:text-lg bg-black text-white'>Check Out Repo<span className='[word-spacing:0.2rem]'> <FontAwesomeIcon icon={faGithub} /></span></button></a>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h3 className='text-center font-lexend font-medium text-7xl max-lg:text-5xl max-md:text-3xl text-black'>Boards</h3>
        </div>
        <div className='grid grid-cols-3 gap-10 max-[990px]:grid-cols-1'>
          <Card image='https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Blockchain.gif' title='Blockchain'/>
          <Card image='https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Shet.gif' title='Shetposting'/>
          <Card image='https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/Political.gif' title='Political'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
