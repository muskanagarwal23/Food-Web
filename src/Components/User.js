import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
    const [counter] = useState(1);
    
    
    
    return(
        <div className="user">
        <h2>Name:{props.name}</h2>
        <h4>Frontend Developer</h4>
        <h2>Location:Jaipur</h2>
        <h4>count:{count}</h4>
        <h4>counter:{counter}</h4>
        
        <button onClick={() => {
            setCount(count+1)
        }}>+1</button>
        </div>

        
    )
    
}

export default User;