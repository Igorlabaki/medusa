'use client'
import {delay, motion} from "framer-motion"

interface AnimetedTextProps{
    text: string;
    className: string;
    animation: boolean;
    delay?: number
}

export  function AnimatedSubTitleComponent({text,delay, className}:AnimetedTextProps) {
    const words = text.split("")

    const defaultAnimations = {
        hidden:{
            opacity: 0,
            y:40,
        },
        visible:{
            opacity: 1,
            y:0, 
        }
    }

  return (
    <motion.div className={className} transition={{staggerChildren: 0.005}}  initial={"hidden"} animate={"visible"} >
        {
            words.map((word:string, index:number) => {
                return(
                    <motion.span
                    aria-hidden
                    key={index}
                    variants={defaultAnimations} // Use a variação padrão para cada palavra
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.019 + (delay ? delay : 0) }} // Aplique um atraso escalonado com base no índice da palavra
                  >
                    {word}
                  </motion.span>
                )
            })
        }
    </motion.div>
  )
}
