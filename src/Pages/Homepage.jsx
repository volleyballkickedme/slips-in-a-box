import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero.jsx'
import SlipStack from'../Components/SlipStack.jsx'
import Generate from '../Components/Generate.jsx'
import { doc, collection, onSnapshot, getDoc } from 'firebase/firestore'
import { auth, db } from '../Components/firebase.js'

const Homepage = () => {
  const [userUsername, setUserUsername] = useState("")
  const [locationsArray, setLocationsArray] = useState([])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(user);
      } else {
        console.log('no user authenticated');
      }
    });
  
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  //function to fetch user data
  const fetchUserData = async (user) =>  {
    //doc and collection return references to the respective data structures
    const userRef = doc(db, "Users", user.uid)
    const locationsRef = collection(userRef, "locations")
    
    fetchUserDataFromRef(userRef)
    subscribeToLocations(locationsRef)
  }

  //function to fetch user data from userRef
  const fetchUserDataFromRef = async (userRef) => {
    //getDoc returns a snapshot of the document data; getDocs returns an array of document snapshots
    const userSnap = await getDoc(userRef)
    try {
      if(userSnap.exists()) {
        //snapshot data is accessed with .data()
        const username = userSnap.data().username
        setUserUsername(username)
      } else {
        console.log("No such user profile exists")
      }
    } catch (error) {
      console.log("Error fetching user profile")
    }
  }

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
        type: locationDoc.data().type,
        id: locationDoc.id
      }
    })
  }
  
  return (
    <div>
        <>
          <Hero username={ userUsername } />
          <SlipStack locationsArray = { locationsArray }/>
          <Generate locationsArray = { locationsArray } poolSize={ locationsArray.length } />
        </>
    </div>
    
  )
}

export default Homepage