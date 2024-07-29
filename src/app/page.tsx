"use client"
import { ImageComponent } from "@/components/utils/image";
import { motion } from "framer-motion";

export default function Home() {
  const fotos = [
    {src :"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1722107700/uxi06g46xqe3lzossqvl.jpg"},
    {src :"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1722107693/g2xmhpcm36fkczoxqjxc.jpg"},
    {src :"https://res.cloudinary.com/dcjkvwbvh/image/upload/v1722107684/itxcgw9xjmlf7e4gpura.jpg"},
  ]
  return (
    <main className="min-h-screen max-w-screen max-w-screen bg-black overflow-hidden">
      <motion.div animate={{translateX: "-100%"}} transition={{duration: 0.4, delay: 1}}  className="flex w-full">
        {
          fotos.map((foto: {src: string}, index: number) => {
            return (
              <ImageComponent key={index} alt="foto" h="h-[20rem]" w="min-w-full" src={foto.src}/>
            )
          })
        }
      </motion.div>
    </main> 
  );
}
