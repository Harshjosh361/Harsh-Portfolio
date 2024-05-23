import React from 'react';
import {motion} from "framer-motion";


const Hero = () => {

  const container = (delay)=> ({
    hidden :{x:-100 , opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5,delay:delay}
    }
  })

  return (
    <div className="backdrop-brightness-80 border-b border-gray-900 pb-24" id="home">
    <div className="h-screen  p-20 flex flex-col justify-center items-center text-white">
        <div className='flex flex-col justify-center md:items-center mt-10'>
        <motion.h1 
         variants={container(0)}
         initial="hidden"
         animate="visible"
        className="text-6xl font-bold py-4 ">Hi, I'm Harsh!</motion.h1>
        <motion.h1 
         variants={container(0.5)}
         initial="hidden"
         animate="visible"
        className="text-6xl font-bold py-4">I'm a </motion.h1> 
        <motion.h1
         variants={container(1)}
         initial="hidden"
         animate="visible" 
         className='text-6xl font-bold py-4 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text tracking-tight text-transparent'>Full Stack Developer</motion.h1>
        </div>
        <div className='mt-5 flex gap-5 justify-center items-center'>
            <a href="https://www.linkedin.com/in/harsh-joshi-joshi-82b83530b/">    
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" width={50} height={50}/>
            </a>
            <a href="https://github.com/Harshjosh361">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height={50} width={50} />
            </a>
            <a href="https://www.instagram.com/_harsh361/?hl=en" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="55" width="55" ><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"  /></svg>
            </a>
        </div>
    </div>
    </div>
  );
};

export default Hero;
