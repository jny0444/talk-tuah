import Header from '@/components/Header';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import {SparklesText} from '@/components/ui/sparkle-text';
import { ShinyButton } from '@/components/ui/shiny-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className='background'>
      <Header/>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center gap-8 select-none mt-[12%]'>
          <GradualSpacing text="Go Talk 1+1 = 2ah" className='text-center font-lexend font-medium text-8xl'/>
          <div className='space-y-1'>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500'>Connect to Sepolia Testnet through Metamask</h3>
            <h3 className='text-center font-lexend font-medium text-3xl text-gray-500'>and post <SparklesText text="Anonymously" className='text-center text-black font-lexend font-medium text-3xl inline'/></h3>
          </div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'><ShinyButton className='bg-black text-white'>Check Out Repo <FontAwesomeIcon icon={faGithub} /></ShinyButton></a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Home;
