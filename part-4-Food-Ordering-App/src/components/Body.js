
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)

    const filterRestaurants = () => {
        const filteredList = listOfRestaurants.filter((item) => item.info.avgRating > 4.4)
        setListOfRestaurants(filteredList)

    }
    return (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for restaurant, cuisine, or a dish"
                />
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={filterRestaurants}>Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} info={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;