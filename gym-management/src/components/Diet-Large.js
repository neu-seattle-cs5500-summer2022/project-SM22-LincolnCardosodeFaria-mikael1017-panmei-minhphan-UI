import React, { useState, useEffect } from 'react';
import GymDataService from '../services/callAPI';
import { useParams } from 'react-router-dom';
import MealList from "./MealList"
import "../style/Diet.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Banner from "./Banner"

//display in client sub-tab
const Diet = ({ user }) => {
    let params = useParams();

    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        const getMealData = id => {
            GymDataService.findDiet(id)
                .then(response => {
                    console.log(response);
                    if (response.data !== "Diets related to this user id not found")
                        setMealData(response.data)
                })
                .catch(e => {
                    console.log(e);
                });
        };
        getMealData(params.id)
    }, [params.id]);

    return (
        <div>
            {Banner}
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href={`/client/${params.id}`} id="sidebarlink">Back</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='user_diet'>
                {mealData && <MealList mealData={mealData} />}
            </div >
        </div>


    )
}

export default Diet;
