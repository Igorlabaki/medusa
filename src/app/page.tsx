"use client"

import Carroucel from "@/components/carroucel";
import { AnimatedSubTitleComponent } from "@/components/utils/animatedText";
import { motion } from "framer-motion";
import { Archivo_Black } from "next/font/google";
import { Permanent_Marker } from "next/font/google";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight:["400"] });
const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight:["400"] });

export default function Home() {

  return (
    <main className="min-h-screen max-w-screen max-w-screen bg-white">
      <Carroucel />
      <div className="py-10 text-black ">
        <motion.h1 initial={{opacity: 0, y: "100px"}} animate={{opacity: 1, y: 0}}  transition={{duration: 0.8}} className={`text-center text-2xl ${archivoBlack.className}`}>MEDUSA ESPORTES</motion.h1>
        <AnimatedSubTitleComponent animation delay={0.8} text="Transformando Competições em Grandes Eventos" className={`text-center font-light text-sm ${permanentMarker.className}`}/>
      </div>
    </main>  
  );
}
