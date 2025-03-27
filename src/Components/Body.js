import ResCard , {WithOpenLabel} from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus"; 





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
    const ResCardOpen = WithOpenLabel(ResCard);
    
    console.log("body rendered",list_of_restaurents);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.818758&lng=75.7972135&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            //console.log("API Response:", json);
            //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
            
            // Extract the restaurant list from the API response
            const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants;
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

    const onlineStatus = useStatus();
    if(onlineStatus === false) return ( 
    <div>
        <h1 className="font-bold">
        Looks like you are offline!
        </h1>
        
    </div> )
    
    
    return list_of_restaurents.length === 0 ? <Shimmer /> : (
       <div className="body">
            <div className="filter flex ">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black hover:border-gray-500 hover:scale-105" 
                    value={searchText} onChange={(e) => {
                      setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-300 m-4 rounded-2xl hover:cursor-pointer hover:bg-green-400 hover:scale-105"
                    onClick={() =>{
                         console.log(searchText);

                         const filteredRes = list_of_restaurents.filter((res) =>
                            res?.info?.name
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          );

                         //console.log("filtered:" ,filteredRes);

                         setFilteredRes(filteredRes);
                    }}
                    >Search</button>
                    
                </div>

                
                <div className="search m-4 p-4 flex items-center">
                <button
                    className="px-4 py-2 bg-gray-200 m-4 rounded-2xl hover:cursor-pointer hover:scale-105"
                    onClick={() => {
                        const filteredList = filteredRestaurent.filter(
                            (res) => res?.info?.avgRating > 4
                        );
                        setFilteredRes(filteredList);
                    }}
                >
                    Top Rated
                </button>
                </div>   
                
            </div>
 
            <div className="flex flex-wrap items-center justify-center">
                { 
                
                filteredRestaurent.map((restaurant) => (
                       <Link 
                       key = {restaurant?.info?.id} 
                       to = {"/restaurant/"+ restaurant?.info?.id}>
                       
                       {restaurant.info.isOpen ? (
                       <ResCardOpen resData={restaurant} /> ) : ( 
                       <ResCard resData={restaurant} /> )}
                        </Link>   
                        
                    ))}
            </div>
        </div>
    );
};

export default Body;