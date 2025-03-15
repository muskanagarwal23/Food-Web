import { useState } from "react";
import { Logo_URL } from "../utils/constant";


const Header = () => {
    const [btnName , setBtnName] = useState("Log In");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {Logo_URL} />           </div>

            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={() => {
                    setBtnName((btnName) => 
                        (btnName === "Log In" 
                            ? "Log Out" : "Log In"
                            
                        ))
                        
                    }}
                    >{btnName} </button>
                    
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;