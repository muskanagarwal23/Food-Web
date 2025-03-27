import { useState } from "react";
import ItemList from "./ItemList";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const ResCategory = ({data}) => {
    //console.log(data);
    const [showItems,setShowItems] = useState(false);
    
    const handleClick = () => {
        console.log("clicked");
        setShowItems(!showItems);

    };
    
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
               
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                  {data.title} ({data.itemCards.length})
                </span>
                <span><ExpandMoreIcon/></span>
            </div>
               
                {showItems && <ItemList item={data.itemCards}/>}
            </div>

        
        </div>
    )
}

export default ResCategory;