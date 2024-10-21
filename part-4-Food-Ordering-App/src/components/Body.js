
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)
    const [search, setSearch] = useState("")

    const filterRestaurants = (search, listOfRestaurants) => {
        let filteredRestaurants = listOfRestaurants.filter((restaurant) => {
            const nameMatch = restaurant.info.name && restaurant.info.name.toLowerCase().includes(search.toLowerCase());

            let cuisine = restaurant.info.cuisine;
            let cuisineMatch = false;

            if (Array.isArray(cuisine)) {
                cuisineMatch = cuisine.join(" ").toLowerCase().includes(search.toLowerCase())

            } else if (typeof cuisine == 'string') {
                cuisineMatch = cuisine.toLowerCase().includes(search.toLowerCase())
            }

            return nameMatch || cuisineMatch

        })
        setListOfRestaurants(filteredRestaurants)
    }
    const sortRestaurants = () => {
        let sortRestaurants = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 4.2
        })
        setListOfRestaurants(sortRestaurants)
    }



    return (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for restaurant, cuisine, or a dish"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <button className="search-btn" onClick={() => {
                    filterRestaurants(search, restaurantList)
                }}>search</button>
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={sortRestaurants}>Top Rated Restaurant</button>
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