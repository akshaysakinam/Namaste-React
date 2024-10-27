import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { info } = props;

    return (
        <div className="flex flex-col justify-between w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="w-full h-48 overflow-hidden">
                <img
                    className="w-full h-full object-scale-down transition-transform duration-300 ease-in-out hover:scale-110"
                    src={CDN_URL + info.info.cloudinaryImageId}
                    alt={`${info.info.name} restaurant`}
                />
            </div>
            <div className="p-4 text-center">
                <div className="flex justify-center items-baseline mb-2">
                    <div className="text-2xl font-bold text-yellow-500">{info.info.avgRatingString}</div>
                    <div className="text-sm text-gray-500 ml-1">/5</div>
                </div>
                <div className="text-xl font-bold text-gray-800 mb-2 hover:text-yellow-500 transition duration-300 ease-in-out">
                    {info.info.name}
                </div>
                <div className="text-gray-600 italic text-sm hover:text-yellow-500 transition duration-300 ease-in-out">
                    {info.info.cuisines ? info.info.cuisines.join(", ") : "Cuisine not available"}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
