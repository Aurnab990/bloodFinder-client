import React, { useContext } from 'react';
import '../Navbar/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();

    if (user) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully");
        })
        .catch((error) => {
          // An error happened.
          console.error("Sign out error:", error);
        });
    }
  };

  return (
    <div className='main-section'>
      <div className='logo-container'>
        <p>BloodLifeFinder</p>
      </div>
      <div className='nav-container'>
        <Link to={"/"}><a>Home</a></Link>
        <Link to={"/bloodfinder"}><a>Find-Blood</a></Link>
        <a>Contact</a>
        {user ? <Link to={"/addinfo"}><a>Be A Donor</a></Link>:<p></p>}
        {user ? <Link onClick={handleLogout}><a>LOGOUT</a></Link> : <Link to={"/login"}><a>LOGIN</a></Link>}
      </div>
    </div>
  );
};

export default Navbar;
