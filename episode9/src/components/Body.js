import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
    console.log("Body rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);

    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
        <h1>Looks like you're offline!!! Please check with your internet connection!!!</h1>
    )

    
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                     type="text" 
                     className="search-box" 
                     value={searchText} 
                     onChange={(e) => {setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        //filter logic
                        //searchtext
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        // setListOfRestaurant(filteredRestaurant);
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick = {() => {
                       const filteredList = listOfRestaurant.filter(
                           (res) => (
                            res.info.avgRating > 4
                        ));
                        setListOfRestaurant(filteredList);
                        console.log(filteredList);
                    }}
                    >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {
                    filteredRestaurant.map((restaurant) =>
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                     <RestaurantCard  resData={restaurant} />
                    </Link>
                   )
                }
            </div>
        </div>
    );
};

export default Body;