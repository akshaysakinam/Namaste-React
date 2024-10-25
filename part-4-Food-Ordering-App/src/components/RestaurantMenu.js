
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { id } = useParams();
    console.log(id);

    const resInfo = useRestaurantMenu(id);
    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    console.log(itemCards);



    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Cuisines : {cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item =>
                    <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.finalPrice / 100 || item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
                )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;