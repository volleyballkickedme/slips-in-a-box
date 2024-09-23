import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../Components/firebase.js'

const Homepage = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null)
  //refresh state variable triggers a refreshing of the hompage whenever it is updated
  const [refresh, setRefresh] = useState(0)
  const refreshPage = () => {
    setRefresh(Math.random())
  }

  //include the refresh state variable in the dependency array
  useEffect(() => {
    const user = auth.currentUser
    if(user) {
      const fetchUserData = async () =>  {
        const docRef = doc(db, "Users", user.uid)
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