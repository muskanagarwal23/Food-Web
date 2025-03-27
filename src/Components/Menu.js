
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import ResCategory from "./ResCategory";

const Menu = () => {
    //const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useMenu(resId);
    
    if(resInfo === null)  return <Shimmer/>  
    //console.log(resInfo);
     
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info; 

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    
    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => 
        c.card?.["card"]?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    );
    console.log(category);
    
    
    
    return (
    
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
             <p className="text-lg">
              {cuisines.join(",")} , {costForTwoMessage}
            </p>

            {category.map((cat)=>(
              <ResCategory key={cat?.card?.card?.categoryId} data={cat?.card?.card} />

              ))}
              
            
             
        </div>
    );

};

export default Menu;