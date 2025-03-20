import { useState, useEffect } from "react";
import { Logo_URL } from "../utils/constant";
import { Link } from "react-router-dom";


const Header = () => {
    const [btnName , setBtnName] = useState("Log In");
    //console.log("Header Rendered");
    
    useEffect( () => {
      //console.log("useEffect called");
      
    } )
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {Logo_URL} />           </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to = "/">HOME </Link>
                    </li>
                    
                    <li>
                      <Link to = "/About"> About Us </Link>
                    </li>
                   
                    <li>
                        <Link to ="/contact">Contact Us</Link>
                    </li>
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