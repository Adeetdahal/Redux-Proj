import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="flex flex-row px-8 py-3 justify-between h-auto items-center  bg-slate-800 text-white   ">
      <div className="text-lg items-start  w-full flex justify-between  ">
        <h3 className="tracking-wide font-semibold ">
          <Link to="/">GoalSetter</Link>
        </h3>
      </div>
      <div className="flex justify-end w-full ">
        <ul className="flex  flex-row items-center ">
          <li className="px-5">
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
