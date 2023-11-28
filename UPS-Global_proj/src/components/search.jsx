import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataBase } from '../lib/firebase';
import { doc, getDoc } from "firebase/firestore";

function SearchBox() {

    const [userValue, setUserValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleInput = (e) => {
      const newValue = e.target.value;
      setUserValue(newValue);
    };
  
    const handleSearch = async () => {
      if (userValue === '') {
        setErrorMessage('Please enter information before tracking.');
      } else {
        setErrorMessage('');
        setLoading(true);
        // Change the button text to "Tracking...
        // You can also perform any additional actions here
      }
      try {
        const docRef = doc(dataBase, "products", userValue.trim());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          navigate(`/tracking/${userValue}`);
          //reload window after navigaton
          window.location.reload();
        } else {
          navigate("/dashboard");
        }
        setLoading(true);
      } catch (error) {
        console.log("Error searching document:", error);
      }
    };

    return (
        <div className='w-full'>
            <div className="flex gap-x-3 sm:gap-x-6 p-4 sm:p-0" id="tracking">
              <input
                type="text"
                value={userValue}
                onChange={handleInput}
                className="w-full rounded-lg outline-none border-2 border-[#848185] pl-2 h-12"
                placeholder="Track Shipment"
              />
              <button
                disabled={loading}
                onClick={handleSearch}
                className="bg-[#ED7D1A] px-7 sm:px-16 h-12 rounded-lg text-white"
              >
                {loading ? "Tracking...." : "Track"}
              </button>
            </div>
              {errorMessage && (
                  <p className="text-[#ED7D1A] mt-2">{errorMessage}</p>
              )}
        </div>
    )
}

export default SearchBox
