import React from 'react'

const Generate = () => {
  return (
    <section className='flex h-20 items-center justify-center'>
        {/*selector bar component that takes in 2 props, a state(currently selected), and the function to 
        change the state. Within the selector bar is 4 options, breakfast lunch dinner and others*/}
        <div>
            {/*make this a component that takes in one prop, which is a state variable representing the type 
            of activity. Use that to determine which index of the array you are going to generate from */}
            <button className='bg-blue-100 px-2 py-1 rounded-lg'>Generate</button>
        </div>
    </section>
  )
}

export default Generate