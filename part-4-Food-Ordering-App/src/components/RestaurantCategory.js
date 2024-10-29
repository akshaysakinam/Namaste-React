import { useContext } from "react";
import arrow from "../../images/arrow.png";
import ItemList from "./ItemList";
import DarkModeContext from "../utils/DarkModeContext";

const RestaurantCategory = ({ data, isExpanded, setShowIndex }) => {
    const toggleExpand = () => {
        setShowIndex();
    };

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div>
            {/* Header */}
            <div className={`w-full md:w-6/12 mx-auto my-4 p-6 rounded-lg transition-shadow duration-300 ease-in-out
                ${isDarkMode ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'}`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
                    <span className="font-semibold text-xl">
                        {data.title} ( {data.itemCards
                            ? data.itemCards.length
                            : data.categories.map((c) => `${c.title} (${c.itemCards.length})`).join(", ")
                        })
                    </span>
                    <span className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                        <img src={arrow} className="w-8" alt="Toggle arrow" />
                    </span>
                </div>

                {/* ItemList - show only if expanded */}
                {isExpanded && (
                    <div className="mt-4">
                        {isExpanded && <ItemList items={data.itemCards} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantCategory;
