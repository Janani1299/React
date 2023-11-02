import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    // const params = useParams();
    // console.log(params);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        // const data = await fetch(
        //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
            
        // );

        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null) return<Shimmer/>;

    const { name, cuisines, costForTwoMessage, avgRating} = 
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = 
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>

                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li>
                <li>{itemCards[4].card.info.name}</li> */}

                {itemCards.map(item => <li key={item.card.info.id}>
                    {item.card.info.name} -{"Rs. "} - {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;