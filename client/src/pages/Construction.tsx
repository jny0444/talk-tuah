import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Construction = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen gap-5 max-sm:gap-0">
        <img src="../src/assets/machine.svg" alt="contruction-machine" className='scale-90 max-sm:scale-75'/>
        <div className="flex flex-col gap-6 text-white bg-black font-mono font-bold text-2xl p-6 text-center rounded-2xl hover:scale-110 duration-300 ease-in-out max-sm:scale-75 max-sm:hover:scale-80">
          <p>Website Under Construction</p>
          <a href="https://github.com/jny0444/talk-tuah" className="hover:underline text-xl">Visit Repository <FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
  )
}

export default Construction