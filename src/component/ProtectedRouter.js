import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRouter({ children }) { 
  const isLoggedIn = useSelector(state => state.test.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/home" replace />;
  }
  return children;
}

export default ProtectedRouter;
