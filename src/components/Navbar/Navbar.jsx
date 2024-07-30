import React from 'react'
import logo from "../../assets/images/logo.png"
import { NavLink } from 'react-router-dom'
function Navbar() {

  return (
    <div>
      <div className="navbar bg-blue-600 text-white">
        <div className="flex-1">
          <img className='w-10 h-10' src={logo} alt="" />
          <NavLink className="btn btn-ghost text-xl">React Jobs</NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/allJobs">Jobs</NavLink></li>
            <li><NavLink to="/addJob"> Add Jobs</NavLink></li>
            <li>
              {/* <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>Jobs</NavLink></li>
            <li><NavLink>Add Jobs</NavLink></li>
          </ul>
        </details> */}

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
