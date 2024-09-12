import React from 'react'
import {motion} from "framer-motion"

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20 text-white border-t-2' id="contact">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}

        className='my-10 text-center text-4xl font-bold'> Get in Touch</motion.h1>
        <div className='text-center tracking-tighter '>
            <motion.a
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            href="mailto:harshjosh361@gmail.com" className='border-b text-xl'>harshjosh361@gmail.com</motion.a>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className='my-4 text-2xl font-sans'>Bengaluru , India</motion.p>
        </div>
    </div>
  )
} 

export default Contact
