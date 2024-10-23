import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetMenu();
    }, [])

    const { id } = useParams();
    console.log(id);
    const fetMenu = async () => {

        const data = await fetch(MENU_API + id);
        const json = await data.json();
        // console.log(json.data);
        setResInfo(json.data);

    }

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