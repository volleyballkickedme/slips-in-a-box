import React from 'react'
import { useState } from 'react'

const Generate = () => {
  const[category, setCategory] = useState('Breakfast')
  const[generate, setGenerate] = useState('Breakfast')
  const[index, setIndex] = useState(0)
  const[output, setOutput] = useState('')

  const breakfastActive = category === 'Breakfast'
  const lunchActive = category === 'Lunch'
  const dinnerActive = category === 'Dinner'
  const othersActive = category === 'Others'

  //when you click the category bar you generate a filtered list of locations
  //when you click the generate button you lock that in. You need this 2 step process so that
  //the type doesnt change immediately when you click the category bar

  //function to generate random number
  function getRandomNumber(min, max) {
    // Ensure min is less than max
    if (min > max) {
      [min, max] = [max, min];
    }
  
    // Generate a random number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //function to i. generate a random number ii. lock in the output choice
  function handleClick() {
    setIndex(getRandomNumber(0, poolSize))
    setGenerate(category)
  }

  return (
    <section className='flex flex-col items-center justify-center'>
        {/*selector bar component that takes in 2 props, a state(currently selected), and the function to 
        change the state. Within the selector bar is 4 options, breakfast lunch dinner and others*/}
        <div className='flex bg-indigo-300 px-10 py-5 rounded-lg gap-5 m-2'>
          <button className={ breakfastActive ? 'bg-indigo-500 p-2 rounded-lg' : 'bg-indigo-300' } onClick={ () => setCategory('Breakfast') }>Breakfast</button>
          <button className={ lunchActive ? 'bg-indigo-500 p-2 rounded-lg' : 'bg-indigo-300' } onClick={ () => setCategory('Lunch') }>Lunch</button>
          <button className={ dinnerActive ? 'bg-indigo-500 p-2 rounded-lg' : 'bg-indigo-300' } onClick={ () => setCategory('Dinner') }>Dinner</button>
          <button className={ othersActive ? 'bg-indigo-500 p-2 rounded-lg' : 'bg-indigo-300' } onClick={ () => setCategory('Others')}>Others</button>
        </div>
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
            {/*make this a component that takes in one prop, which is a state variable representing the type 
            of activity. Use that to determine which index of the array you are going to generate from */} 
        </div>
    </section>
  )
}

export default Generate