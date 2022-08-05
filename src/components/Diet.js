import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import DietItem from "./DietItem";
import axios from "axios";


//display in client main page
const Diet = () => {
  let params = useParams();
  const [mealData, setMealData] = useState([]);

  const instance = axios.create({
    baseURL: "https://gymmanagement.azurewebsites.net",
  });

  const findDiet = (id) => {
    instance
      .get(`/Diet/GetAllDietsByUser?userId=${id}`)
      .then(function (response) {
        console.log("diet---------------- ", response);
        if (!response.data.toLowerCase().includes("not found")) {
          setMealData(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    findDiet(params.id);
  }, [params.id]);

  function dayOfWeekAsString(dayIndex) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex] || '';
  }

  return (
    <div>
      <p class="font-sans text-xl font-semibold">Diet Plan</p>
      <Stack gap={1}>
        {mealData.map(({ weekDay, diet }) => (
          <DietItem title={dayOfWeekAsString(weekDay)} content={diet} />
        ))}
      </Stack>
    </div>
  );
};

export default Diet;