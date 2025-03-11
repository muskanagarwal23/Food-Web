import { Img_URL } from "../utils/constant";

const ResCard=(props)=>{
    const {resData} = props;

    const { 
          cloudinaryImageId,
          name,
          cuisines,
          avgRating,
          deliveryTime,
          costForTwo
        } = resData?.info;
    return(
        <div className="res-card">
         <img className="burger-img" 
        alt="burger"
        src= { Img_URL + cloudinaryImageId }
            
        />   
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{costForTwo}</h4> 
        </div>
    )
}

export default ResCard;