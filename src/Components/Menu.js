
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";

const Menu = () => {
    //const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useMenu(resId);
    
    if(resInfo === null)  return <Shimmer/>  
    //console.log(resInfo);
     
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info; 

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    
    
    return (
    
        <div className="menu">
            <h1>{name}</h1>
             <h3>{cuisines.join(",")}</h3>
             <h3>{costForTwoMessage}</h3>
             <h2>MENU</h2>
             
             <ul>
               {
                 itemCards.map((item) => (
                 <li key ={item.card.info.id}>
                {item.card.info.name} - {"Rs."}
                {item.card.info.price/100 ||
                item.card.info.defaultPrice/100 }
                </li>
               ))}
               
                
             </ul>
        </div>
    );

};

export default Menu;