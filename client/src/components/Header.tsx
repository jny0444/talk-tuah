import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updatePageSize = () => {
      setPageSize(document.getElementById('root')?.clientWidth);
    };

    updatePageSize();
    window.addEventListener('resize', updatePageSize);

    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (pageSize !== undefined && pageSize < 768) {
    return (
      <div>
        <div className="flex flex-row justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-6">
          <h1 className='text-3xl text-center font-pacifico text-white select-none'>Talk Tuah</h1>
          <div className="flex flex-col gap-1.5 cursor-pointer" onClick={toggleMenu}>
            <div className={`h-1 w-8 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-3' : ''}`}></div>
            <div className={`h-1 w-8 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-1 w-8 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>
        {isMenuOpen && (
          <ul className={`absolute z-10 right-0 text-right space-y-4 mr-4 mt-4 backdrop-blur-md p-6 rounded-3xl border-2 border-gray-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/"><li className='cursor-pointer select-none font-lexend font-semibold text-lg duration-200 px-3 py-1.5 rounded-lg hover:text-blue-600 active:scale-95'>Home</li></Link>
            <li className='cursor-pointer select-none font-lexend font-semibold text-lg duration-200 px-3 py-1.5 rounded-lg hover:text-blue-600 active:scale-95'>About</li>
            <li className='cursor-pointer select-none font-lexend font-semibold text-lg duration-200 px-3 py-1.5 rounded-lg hover:text-blue-600 active:scale-95'>Connect</li>
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-600 px-14 py-6">
        <h1 className='text-3xl text-center font-pacifico text-white select-none'>Talk Tuah</h1>
        <ul className="flex flex-row justify-between items-center gap-8">
          <Link to="/"><li className='cursor-pointer select-none text-white font-lexend font-semibold text-lg duration-200 px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 active:scale-95'>Home</li></Link>
          <li className='cursor-pointer select-none text-white font-lexend font-semibold text-lg duration-200 px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 active:scale-95'>About</li>
          <li className='cursor-pointer select-none text-white font-lexend font-semibold text-lg duration-200 px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 active:scale-95'>Connect</li>
        </ul>
      </div>
    );
  }
};

export default Header;