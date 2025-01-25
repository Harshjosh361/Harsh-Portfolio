import {motion} from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
      x:0,
      opacity:1,
      transition:{duration:0.5,delay:delay}
    }
  });

  const buttonVariants = {
    initial: { 
      opacity: 0 
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.3
      }
    },
    hover: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 8 }
    },
    tap: { scale: 0.95 }
  };

  const glowVariants = {
    initial: { x: "-100%" },
    animate: { 
      x: "100%",
      transition: {
        delay: 1.8,
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      x: ["-100%", "100%"],
      transition: {
        duration: 1.5,
        ease: "easeOut",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="backdrop-brightness-80" id="home">
      <div className="h-screen p-20 flex flex-col justify-center items-center text-white">
        <div className='flex flex-col justify-center md:items-center mt-10'>
          <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold py-4">
            Hi, I&apos;m Harsh!
          </motion.h1>
          <motion.h1 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold py-4">
            I&apos;m a 
          </motion.h1> 
          <motion.h1  
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className='text-6xl font-bold py-4 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text tracking-tight text-transparent'>
            Full Stack Developer
          </motion.h1>
        </div>
        <div className='mt-5 flex gap-5 justify-center items-center'>
        <a href="https://www.linkedin.com/in/harshjosh361/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
</a>
          <a href="https://github.com/Harshjosh361">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="50" height="50" fill="white">
    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
  </svg>
</a>
          <a href="https://www.instagram.com/_harsh361/?hl=en">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="55" width="55" fill="white">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
</a>
        </div>
        <motion.div
          className="relative mt-8 rounded-full overflow-hidden w-64"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.a
            href="mailto:harshjosh361@gmail.com"
            className="block w-full px-12 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#2E1065] via-[#7E22CE] to-[#C026D3] relative text-center"
          >
            Hire Me
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

