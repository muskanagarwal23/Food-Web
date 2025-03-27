import {Img_URL} from "../utils/constant"
const ItemList = ({item}) => {
    //console.log(item );
    
   return(
    <div>
        
        {item.map((i) => (
            <div 
            key={i.card.info.id} 
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
                <div className="w-9/12">
                  <div className="py-2">
                    <span >{i.card.info.name}</span>
                    <span> - ₹
                        { i.card.info.price
                        ? i.card.info.price/100
                        : i.card.info.defaultPrice/100 }
                        </span>
                </div>
                <p className="text-xs">{i.card.info.description}</p>
            </div>
            
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                 <button className="px-2 py-1 mx-16 rounded-xl bg-white shadow-lg text-green-600 ">
                 Add+</button>
              </div>
                <img src={Img_URL + i.card.info.imageId} 
                className="w-full"></img> 
             </div>

            </div>
                
            ))};
        
    </div>
   );
};

export default ItemList;