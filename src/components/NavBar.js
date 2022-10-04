import React, { useHistory } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1>Green Room</h1>
            <div className="nav-links">
                <NavLink className="link" to="/rooms">Rooms</NavLink>
                <NavLink className="link" to="/plants">Plants</NavLink>
            </div>
           
        </div>
      )}
export default NavBar