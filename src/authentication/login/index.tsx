import React from "react";



const Login: React.FC = () => {
    return (
        <form className="form-login">
            <input type = "text" name = "email" placeholder = "Email Address"/>
            <input type = "text" name = "password" placeholder = "Password"/>
            <button>Login</button>
        </form>
    )
};


export default Login;





