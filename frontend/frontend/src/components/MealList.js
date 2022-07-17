import React from "react"
import Meal from "./Meal"
import "../style/Diet.css";


export default function MealList({ mealData }) {
    console.log("meallist-----------", mealData);
    //sort meal base on weekday
    mealData = [...mealData].sort((a, b) => a.weekDay - b.weekDay);
    console.log("sorted meal-------", mealData);

    return (
        <main>
            <section className="nutrients">
                <h1>Weekly Diet Plan</h1>
                <ul>
                    <li>Calories: 000</li>
                    <li>Carbohydrates: 000</li>
                    <li>Fat: 000</li>
                    <li>Protein: 000</li>
                </ul>
            </section>

            <section className="meals">
                {mealData.map(meal => {
                    return <Meal key={meal.id} meal={meal} />
                })}
            </section>
        </main>
    )
}