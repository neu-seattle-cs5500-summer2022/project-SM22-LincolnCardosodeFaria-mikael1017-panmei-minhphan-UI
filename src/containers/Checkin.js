import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Button } from "react-bootstrap";
import { useRef } from 'react';

//display in client main page
const Checkin = () => {
    let params = useParams();

    const inputRef = useRef(null);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const instance = axios.create({
        baseURL: "https://gymmanagement.azurewebsites.net",
    });

    function handleSubmit() {
        CreateAttence(inputRef.current.value);
    }

    const CreateAttence = (time) => {
        const now = new Date();
        var today = now.toJSON().slice(0, 10);
        const weekday = new Array('Sunday', 'Monday',
            'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        const dayOfWeek = weekday[now.getDay()];
        const curTime = now.getHours() + ":" + now.getMinutes();
        // console.log("attendance put---------------- ", today);
        // console.log("attendance put---------------- ", dayOfWeek);
        // console.log("attendance put---------------- ", curTime);
        // console.log("attendance put---------------- ", time);
        // console.log("attendance put---------------- ", typeof (parseFloat(time)));
        // console.log("attendance put---------------- ", typeof (parseInt(params.id)));
        instance.post("/Attendence/CreateAttence",
            {
                date: today,
                day: dayOfWeek,
                time: curTime,
                spentTime: parseFloat(time),
                userId: parseInt(params.id)
            }
        )
            .then(function (response) {
                console.log("attendance resp---------------- ", response);
                alert("Success!");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div class="py-6">
            <h3>
                How long you plan to spend today:
            </h3>
            <p>{date}</p>
            <input
                style={{ height: 40, width: "50%", borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                ref={inputRef}
                type="number"
                step="0.5"
                min="0.5"
                max="10"

                placeholder="0.5"
            />
            <div >
                <Button type="submit" variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div >
    );
};

export default Checkin;