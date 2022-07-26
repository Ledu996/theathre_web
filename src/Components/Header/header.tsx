import React from "react";
import "./index.css";

import NavBar from "../Navbar";


const Header: React.FC = () => {
    return (
        <header>
            <div className = "login__registrer-box">
                <button className = "login__btn"><a href="/login">Login</a></button>
                <button className = "register__btn">Register</button>
            </div>
            <NavBar/>
        </header>
    );
};

// Split component Header into navigation and sign in, sign up

export default Header;







