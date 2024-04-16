import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut().then(result => {
      toast.success('Logout Successful')
    }).catch(error => {
          toast.error('Something Wrong')
    })
  }
  return (
    <div className="my-container">
     
      <div className="navbar bg-base-300 flex justify-between">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <div className="flex space-x-7 font-bold">
        <Link to='/'>Home</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogOut} className="btn">Log Out </button>
          </> : <Link to='/login'  className="btn">Login</Link>
        }
        </div>
      </div>
     
    </div>
  );
};

export default Header;
