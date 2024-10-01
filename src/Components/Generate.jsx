import React from 'react'
import { useState } from 'react'

const Generate = ( { locationsArray }) => {
  const[output, setOutput] = useState('')
  const[index, setIndex] = useState(0)
  const poolSize = locationsArray.length 

  //function to generate random number
  function getRandomNumber(min, max) {  
    // Generate a random number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //function to i. generate a random number ii. lock in the output choice
  function handleClick() {
    setIndex(getRandomNumber(0, poolSize))
    setOutput(locationsArray[index].name)
  }

  return (
    <section className='flex flex-col items-center justify-center'>
        <div className='flex gap-5 bg-indigo-200 px-10 py-2 px-24 rounded-lg'>
          <div className='flex flex-col gap-3'>
            <button className='bg-blue-100 px-2 py-1 rounded-lg'
              onClick={handleClick}>Generate</button>
            <button className='bg-blue-300 px-2 py-1 rounded-lg'
            onClick={() => setOutput('')}>Clear</button>
          </div>
          
          <div className='flex flex-col justify-center align-center'>
            <div className='flex bg-blue-400 p-5 rounded-md'>
              { output }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Generate