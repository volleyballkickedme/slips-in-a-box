import React from 'react'
import { useState } from 'react'

const Generate = () => {
  const[category, setCategory] = useState(null)
  return (
    <section className='flex flex-col h-20 items-center justify-center'>
        {/*selector bar component that takes in 2 props, a state(currently selected), and the function to 
        change the state. Within the selector bar is 4 options, breakfast lunch dinner and others*/}
        <div className='flex bg-indigo-300 px-10 py-5 rounded-lg gap-5 mb-5'>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Others</button>
        </div>
        <div>
            {/*make this a component that takes in one prop, which is a state variable representing the type 
            of activity. Use that to determine which index of the array you are going to generate from */}
            <button className='bg-blue-100 px-2 py-1 rounded-lg'>Generate</button>
        </div>
    </section>
  )
}

export default Generate