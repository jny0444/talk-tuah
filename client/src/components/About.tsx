import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <div className='relative'>
      <Spline scene="https://prod.spline.design/Tu37aCxLmALVRj-t/scene.splinecode" className='absolute -z-10'/>
      <div className='absolute -z-10 bg-white w-36 h-10 bottom-4 right-4 rounded-xl'></div>
      <div className="flex flex-col items-center gap-8 py-20 px-10 p-5 rounded-xl md:px-20 lg:px-36 xl:gap-16 xl:px-52 xl:py-40">
        <h3 className="font-lexend text-4xl xl:text-5xl backdrop-blur-md bg-neutral-50/20 px-4 py-2 rounded-2xl">About</h3>
        <p className="font-lexend text-justify md:text-lg lg:text-xl xl:text-2xl backdrop-blur-[5px] bg-neutral-50/10 p-6 rounded-2xl">Talk Twoah is a decentralized, blockchain-powered forum inspired by 4chan’s freeform, anonymous style of discussion, but with enhanced privacy and security. Every post, comment, and interaction is permanently stored on the blockchain, giving users full control and ensuring content cannot be altered or removed. Unlike traditional platforms, Talk Twoah operates without a central authority, allowing for open, uncensored conversations in real time. Whether sharing memes, discussing niche topics, or diving into serious debates, Talk Twoah combines the unfiltered nature of 4chan with the transparency and trust of blockchain technology. Join us in redefining online discourse where every voice matters and content is protected.</p>
      </div>
    </div>

  )
}
export default About
