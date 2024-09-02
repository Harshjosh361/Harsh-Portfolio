import React from 'react'
import {motion} from "framer-motion"

function Skills() {
  const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
  })
  return (
   

    <div className='border-b border-gray-800 flex flex-col justify-center items-center pb-24'id="skills">    
        <h1 className='text-white font-bold text-5xl my-20'>Skills</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 mx-10  ">
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={200} width={200}/>
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4 '>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4 '>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4 '>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4 '>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4 '>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            </motion.div>
            <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className='border-4 border-gray-600 rounded-2xl p-4'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            </motion.div>
        </div>
    </div>
  )
}

export default Skills
