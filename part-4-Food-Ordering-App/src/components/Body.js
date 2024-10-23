
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5641438&lng=78.4376862&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
    }



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

    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // } or

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
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
                        <Link className="restaurant-link" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} > <RestaurantCard info={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;