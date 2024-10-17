const About = () => {
  return (
    <div className="flex flex-row bg-black gap-28 max-[990px]:gap-16 px-20 py-16 mx-[10vw] max-[1300px]:mx-[6vw] max-[1380px]:mx-[2vw] max-[1200px]:mx-[-4vw] rounded-3xl items-center max-[1400px]:scale-90 max-[1200px]:scale-75 max-[990px]:flex-col">
      <div className="flex flex-col gap-10 max-[990px]:items-center">
        <div className="text-white font-lexend text-6xl">About</div>
        <img src="https://raw.githubusercontent.com/jny0444/talk-tuah/refs/heads/main/client/src/assets/TalkLogo.jpg" alt="Tawk Twoah" className="rounded-2xl invert min-w-max max-[990px]:"/>
      </div>
      <h3 className="text-white text-xl font-lexend text-justify mx-[4vw] max-[1400px]:text-md max-[745px]:mx-[-2vw] max-[475px]:mx-[-6vw] max-[400px]:mx-[-10vw]">
        Talk Twoah is a decentralized, blockchain-powered forum inspired by 4chan’s freeform, anonymous style of discussion, but with enhanced privacy and security. Every post, comment, and interaction is permanently stored on the blockchain, giving users full control and ensuring content cannot be altered or removed. Unlike traditional platforms, Talk Twoah operates without a central authority, allowing for open, uncensored conversations in real time. Whether sharing memes, discussing niche topics, or diving into serious debates, Talk Twoah combines the unfiltered nature of 4chan with the transparency and trust of blockchain technology. Join us in redefining online discourse where every voice matters and content is protected.
      </h3>
    </div>
  )
}

export default About