//detailed slip, popup
import React from 'react'
import ReactDOM from "react-dom"

/*your popup window should take in 2 pops, a boolean state variable to check whether the popup is visible, 
and a function to toggle that state back to false when you close the popup*/
const SlipDetails = ({ expanded, closePopup }) => {
    /*if the state variable is false the popup should not be visible*/
    if(!expanded) return null;
    /*the ReactDOM.createPortal method takes in 2 arguments, 
        1. the element that is going to go through the portal
        2. the portal endpoint, which you have already defined in your HTML file and can be accessed with getElementById*/
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <button className="absolute top-2 right-2 text-gray-600 text-xl">Close</button>
                <h2 className="text-xl font-semibold mb-4">Location name</h2>
                <p>
                    Location:
                </p>
                <p>
                    Activity type: 
                </p>
            </div>
        </div>, document.getElementById("portal")
  )
}

export default SlipDetails