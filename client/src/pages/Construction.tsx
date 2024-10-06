import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Construction = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <img src="../src/assets/machine.png" alt="contruction-machine" className='max-sm:h-52'/>
        <div className="flex flex-col gap-6 text-white bg-black font-mono font-bold text-2xl p-6 text-center rounded-2xl hover:scale-110 duration-300 ease-in-out max-sm:scale-75">
          <p>Website Under Construction</p>
          <a href="https://github.com/jny0444/talk-tuah" className="hover:underline text-xl">Visit Repository <FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
  )
}

export default Construction