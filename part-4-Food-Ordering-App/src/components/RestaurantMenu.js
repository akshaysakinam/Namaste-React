import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { id } = useParams();
    console.log(id);

    const resInfo = useRestaurantMenu(id);
    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    console.log(itemCards);

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
                <h2 className="text-xl text-gray-700 text-center mb-2">Cuisines: {cuisines.join(", ")}</h2>
                <h3 className="text-lg text-gray-500 text-center mb-4">{costForTwoMessage}</h3>
                <h3 className="text-2xl font-semibold mb-2">Menu</h3>
                <ul className="space-y-2">
                    {itemCards.map(item => (
                        <li key={item.card.info.id} className="flex justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200">
                            <span className="text-gray-800">{item.card.info.name}</span>
                            <span className="text-gray-600">
                                ₹{(item.card.info.finalPrice / 100) || (item.card.info.defaultPrice / 100) || (item.card.info.price / 100)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
