import React from "react";

class UserClass extends  React.Component{
    constructor(props){
        super(props);

        //console.log(props);

        this.state = { 
            count:0,
            counter:1
        };
        console.log("child constructor");
        
        
    }
    componentDidMount(){
        console.log("child Did Mount");
        
    }

    
    
    render(){
        
         const {name,location} = this.props;
         const {count,counter} = this.state;
         console.log("child Render");
        return(
        <div className="user">
        <h2>Name:{name}</h2>
        <h4>Backend Developer</h4>
        <h2>Location:{location}</h2>
        <h4>count:{count}</h4>
        <h4>counter:{counter}</h4>
        <button onClick={() => {
            this.setState({
                count: this.state.count+2,
                counter:this.state.counter+2,
            })
        }}
          >+2</button>

        </div>
        )
        
    }
    
    
}

export default UserClass;
