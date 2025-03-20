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
        <div className="res-card">
            <img
                className="res-card-img"
                alt={name}
                src={Img_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} </h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default ResCard;