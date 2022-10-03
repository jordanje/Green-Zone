import React, { useHistory } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
          <button className="home">
            <Link to="/">Home</Link>
          </button>
          <button className="plantCards">
            <Link to="/plants">Plants</Link>
          </button>
        </div>
      )}
export default NavBar