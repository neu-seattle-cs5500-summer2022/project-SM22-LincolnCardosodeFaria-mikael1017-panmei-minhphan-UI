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
        baseURL: "https://gymmanagement.azurewebsites.net",
    });

    const findAttend = (id) => {
        instance
            .get(`/Attendence/GetLast30DaysAttendenceByUser?userId=${id}`)
            .then(function (response) {
                console.log("attend response---------------- ", response);
                // if (!response.data.toLowerCase().includes("not found")) {
                if (typeof (response.data) != 'string') {
                    var now = new Date();
                    // now.setDate(now.getDate() + 1);
                    var dates = getDates(now, response.data);
                    setAttend(dates);
                    console.log("attend obj---------------- ", attend);
                }
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
        const attMap = new Map();
        attData.map(e => {
            var date = e.date.slice(0, 10);
            var newdate = date.replace(/(..).(..).(....)/, "$3-$1-$2");
            attMap.set(newdate, e.spentTime);
        })
        // console.log("attMap---------------- ", attMap);
        // console.log("attMap has---------------- ", attMap.has("2022-08-05"));


        //create data array
        var dateArray = new Object();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            var cur = currentDate.toISOString().slice(0, 10);
            if (attMap.has(cur)) {
                dateArray["\"" + cur + "\""] = attMap.get(cur); //replace with spentTime!!!
            }
            else {
                dateArray["\"" + cur + "\""] = 0;
            }
            currentDate = currentDate.addDays(1);
        }
        console.log("attendence array------", dateArray);
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