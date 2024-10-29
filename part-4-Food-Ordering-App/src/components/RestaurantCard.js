import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import DarkModeContext from "../utils/DarkModeContext";

const RestaurantCard = (props) => {
    const { info } = props;
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className={`flex flex-col justify-between w-72 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className="w-full h-48 overflow-hidden">
                <img
                    className="w-full h-full object-scale-down transition-transform duration-300 ease-in-out hover:scale-110"
                    src={CDN_URL + info.info.cloudinaryImageId}
                    alt={`${info.info.name} restaurant`}
                />
            </div>
            <div className="p-4 text-center">
                <div className="flex justify-center items-baseline mb-2">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`}>{info.info.avgRatingString}</div>
                    <div className="text-sm text-gray-500 ml-1">/5</div>
                </div>
                <div className={`text-xl font-bold mb-2 hover:text-yellow-500 transition duration-300 ease-in-out`}>
                    {info.info.name}
                </div>
                <div className={`text-gray-600 italic text-sm hover:text-yellow-500 transition duration-300 ease-in-out ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {info.info.cuisines ? info.info.cuisines.join(", ") : "Cuisine not available"}
                </div>
            </div>
        </div>
    );
};

// Higher Order Component
export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <div className="flex items-center space-x-2">
                    <img
                        src="https://www.shutterstock.com/shutterstock/photos/2443020419/display_1500/stock-vector-vegetarian-sign-veg-logo-veg-symbol-green-color-veg-sign-food-grade-sign-2443020419.jpg"
                        className="w-8 p-1"
                    />
                </div>

                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
