import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth'; 
import { auth } from '../firebase'; 

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle error if needed
    }
  };

  return (
    <div className='navbar'>
      <div className="user">
        <img src={currentUser.photoURL} alt="User Photo" />
        <span>{currentUser.displayName}</span>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
