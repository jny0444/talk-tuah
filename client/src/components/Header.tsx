import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-gradient-to-br from-blue-600 to-blue-700 px-20 py-6">
      <h1 className='text-3xl text-center font-marker text-white select-none'>Talk Tuah</h1>
      <ul className="flex flex-row justify-between items-center gap-10">
        <Link to="/"><li className='cursor-pointer select-none text-white font-space font-semibold text-lg hover:underline'>Home</li></Link>
        <li className='cursor-pointer select-none text-white font-space font-semibold text-lg hover:underline'>About</li>
        <li className='cursor-pointer select-none text-white font-space font-semibold text-lg hover:underline'>Connect</li>
      </ul>
    </div>
  )
}

export default Header