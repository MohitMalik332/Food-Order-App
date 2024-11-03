import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";


const requestConfig = {};

export default function Meals() {
    // const [loadedMeals, setLoadedMeals] = useState([]);

// we have made a separate reusable file (useHttp) for the below code...
    // useEffect(() => { 
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');
    
    //         if(!response.ok){
    //             //....
    //         }
    
    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }

    //     fetchMeals()
    // }, [])


    const { 
        data: loadedMeals, 
        isLoading, 
        error,
    } = useHttp('http://localhost:3000/meals', requestConfig, []);


    if (isLoading){
        return <p className="center">Fetching meals...</p>
    }

    // An alternative (temporary) for not using requestConfig.
    // if (!data){
    //     return <p>No Meals Found...</p>
    // }


    return (
    <ul id="meals">
        {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal}/>
        ))}
    </ul>
    )
}