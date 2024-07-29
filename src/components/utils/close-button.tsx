import { motion } from "framer-motion"

export default function CloseButton() {
  return (
    <div className='flex flex-col absolute right-4 top-2'>
        <div className='relative p-2'>
            <motion.div  
                animate={{rotate:-45}}
                transition={{duration:0.25, delay:0.5}}
                className='h-[0.085rem] w-[1.2rem] bg-white absolute'
            />
            <motion.div  
                animate={{rotate:45}}
                transition={{duration:0.25, delay:0.5}}
                className='h-[0.085rem] w-[1.2rem] bg-white absolute'
            />
        </div>
    </div>
  )
}
