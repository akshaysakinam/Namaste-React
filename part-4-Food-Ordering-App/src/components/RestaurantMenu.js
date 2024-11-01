import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import DarkModeContext from "../utils/DarkModeContext";

const RestaurantMenu = () => {
    const { id } = useParams();
    const { isDarkMode } = useContext(DarkModeContext);
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(id);

    if (resInfo === null) {
        return <Shimmer />;
    }



    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const itemCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    if (!itemCards) {
        console.error("itemCards is undefined. Check data structure:", resInfo);
    }

    return (
        <div className={`min-h-screen p-5 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`max-w-3xl mx-auto rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
                <h2 className="text-xl text-center mb-2">{`Cuisines: ${cuisines.join(", ")}`}</h2>
                <h3 className="text-lg text-center mb-4">{costForTwoMessage}</h3>

                {/* Categories section */}
            </div>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    isExpanded={index === showIndex}
                    setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
