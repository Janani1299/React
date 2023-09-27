import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

// const Body = () => {
//     const [listOfRestaurant, setListOfRestaurant] = useState([
//         {
//             "info": {
//           "id": "296855",
//           "name": "Thalairaj Biryani",
//           "cloudinaryImageId": "1e9f2a656c0e752a5a0ff80ea302c1ab",
//           "locality": "Sadashiva Nagar",
//           "areaName": "Sadashiva Nagar",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Biryani",
//             "Indian"
//           ],
//           "avgRatingString": "4.2",
          
          
//             "deliveryTime": 39,
//         },
//     },
//     {
//         "info": {
//       "id": "296856",
//       "name": "Dominos",
//       "cloudinaryImageId": "1e9f2a656c0e752a5a0ff80ea302c1ab",
//       "locality": "Sadashiva Nagar",
//       "areaName": "Sadashiva Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Biryani",
//         "Indian"
//       ],
//       "avgRatingString": "3.8",
      
      
//         "deliveryTime": 39,
//     },
//     },
//     {
//         "info": {
//       "id": "296857",
//       "name": "MCD",
//       "cloudinaryImageId": "1e9f2a656c0e752a5a0ff80ea302c1ab",
//       "locality": "Sadashiva Nagar",
//       "areaName": "Sadashiva Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Biryani",
//         "Indian"
//       ],
//       "avgRatingString": "4.5",
      
      
//         "deliveryTime": 39,
//     },
//     },
//     ]);
    
//     return(
//         <div className="body">
//             <div className="filter">
//                 <button 
//                     className="filter-btn"
//                     onClick = {() => {
//                        const filteredList = listOfRestaurant.filter((res) => (
//                             res.info.avgRatingString > 4
//                         ));
//                         setListOfRestaurant(filteredList);
//                         console.log(filteredList);
//                     }}
//                     >
//                     Top Rated Restaurants
//                 </button>
//             </div>
//             <div className="restro-container">
//                 {
//                     listOfRestaurant.map((restaurant) =>
//                     <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
//                 }
//             </div>
//         </div>
//     );
// };



const Body = () => {
    const[listOfRestaurant, setListOfRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick = {() => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4 );
                        setListOfRestaurant(listOfRestaurant);
                        console.log(filteredList);
                    }}
                    >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {
                    resList.map((restaurant) =>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;