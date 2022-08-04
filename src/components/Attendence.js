import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'
import axios from "axios";
import { useParams } from 'react-router-dom';


const Attendence = () => {
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }

    let params = useParams();
    const [attend, setAttend] = useState([]);

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
    });

    const findAttend = (id) => {
        instance
            .get(`/Attendence/GetLast30DaysAttendenceByUser?userId=${id}`)
            .then(function (response) {
                console.log("attend response---------------- ", response);
                var dates = getDates(new Date(), response.data);
                setAttend(dates);
                // console.log("attend obj---------------- ", response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        findAttend(params.id);
    }, [params.id]);

    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    function getDates(stopDate, attData) {
        var startDate = new Date(new Date().setDate(stopDate.getDate() - 30));

        //create map
        // const attMap = new Map();
        // attData.map(e => {
        //     attMap[e.date] = e.spentTime;
        // })

        //create data array
        var dateArray = new Object();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            var cur = currentDate.toISOString().slice(0, 10);
            // if (attMap.has(cur)) {
            //     dateArray["\"" + cur + "\""] = attMap.get(cur); //replace with spentTime!!!
            // }
            // else {
            dateArray["\"" + cur + "\""] = 0;
            // }
            currentDate = currentDate.addDays(1);
        }
        console.log(dateArray);
        return dateArray;
    }

    return (
        <div>
            <p class="font-sans text-xl font-semibold">Attendance</p>
            <LineChart data={attend} />
        </div>
    )
}

export default Attendence;