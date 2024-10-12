import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex flex-col gap-6 items-center bg-black py-10 select-none'>
      <h2 className='font-lexend text-white text-2xl max-md:text-xl'>Made with <FontAwesomeIcon icon={faEthereum} /> by</h2>
      <div className='flex flex-row gap-12'>
        <div className='flex flex-row gap-2 items-center'>
          <img src="https://avatars.githubusercontent.com/u/122870185?v=4" alt="" className='h-10 rounded-lg'/>
          <h3 className='text-white font-lexend'>jny0444</h3>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <img src="https://avatars.githubusercontent.com/u/140409722?v=4" alt="" className='h-10 rounded-lg'/>
          <h3 className='text-white font-lexend'>skarwuu</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer