import "../style/Diet.css";

export default function Meal({ meal }) {
    console.log("meal-------", meal);
    function dayOfWeekAsString(dayIndex) {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
    }

    return (
        < article >
            <h1>{dayOfWeekAsString(meal.weekDay)}</h1>
            <h2>{meal.diet}</h2>
            {/* <img src={imageUrl} alt="recipe" /> */}

            <a href={meal.sourceUrl} class="purple">Detail</a>
        </article >
    )
}