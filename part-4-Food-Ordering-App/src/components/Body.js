import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]); // Stores the original restaurant list from API
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5641438&lng=78.4376862&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const fetchedRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setAllRestaurants(fetchedRestaurants);
        setListOfRestaurants(fetchedRestaurants);
    };

    const filterRestaurants = (search) => {
        if (!search) {
            // Reset to the original list if the search box is empty
            setListOfRestaurants(allRestaurants);
            return;
        }

        const filteredRestaurants = allRestaurants.filter((restaurant) => {
            const nameMatch =
                restaurant.info.name &&
                restaurant.info.name.toLowerCase().includes(search.toLowerCase());

            // Handle cuisine as an array of objects
            const cuisineMatch = restaurant.info.cuisines?.some((cuisine) =>
                cuisine.toLowerCase().includes(search.toLowerCase())
            );

            return nameMatch || cuisineMatch;


        });

        setListOfRestaurants(filteredRestaurants);
    };


    const sortRestaurants = () => {
        const sortedRestaurants = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.2
        );
        setListOfRestaurants(sortedRestaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return (
            <h1 className="text-center text-xl text-red-500 font-bold">
                Looks like you are not connected to the internet. Please check your connection.
            </h1>
        );
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="w-4/5 mx-auto flex flex-col items-center p-5">
            <div className="w-full max-w-lg mb-5 relative flex items-center justify-center">
                <input
                    type="text"
                    className="w-full py-3 px-5 text-lg rounded-full border-2 border-gray-300 focus:border-black focus:shadow-lg transition duration-300 ease-in-out placeholder-gray-400"
                    placeholder="Search for restaurant, cuisine, or a dish"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="py-3 px-5 text-lg rounded-full bg-yellow-500 text-white ml-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:scale-105 active:scale-95 focus:outline-none focus:ring focus:ring-gray-300"
                    onClick={() => filterRestaurants(search)}
                >
                    Search
                </button>
            </div>
            <button
                className="m-2 cursor-pointer py-2 px-4 bg-blue-500 text-white rounded transition duration-300 ease-in-out hover:bg-blue-600"
                onClick={sortRestaurants}
            >
                Top Rated Restaurant
            </button>
            <div className="flex justify-center flex-wrap gap-5">
                {listOfRestaurants.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurant/${restaurant.info.id}`}
                        className="no-underline text-inherit inline-block transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    >
                        <RestaurantCard info={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
