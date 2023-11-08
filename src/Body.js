import Restaurant from "./components/Restaurant";
import resList from  "./utils/mockdata";
import { useState } from "react";

const AppBody = () => {
    const [ListofRestaurant,setListofRestaurant] = useState(resList);
    return(
        
        <div className = "appbody">
            <div className = "sear">
                
                <button className = "butter" type = "button"
                onClick={ ()=>{
                    
                    const filteredList = ListofRestaurant.filter(
                       (res) => 
                         res.info.avgRating > 4.0

                       
                    );
                    setListofRestaurant(filteredList);
                }

                } 
                
                >TopRated</button>
            </div >
            <div className = "restaurant">
        {ListofRestaurant.map((restaurant) =>  (
        <Restaurant key ={restaurant.info.id}resdata = {restaurant}/>
        )
        )}
            

        </div>
        </div>

    );
};

export default AppBody;