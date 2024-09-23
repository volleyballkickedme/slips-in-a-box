import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'
import { doc, getDocs, collection } from 'firebase/firestore'
import { auth, db } from '../Components/firebase.js'

const Homepage = () => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const user = auth.currentUser
    if(user) {
      const fetchUserData = async () =>  {
        const userRef = doc(db, "Users", user.uid)
        const locations = await getDocs(collection(userRef, "locations"))
        locations.forEach((location) => {
          console.log(location.id, "=", location.data().location)
        })
      }
      fetchUserData()
    }
    else {
      console.log('no user authenticated')
    }
  }, [])

  return (
    <div>
      { userDetails ?
        <>
          <Hero username={ userDetails.username } />
          <SlipStack />
          <Generate />
        </> :
        <p>Loading...</p>
      }
    </div>
    
  )
}

export default Homepage