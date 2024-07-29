"use client"

import { motion } from 'framer-motion'
import { ImageComponent } from '../utils/image'
import {HeaderMenu} from './header-menu'

export default function Header() {
  return (
    <header className="py-10 px-4 bg-white flex justify-between items-center">
      <motion.div initial={{opacity: 0, x: "-50px"}} animate={{opacity: 1, x: 0}}  transition={{duration: 0.3}}>
        <ImageComponent 
            h="h-[2rem]" 
            w="w-[5.6rem]"
            alt="Medusa Esportes"
            containerClassname="rounded-sm overflow-hidden" 
            src="https://res.cloudinary.com/dcjkvwbvh/image/upload/v1721932125/xtcjvki7tswvd6ruenvt.png"
        />
      </motion.div>
       <HeaderMenu/>
    </header>
  )
}
