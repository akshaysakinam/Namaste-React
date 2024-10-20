import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { info } = props


    console.log(info)

    return (
        <div className="restaurant-card">
            <div className="image-container">
                <img className="image" src={CDN_URL + info.info.cloudinaryImageId} />
            </div>
            <div className="restaurant-details">
                <div className="ratings-container">
                    <div className="rating">{info.info.avgRatingString}</div>
                    <div className="out-of">/5</div>
                </div>
                <div className="name">{info.info.name}</div>
                <div className="cuisine">{info.info.cuisines ? info.info.cuisines.join(", ") : "Cuisine not available"}</div>
            </div>
        </div>
    )
}

export default RestaurantCard;