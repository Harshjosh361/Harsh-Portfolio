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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="200" height="200">
  <path fill="white" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/>
</svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="200" height="200" fill="white" >
  <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
</svg>
            </motion.div>
        </div>
    </div>
  )
}

export default Skills
