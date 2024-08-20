import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Components/firebase.js'

const Homepage = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null)
  const [currentUser, setCurrentUser] = useState(user)
  //refresh state variable triggers a refreshing of the hompage whenever it is updated
  const [refresh, setRefresh] = useState(0)
  const refreshPage = () => {
    setRefresh(Math.random())
  }

  //include the refresh state variable in the dependency array
  useEffect(() => {
    setCurrentUser(user)
    if(currentUser) {
      const fetchUserData = async () =>  {
        const docRef = doc(db, "Users", currentUser.uid)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) {
          setUserDetails(docSnap.data())
        }
        else {
          console.log("User is not logged in")
        }
      }
      fetchUserData()
    }
    else {
      console.log('no user authenticated')
    }
  }, [refresh])

  /*array of size 4, with indices mapped as follows
  0: bfast
  1: lunch
  2: dinner
  3: others */

  //pass in this array to slipstack component
  //pass in the function to update the refresh state variable into the child component so that the child can trigger the refresh
  return (
    <div>
      { userDetails ?
        <>
          <Hero username={ userDetails.username } />
          <SlipStack locationsArr={userDetails.locations} refreshVariable = { refresh } refreshFunction = { refreshPage }/>
          <Generate locations={userDetails.locations} />
        </> :
        <p>Loading...</p>
      }
    </div>
    
  )
}

export default Homepage