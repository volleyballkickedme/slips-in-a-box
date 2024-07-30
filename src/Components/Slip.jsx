//wrapper component for slips, slips are stored in firestore,
//and the slipstack will generate them every render by iterating through the entire array
import React from 'react'
import { useState } from 'react'
import SlipDetails from './SlipDetails'

const Slip = ( { children }) => {
    const [expanded, setExpanded] = useState(false)

    function expandSlip() {
        setExpanded((state) => !state)
    }
  return (
    <div onClick={ expandSlip } className='flex w-20 h-15 m-3 flex-wrap p-3 bg-gray-300 rounded-lg'>
        { children }
        {/*popup window component should take 2 arguments
        first argument is the state variable, to check whether the popup should be shown
        second argument is the function that is called when you toggle the close popup option*/}
        <SlipDetails expanded={ expanded } closePopup={ expandSlip } />
    </div>
  )
}

export default Slip