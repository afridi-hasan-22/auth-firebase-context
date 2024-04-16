import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-container">
     
      <div className="navbar bg-base-300 flex justify-between">
        <button className="btn btn-ghost text-xl">Auth Master</button>
        <div className="flex space-x-7 font-bold">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </div>
      </div>
     
    </div>
  );
};

export default Header;
