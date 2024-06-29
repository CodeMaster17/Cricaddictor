import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

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
    <div className="w-full h-screen flex justify-center items-start">
      <div className="border-2 w-4/5 h-4/5 flex flex-col justify-start mt-8 items-center">
        Opponet chose to {cpuChoice}
        <div>
          <Button variant="default" className='float-right'>
            {
              (cpuChoice == 'bowl') ? <Link to="/game/1">Next</Link> : <Link to="/game/2">Next</Link>
            }
          </Button>
        </div>
      </div>
    </div >
  )
}

export default CpuChooseBattingBowl
