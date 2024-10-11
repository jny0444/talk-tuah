import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import BlurIn from '@/components/ui/blur-in';

const Home = () => {
  return (
      <div className='bg-gradient-to-br from-cyan-500 to-blue-600'>
        <div className="flex flex-col justify-center items-center min-h-screen gap-8">
          <img src="https://raw.githubusercontent.com/jny0444/talk-tuah/45f8d3f5dcd4ef4a92bb24d5830ccbe62d04f17f/client/src/assets/favicon.svg" alt="talk-tuah" className='absolute top-0 mt-10 h-8 animate-pulse'/>
          <BlurIn word="Talk Tuah" className="text-center text-9xl max-md:text-8xl font-pacifico text-white select-none max-sm:scale-90"/>
          <BlurIn word='With Anon' className='text-2xl text-center font-marker text-white select-none max-sm:scale-90'/>
          <div className="flex flex-col items-center gap-10 mt-20 max-sm:scale-90">
            <Link to="genre/blockchain"><button className='bg-slate-900 px-6 py-2 text-lg text-white rounded-2xl hover:scale-110 duration-300 active:scale-90 active:duration-150 ease-in-out select-none font-space font-semibold cursor-pointer'>Blockchain <FontAwesomeIcon icon={faBitcoin} /></button></Link>
            <p className='text-white font-space font-extrabold text-xl select-none'>--// OR //--</p>
            <button className='bg-black px-6 py-2 text-lg text-white rounded-2xl hover:scale-110 duration-300 active:scale-90 active:duration-150 ease-in-out select-none font-space font-bold cursor-pointer'>Connect Wallet <FontAwesomeIcon icon={faWallet} /></button>
          </div>
        </div>
      </div>
  )
}

export default Home;
