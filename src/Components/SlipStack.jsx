//display for all the slips
//Collection of users, users have a collection of activity types, and each activity type is a document
//with all the relevant locations

import React from 'react'
import Slip from './Slip.jsx'

//slipstack receives an array prop that contains all the 4 arrays of differing types
//render all locations in the display, but eventually make it so that u generate a few from each one only to reduce rendering time
const SlipStack = () => {
  return (
    <section className='container'>
      <div className='flex h-64 m-10 flex-wrap overflow-auto bg-gray-100 rounded-md'>
        <Slip>{'Slip 1'}</Slip>
        <Slip>{'Slip 2'}</Slip>
        <Slip>{'Slip 3'}</Slip>
        <Slip>{'Slip 4'}</Slip>
        <Slip>{'Slip 5'}</Slip>
        <Slip>{'Slip 6'}</Slip>
      </div>
    </section>
  )
}

export default SlipStack