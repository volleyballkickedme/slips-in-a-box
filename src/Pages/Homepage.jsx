import React from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'

const Homepage = () => {
  /*array of size 4, with indices mapped as follows
  0: bfast
  1: lunch
  2: dinner
  3: others */

  //pass in this array to slipstack component
  
  return (
    <>
        <Hero />
        <SlipStack />
        <Generate />
    </>
  )
}

export default Homepage