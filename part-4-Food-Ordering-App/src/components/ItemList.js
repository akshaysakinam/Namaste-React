import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import DarkModeContext from "../utils/DarkModeContext";

const ItemList = ({ items }) => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className="p-6">
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className={`p-6 m-4 border-b-2 rounded-lg transition-shadow duration-200 ease-in-out flex justify-between items-center 
                                ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'}`}
                >
                    <div className="flex-1 mr-4">
                        <div className="mb-3">
                            <span className={`block font-bold text-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                {item.card.info.name}
                            </span>
                            <span className={`block text-lg mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                ₹{(item.card.info.defaultPrice / 100 || item.card.info.price / 100).toFixed(2)}
                            </span>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="relative flex-shrink-0 w-40 h-40">
                        <img
                            src={CDN_URL + item.card.info.imageId}
                            className="w-full h-full object-cover rounded-md"
                            alt={item.card.info.name}
                        />
                        <button className={`absolute bottom-0 left-5 py-2 px-10 rounded-md shadow-md 
                                        ${isDarkMode ? 'bg-gray-700 text-green-500 border-gray-600 hover:bg-gray-600' : 'bg-white text-green-500 border border-black-500 hover:bg-gray-200'}`}>
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
