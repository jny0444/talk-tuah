import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
      <div>
        <img loading='lazy' src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/star.gif" className="fixed min-h-screen -z-10 object-cover"></img>
        <div className="flex flex-col justify-center items-center backdrop-blur-md min-h-screen gap-8">
          <h1 className='text-9xl text-center font-marker text-white select-none max-sm:scale-90'>Talk Tuah</h1>
          <p className='text-xl text-center font-pacifico text-white select-none max-sm:scale-90'>with Anon</p>
          <div className="flex flex-row gap-8 mt-20 max-sm:scale-90">
            <Link to="genre/blockchain"><button className='bg-slate-900 px-6 py-2 text-lg text-white rounded-2xl hover:scale-110 duration-300 active:scale-100 ease-in-out select-none font-space font-semibold cursor-pointer'>Blockchain <FontAwesomeIcon icon={faBitcoin} /></button></Link>
          </div>
          <p className='text-white font-space font-bold text-xl select-none'>--// OR //--</p>
          <div className="flex flex-row gap-8 max-sm:scale-90">
            <button className='bg-black px-6 py-2 text-lg text-white rounded-2xl hover:scale-110 duration-300 active:scale-100 ease-in-out select-none font-space font-bold cursor-pointer'>Connect Wallet <FontAwesomeIcon icon={faWallet} /></button>
          </div>
        </div>
      </div>
  )
}

export default Home;
