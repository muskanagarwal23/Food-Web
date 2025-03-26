import { useState } from "react";
import { Logo_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";


const Header = () => {
    const [btnName , setBtnName] = useState("Log In");
    //console.log("Header Rendered");
    
    const onlineStatus = useStatus();
    
    return(
        <div className="flex justify-between shadow-lg mb-2 px-6 py-3">
            <div className="logo-container">
                <img className="w-34" src = {Logo_URL} />
            </div>

            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        { onlineStatus ? "✅" : "🚫"}
                    </li>
                    
                     <li className=" inline-block px-4  hover:bg-gray-200 hover:rounded-lg hover:scale-105">
                        <Link to = "/">HOME </Link>
                    </li>
                    
                    <li className="inline-block px-4  hover:bg-gray-200 hover:rounded-lg hover:scale-105">
                      <Link to = "/About"> About Us </Link>
                    </li>
                   
                    <li className="  inline-block px-4  hover:bg-gray-200 hover:rounded-lg hover:scale-105">
                        <Link to ="/contact">Contact Us</Link>
                    </li>
                    <li className=" inline-block px-4  hover:bg-gray-200 hover:rounded-lg hover:scale-105">
                        <Link to = "/cart">Cart</Link>
                        </li>
                    
                    <li className="px-4">
                    <button className="bg-green-400 text-black py-2 rounded-md px-4 hover:bg-green-600 transition hover:cursor-pointer" 
                    onClick={() => {
                    setBtnName((btnName) => 
                        (btnName === "Log In" 
                            ? "Log Out" : "Log In"
                            
                        ))
                        
                    }}
                    >{btnName} </button>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;