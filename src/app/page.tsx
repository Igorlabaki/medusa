"use client"

import Carroucel from "@/components/carroucel";
import { AnimatedSubTitleComponent } from "@/components/utils/animatedText";
import AnimatedVerticalComponent from "@/components/utils/animatedVertical";
import { motion } from "framer-motion";
import { Archivo_Black } from "next/font/google";
import { Permanent_Marker } from "next/font/google";
import { Montserrat } from "next/font/google";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight:["400"] });
const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight:["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight:["400"] });

export default function Home() {

  return (
    <main className="min-h-screen max-w-screen max-w-screen bg-white">
      <Carroucel />
      <div className="py-10 text-black bg-[#F5F5F5]">
        <motion.h1 initial={{opacity: 0, y: "100px"}} animate={{opacity: 1, y: 0}}  transition={{duration: 0.8}} className={`text-center text-2xl ${archivoBlack.className}`}>MEDUSA ESPORTES</motion.h1>
        <AnimatedSubTitleComponent animation delay={0.8} text="Transformando Competições em Grandes Eventos" className={`text-center font-light text-sm ${permanentMarker.className}`}/>
        <AnimatedVerticalComponent>
          <p className={`text-center px-5 mt-8 text-[1.1rem] ${montserrat.className} leading-8`}>
          Somos sua parceira ideal na organização de eventos esportivos e arbitragem. Com expertise e paixão, garantimos competições justas e inesquecíveis, cuidando de cada detalhe para que atletas e espectadores vivenciem momentos únicos. Seja em campeonatos, torneios ou jogos amistosos, nossa equipe qualificada está pronta para proporcionar uma experiência esportiva de alto nível e profissionalismo.
          </p>
        </AnimatedVerticalComponent>
      </div>
    </main>  
  );
}
