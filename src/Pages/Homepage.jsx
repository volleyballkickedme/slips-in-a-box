import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'
import { doc, getDoc } from 'firebase/firestore'
import { auth } from '../Components/firebase.js'
import { db } from '../Components/firebase.js'

const Homepage = () => {
  const [userDetails, setUserDetails] = useState(null)
  const fetchUserData = async () =>  {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()) {
        setUserDetails(docSnap.data())
      }
      else {
        console.log("User is not logged in")
      }
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  /*array of size 4, with indices mapped as follows
  0: bfast
  1: lunch
  2: dinner
  3: others */

  //pass in this array to slipstack component
  
  return (
    <div>
      { userDetails ?
        <>
          <Hero username={ userDetails.username } />
          <SlipStack locationsArr={userDetails.locations} />
          <Generate locations={userDetails.locations} />
        </> :
        <p>Loading...</p>
      }
    </div>
    
  )
}

export default Homepage