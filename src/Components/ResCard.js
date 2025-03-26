import { Img_URL } from "../utils/constant";

const ResCard = (props) => {
    const { resData } = props;

    //Check if resData or the nested structure is undefined
    // if (!resData || !resData.card || !resData.card.card || !resData.card.card.info) {
    //     return (
    //         <div className="res-card">
    //             <h3>Loading...</h3>
    //         </div>
    //     );
    // }

    // Destructure the nested info object
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo,
    } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-md text-center hover:shadow-lg hover:scale-105 " 
        style={{backgroundColor:"#f0f0f0"}}>
            <img
                className="rounded-xs w-32 h-32 mx-auto"
                alt={name}
                src={Img_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} </h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default ResCard;