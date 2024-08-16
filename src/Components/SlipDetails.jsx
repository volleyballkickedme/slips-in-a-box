//detailed slip, popup
import ReactDOM from "react-dom"
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../Components/firebase';

/*your popup window should take in 2 pops, a boolean state variable to check whether the popup is visible, 
and a function to toggle that state back to false when you close the popup*/
const SlipDetails = ({ expanded, closePopup, name, type, refreshFunction}) => {
    /*if the state variable is false the popup should not be visible*/
    if(!expanded) return null;
    /*the ReactDOM.createPortal method takes in 2 arguments, 
        1. the element that is going to go through the portal
        2. the portal endpoint, which you have already defined in your HTML file and can be accessed with getElementById*/
        const [locations, setLocations] = useState([]);
      
        useEffect(() => {
          const fetchUserLocations = async () => {
            try {
              const user = auth.currentUser;
              if (user) {
                const userRef = doc(db, 'Users', user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                  setLocations(userSnap.data().locations || []);
                } else {
                  console.log('No such document!');
                }
              }
            } catch (error) {
              console.error('Error fetching user data: ', error);
            }
          };
      
          fetchUserLocations();
        }, []);
        
        const handleDelete = async (event) => {
          //prevents page from refreshing
          event.preventDefault();
          try {
            const user = auth.currentUser;
            if (user) {
              //obtain pointer
              const userRef = doc(db, 'Users', user.uid);

              //create a new array and updatedLocations and copies over the content from the original array with ...locations, then appends newLocation
              const updatedLocations = locations.filter((x) => x.type != type && x.name != name)
              //update the locations field with the new array
              await updateDoc(userRef, {
                //the reason you cannot use locations.push is because push returns the length of the new array and not the array itself, instead it is better to use the method above
                locations: updatedLocations,
              });
              closePopup()
            }
          } catch (error) {
            console.error('Error updating document: ', error);
          }

          refreshFunction()
        };
    
        return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" onClick={closePopup}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-gray-600 text-xl" onClick={closePopup}>
                    Close</button>
                <h2 className="text-xl font-semibold mb-4">Location name</h2>
                <p>
                    Location: {name}
                </p>
                <p>
                    Activity type: {type}
                </p>
                <button className='bg-red-300 py-1 px-2 rounded-lg mt-2 text-sm' onClick={handleDelete}>Remove</button>
            </div>
        </div>, document.getElementById("portal")
  )
}

export default SlipDetails