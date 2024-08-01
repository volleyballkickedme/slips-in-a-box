//page that pops up when you click on the add slips
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../Components/firebase';
import { useNavigate } from 'react-router-dom';

const AddSlipsPage = () => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
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
  
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    //prevents page from refreshing
    event.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        //obtain pointer
        const userRef = doc(db, 'Users', user.uid);
        //create new object
        const newLocation = {
          name: location,
          type: type,
        };
        //create a new array and updatedLocations and copies over the content from the original array with ...locations, then appends newLocation
        const updatedLocations = [...locations, newLocation];
        //update the locations field with the new array
        await updateDoc(userRef, {
          //the reason you cannot use locations.push is because push returns the length of the new array and not the array itself, instead it is better to use the method above
          locations: updatedLocations,
        });
        navigate('/')
      }
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className='flex h-screen w-full bg-white-400 align-center justify-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-container flex flex-col h-3/4 w-35/6 mt-5 rounded-lg align-center justify-center gap-10 p-20 bg-gray-200'>
            <div className='location input'>
              <label>Location Name: </label>
              <input
                required
                type='text'
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>
            <div className='activity type'>
              <label>Activity Type: </label>
              <select
                required
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value='' disabled>
                  Select an activity type
                </option>
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Others'>Others</option>
              </select>
            </div>
            <button type='submit' className='p-3 w-1/4 rounded-lg bg-gray-400'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddSlipsPage;
