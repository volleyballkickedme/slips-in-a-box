//wrapper component for slips, slips are stored in firestore,
//and the slipstack will generate them every render by iterating through the entire array
import React from 'react'
import { useState } from 'react'
import SlipDetails from './SlipDetails'

const Slip = ({ name, type, id }) => {
    const [expanded, setExpanded] = useState(false)

    function expandSlip() {
        setExpanded((prevState) => !prevState)
    }
    
  return (
    <div onClick={ expandSlip } className='flex h-24 w-48 m-3 flex-wrap p-3 bg-gray-300 rounded-lg'>
        { name }
        {/*popup window component should take 2 arguments
        first argument is the state variable, to check whether the popup should be shown
        second argument is the function that is called when you toggle the close popup option*/}
        <SlipDetails name={ name } type={ type } id={ id } expanded={ expanded } closePopup={ expandSlip }/>
    </div>
  )
}

export default Slip