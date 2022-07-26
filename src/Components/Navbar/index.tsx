import React from "react";
import "./index.css"


const NavBar: React.FC = () => {
    return (
        <nav className = "nav-bar">
            <ul className = "nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Actors</li>
                <li className="nav-item">Acts</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    )
};

export default NavBar;


