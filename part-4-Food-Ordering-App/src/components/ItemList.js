import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import DarkModeContext from "../utils/DarkModeContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const { isDarkMode } = useContext(DarkModeContext);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="p-6">
            {items.map((item) => {
                const { id, name, defaultPrice, price, description, imageId } = item.card.info;
                const itemPrice = (defaultPrice || price) / 100;

                return (
                    <div
                        key={id}
                        className={`p-6 m-4 border-b-2 rounded-lg transition-shadow duration-200 ease-in-out flex justify-between items-center 
                                    ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'}`}
                    >
                        <div className="flex-1 mr-4">
                            <div className="mb-3">
                                <span className={`block font-bold text-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {name}
                                </span>
                                <span className={`block text-lg mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    ₹{itemPrice.toFixed(2)}
                                </span>
                            </div>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {description}
                            </p>
                        </div>
                        <div className="relative flex-shrink-0 w-40 h-40">
                            <img
                                src={CDN_URL + imageId}
                                className="w-full h-full object-cover rounded-md"
                                alt={name}
                            />
                            <button
                                className={`absolute bottom-0 left-5 py-2 px-10 rounded-md shadow-md 
                                            ${isDarkMode ? 'bg-gray-700 text-green-500 border-gray-600 hover:bg-gray-600' : 'bg-white text-green-500 border border-black-500 hover:bg-gray-200'}`}
                                onClick={() => handleAddItem(item)}
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
