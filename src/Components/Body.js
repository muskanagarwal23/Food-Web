import ResCard from "./ResCard";
import resList  from "../utils/mockData";
import { useState } from "react";



const Body = () => {


    //local state variable
    const [list_of_restaurents,setList_of_restaurents] = 
    useState(resList)

    return(
        <div className="body">
            <div className="filter">
            <button 
            className="filter-btn" 
            onClick = {() => {
             const filteredList = list_of_restaurents.filter(
                (res) => res.info.avgRating > 4
             );
             setList_of_restaurents(filteredList);
            }} > Top Rated </button>
            </div>

            <div className="res-container">
                { 
                    list_of_restaurents.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
                
            </div>
        </div>
    )
};

export default Body;