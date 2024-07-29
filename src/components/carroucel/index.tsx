"use client"

import { motion } from "framer-motion"
import { ImageComponent } from "../utils/image"

export default function Carroucel() {
    const fotos = [
        {src :"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1722107700/uxi06g46xqe3lzossqvl.jpg"},
        {src :"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1722107693/g2xmhpcm36fkczoxqjxc.jpg"},
        {src :"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1722107684/itxcgw9xjmlf7e4gpura.jpg"},
    ]

    return (
        <div className=' overflow-hidden'>
            <motion.div animate={{translateX: "-100%"}} transition={{duration: 0.4, delay: 1}}  className="flex w-full">
            {
                fotos.map((foto: {src: string}, index: number) => {
                    return (
                    <ImageComponent key={index} alt="foto" h="h-[28rem]" w="min-w-full" src={foto.src}/>
                    )
                })
            }
            </motion.div>
        </div>
  )
}
