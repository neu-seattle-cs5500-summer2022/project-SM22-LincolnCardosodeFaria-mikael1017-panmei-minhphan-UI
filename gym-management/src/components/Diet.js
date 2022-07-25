import React, { useState, useEffect } from 'react';
import GymDataService from '../services/callAPI';
import { useParams } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import "../style/Diet.css";
import Accordion from "./Accordion";

// let params = useParams();
//display in client main page
// const [mealData, setMealData] = useState(null);

// useEffect(() => {
//   const getMealData = id => {
//     GymDataService.findDiet(id)
//       .then(response => {
//         console.log("diet---------------- ", response);
//         setMealData(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
//   getMealData(params.id);
// }, [params.id]);

const Diet = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti`
    }
  ];

  return (
    <div>
      <h1>Diet Plan</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Diet;