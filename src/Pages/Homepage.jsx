import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'
import { doc, getDocs, collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../Components/firebase.js'

const Homepage = () => {
  const [userUsername, setUserUsername] = useState("")
  const [locationsArray, setLocationsArray] = useState([])

  useEffect(() => {
    const user = auth.currentUser
    if(user) {
      setUserUsername(user.username)
      const fetchUserData = async () =>  {
        const userRef = doc(db, "Users", user.uid)
        const locationsRef = collection(userRef, "locations")
        
        subscribeToLocations(locationsRef)
      }
      fetchUserData()
    }
    else {
      console.log('no user authenticated')
    }
  }, [])

  //function to watch for location snapshot updated
  const subscribeToLocations = (locationsRef) => {
    //onSnapshot passes the most updated snapshot to the function, which is then called everytime a snapshot is updated
    const unsubscribe = onSnapshot(locationsRef, handleLocationsUpdate)

    //close the listener when component unmounts
    return () => unsubscribe()
  }

  //function to update array of locations whenever snapshot is updated
  const handleLocationsUpdate = (locationsSnapshot) => {
    const locationsArray = extractLocationsFromSnapshot(locationsSnapshot)
    setLocationsArray(locationsArray)
  }

  //function to extract an array of locations from the subcollection fetched from firebase
  const extractLocationsFromSnapshot = (snapshot) => {
    return snapshot.docs.map((locationDoc) => {
      return {
        name: locationDoc.data().location,
        type: locationDoc.data().type
      }
    })
  }
  
  return (
    <div>
        <>
          <Hero username={ userUsername } />
          <SlipStack locationsArray = { locationsArray }/>
          <Generate />
        </>
    </div>
    
  )
}

export default Homepage