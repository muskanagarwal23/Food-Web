import React from "react";

class UserClass extends  React.Component{
    constructor(props){
        super(props);

        //console.log(props);

        this.state = {
            userInfo:{
                name:"dummy",
                location:"default",
                

            }
        };
        //console.log("child constructor");
        
        
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/muskanagarwal23");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
        
        
    }

    
    
    render(){
        
        const {name,location,public_repos,
            avatar_url} = this.state.userInfo;
        return(
        <div className="inline-block border-[1px] border-solid border-black m-5 w-[250px] h-[300px] text-center bg-[#f0f0f0]">
        <h1>Github User</h1>
        <img className="w-[150px] text-center mx-auto" src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=360"/>    
        <h2>Name:{name}</h2>
        <h4>Frontend Developer</h4>
        <h2>Location:{location}</h2>
        <h2>no. of repos:{public_repos}</h2>
        </div>
        )
        
    }
    
    
}

export default UserClass;
