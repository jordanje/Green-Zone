import React, { useHistory } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
            <NavLink className="nav-link" to="/plants">Plants</NavLink>
        </div>
      )}
export default NavBar