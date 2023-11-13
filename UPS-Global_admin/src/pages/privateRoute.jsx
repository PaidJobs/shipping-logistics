import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Import your authentication context or function

const PrivateRoute = () => {
  const { currentUser } = auth; // Use your authentication context or function to get the current user
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      // If the user is not authenticated, navigate to the sign-in page
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <Outlet />
  );
};

export default PrivateRoute;
