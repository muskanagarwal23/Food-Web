import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [list_of_restaurents, setList_of_restaurents] = useState([]);
    //console.log("list:",list_of_restaurents);

    const [searchText,setSearchText] = useState("");
    
    //const [originalList,setOriginalList] = useState([]);
    //console.log("original:",originalList);

    const [filteredRestaurent,setFilteredRes] = useState([]);

    // useEffect(()=> {
    //     setOriginalList(list_of_restaurents);
    // },[list_of_restaurents])
    
    console.log("body rendered");
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.818758&lng=75.7972135&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            );
            const json = await response.json();
            console.log("API Response:", json);

            // Extract the restaurant list from the API response
            const restaurantList = json?.data?.cards || [];
            setList_of_restaurents(restaurantList);
            setFilteredRes(restaurantList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // conditional rendering
    // if (list_of_restaurents.length === 0) {
    //     return <Shimmer />;
    // }


    return list_of_restaurents.length === 0 ? <Shimmer /> : (
       
       
       <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchText} onChange={(e) => {
                      setSearchText(e.target.value);
                    }}></input>
                    <button onClick={() =>{
                         console.log(searchText);

                         const filteredRes = list_of_restaurents.filter((restaurant) =>
                            restaurant?.card?.card?.info?.name
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          );

                         console.log("filtered:" ,filteredRes);

                         setFilteredRes(filteredRes);
                    }}
                    >Search</button>
                    
                </div>

                
                    
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = filteredRestaurent.filter(
                            (res) => res.card?.card?.info?.avgRating > 4
                        );
                        setFilteredRes(filteredList);
                    }}
                >
                    Top Rated
                </button>
            </div>
 
            <div className="res-container">
                { 
                
                filteredRestaurent.filter((restaurant) => restaurant?.card?.card?.info) 
                    .filter((restaurant) => restaurant?.card?.card?.info?.name) 
                    .map((restaurant) => (
                        <ResCard
                            key={restaurant.card.card.info.id}
                            resData={restaurant}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Body;