import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import CustomScrollbar from './Components/CustomScrollbar';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import Navbar from './Components/Navbar.jsx'; 
import Oracle from './Pages/Oracle.jsx';

export default function App() {
  const [user, setUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsChecking(false);
    });
    return () => unsubscribe();
  }, []);

  // 1. LOADING STATE
  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-[#ee8c31]/20 border-t-[#ee8c31] rounded-full animate-spin"></div>
      </div>
    );
  }

  // 2. LAYOUT WRAPPER (Ye sirf logged-in pages par dark theme aur scrollbar apply karega)
  const ProtectedLayout = ({ children }) => {
    return (
      <div className='min-h-screen relative bg-[#0a0a0f] text-white overflow-hidden'> 
        <div className="absolute top-0 w-full z-50"><Navbar /></div>
        
        <div className="relative z-10 w-full">
          {children} {/* Yahan aapka Homepage ya Profile render hoga */}
        </div>
        
        <CustomScrollbar />
      </div>
    );
  };

  return (
    <Routes>
      <Route 
        path="/login" 
        element={!user ? <Login /> : <Navigate to="/" />} 
      />

      <Route 
        path="/" 
        element={
          user ? (
            <ProtectedLayout>
              <Homepage />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } 
      />

      <Route 
        path="/profile" 
        element={
          user ? (
            <ProtectedLayout>
              <Profile />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } 
      />

      <Route 
        path="/oracle" 
        element={
          user ? (
            <ProtectedLayout>
              <Oracle />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } 
      />

    </Routes>
  );
}