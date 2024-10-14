//detailed slip, popup
import ReactDOM from "react-dom"
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

/*your popup window should take in 2 pops, a boolean state variable to check whether the popup is visible, 
and a function to toggle that state back to false when you close the popup*/
const SlipDetails = ({ name, type, id, expanded, closePopup}) => {
      /*if the state variable is false the popup should not be visible*/
      if(!expanded) return null;
      /*the ReactDOM.createPortal method takes in 2 arguments, 
          1. the element that is going to go through the portal
          2. the portal endpoint, which you have already defined in your HTML file and can be accessed with getElementById*/
        const handleDelete = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                  //obtain pointer
                  const userRef = doc(db, 'Users', user.uid);
          
                  //add task to locations subcollection
                  await deleteDoc(doc(userRef, "locations", id))
                }
              } catch (error) {
                console.error('Error: ', error);
              }
        }

        return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" onClick={closePopup}>
          {/*e.stopPropagation stops clicks on the slip window from closing it*/}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-gray-600 text-xl" onClick={closePopup}>
                    Close</button>
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <p>
                    Place: {name}
                </p>
                <p>
                    Activity type: {type}
                </p>
                <button className="bg-red-500 rounded-lg p-2 my-2 mx-0" onClick={handleDelete}>Delete</button>
            </div>
        </div>, document.getElementById("portal")
  )
}

export default SlipDetails