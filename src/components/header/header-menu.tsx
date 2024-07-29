"use client"

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ModalComponent } from '../utils/modal'
import { motion } from 'framer-motion'
import CloseButton from '../utils/close-button'
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function HeaderMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleCloseMenu() {
    setIsModalOpen(false)
  }

  function handleOpenMenu() {
    setIsModalOpen(true)
  }

  return (
    <div>
      <motion.div initial={{opacity: 0, x: "50px"}} animate={{opacity: 1, x: 0}}  transition={{duration: 0.3}}>
       <RxHamburgerMenu size={25} onClick={handleOpenMenu} onTouchStart={handleOpenMenu}/>
      </motion.div>
      {
        isModalOpen &&
          <ModalComponent onClose={handleCloseMenu} styleInternal='right-0  w-[70%]'>
            <motion.div 
              initial={{ translateX: "100%"}} 
              animate={{ translateX: "0%"}}  
              transition={{duration: 0.3}}
              className='bg-black border-l-[0.085rem] border-slate-400  text-slate-400 h-full min-h-screen w-full relative gap-2 py-24 flex flex-col justify-between'
            >  
              <CloseButton/>
                <div className='flex flex-col justify-between h-full items-center w-full text-sm'>
                  <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{duration: 0.3, delay: 0.3}}  className=' py-4 w-[90%]'>QUEM SOMOS</motion.p>
                  <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{duration: 0.3, delay: 0.3}}  className='border-slate-400 border-t-[0.085rem] py-4 w-[90%]'>EVENTOS</motion.p>
                  <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{duration: 0.3, delay: 0.3}}  className='border-slate-400 border-t-[0.085rem] py-4 w-[90%]'>FAQ</motion.p>
                  <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{duration: 0.3, delay: 0.3}}  className='border-slate-400 border-t-[0.085rem] py-4 w-[90%]'>CONTATO</motion.p>
                </div>
                <div className='mt-5 flex justify-center items-center w-full gap-5'>
                  <PiFacebookLogoBold size={37} className='text-white'/>
                  <FaInstagram size={35} className='text-white rounded-md'/>
                  <FaWhatsapp size={35} className='text-white rounded-md'/>
                </div>
            </motion.div>
          </ModalComponent>
       }
    </div>
  )
}


