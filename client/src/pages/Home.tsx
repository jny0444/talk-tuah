import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h1>Talk Tuah</h1>
        <p>Go talk 1+1 = 2ah</p>
        <div className="flex flex-row gap-8">
            <Link to="/blockchain"><button className='bg-blue-600 px-6 py-2 text-white hover:scale-110 duration-300 ease-in-out'>Blockchain</button></Link>
            <Link to="/rust"><button className='bg-blue-600 px-6 py-2 text-white hover:scale-110 duration-300 ease-in-out'>Rust</button></Link>
            <Link to="/linux"><button className='bg-blue-600 px-6 py-2 text-white hover:scale-110 duration-300 ease-in-out'>Linux</button></Link>
        </div>
    </div>
  )
}

export default Home;