import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <img src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/star.gif" className="fixed min-h-screen -z-10 object-cover"></img>
        <div className="flex flex-col justify-center items-center backdrop-blur-md min-h-screen gap-8">
          <h1 className='text-9xl text-center font-Pacifico text-white select-none max-sm:scale-90'>Talk Twoah</h1>
          <p className='text-lg text-center font-Bungee text-white select-none max-sm:scale-90'>go talk 1+1 = 2ah</p>
          <div className="flex flex-row gap-8 mt-20 max-sm:scale-90">
            <Link to="genre/blockchain"><button className='bg-blue-600 px-6 py-2 text-white rounded-2xl hover:scale-110 duration-300 active:scale-100 ease-in-out select-none font-mono'>Blockchain</button></Link>
            <Link to="genre/rust"><button className='bg-blue-600 px-6 py-2 text-white rounded-2xl hover:scale-110 select-none duration-300 active:scale-100 ease-in-out font-mono'>Rust</button></Link>
            <Link to="genre/linux"><button className='bg-blue-600 px-6 py-2 text-white rounded-2xl hover:scale-110 select-none duration-300 active:scale-100 ease-in-out font-mono'>Linux</button></Link>
          </div>
        </div>
      </div>
  )
}

export default Home;