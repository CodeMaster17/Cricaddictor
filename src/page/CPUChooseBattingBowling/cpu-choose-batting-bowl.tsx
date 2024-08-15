import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { motion } from 'framer-motion';
const CpuChooseBattingBowl = () => {

  const [cpuChoice, setCpuChoice] = useState<string>("")

  useEffect(() => {

    const number = Math.floor(Math.random() * 2)
    if (number === 0) {
      setCpuChoice("bat")
    } else {
      setCpuChoice("bowl")
    }
  }, [])


  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 0.5 }} className="w-full h-screen flex justify-center items-start bg-zomato_red">
      <div className="w-4/5 h-4/5 flex flex-col justify-start mt-8 items-center">
        <p className="heading mt-8 text-center">CRICADDICTOR</p>
        <p className="text-white text-3xl">
          Opponet chose to {cpuChoice}
        </p>
        {cpuChoice === "bowl" ? <iframe src="https://lottie.host/embed/fa3054f2-272c-4b29-8fb4-8f8626f38e89/ppHxrjFRCA.json"></iframe> : <iframe src="https://lottie.host/embed/dd51ab08-c7e4-44ed-bc02-27e3a6838d19/7v6Ni88pbL.json"></iframe>}
        <div className='mt-4'>
          <Button variant="default" className='float-right text-3xl mt-2 bg-white text-zomato_red'>
            {
              (cpuChoice == 'bowl') ? <Link to="/game/1">Next</Link> : <Link to="/game/2">Next</Link>
            }
          </Button>
        </div>
      </div>
    </motion.div >
  )
}

export default CpuChooseBattingBowl
