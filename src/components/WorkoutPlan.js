import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "../style/Calendar.css";
import axios from "axios";
import { useParams } from 'react-router-dom';

//https://levelup.gitconnected.com/create-a-month-week-and-day-view-calendar-with-react-and-fullcalendar-1794d76e6d06

const WorkoutPlan = props => {
    // const [events, setEvents] = useState([
    //     {
    //         id: 1,
    //         title: 'event 1',
    //         start: '2022-06-14T10:00:00',
    //         end: '2022-06-14T12:00:00',
    //     },
    //     {
    //         id: 2,
    //         title: 'event 2',
    //         start: '2022-06-16T13:00:00',
    //         end: '2022-06-16T18:00:00',
    //     },
    //     {
    //         id: 3,
    //         title: 'event 3',
    //         start: '2022-06-17',
    //         end: '2022-06-20'
    //     },
    // ]);

    //get events from API
    // useEffect
    let params = useParams();
    const [events, setEvents] = useState([]);
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
    });

    const findEvent = (id) => {
        instance
            .get(`/WorkOut/GetAllWorkoutByUser?userId=${id}`)
            .then(function (response) {
                console.log("workoout response---------------- ", response);
                const getEvents = response.data.map(e => {
                    let obj = new Object();
                    // obj[id] = e.id;
                    // obj[title] = e.nameOfWorkout;
                    // obj[start] = e.start;
                    // obj[end] = e.end;
                }
                );
                setEvents(getEvents);
                console.log("workoout getEvents---------------- ", getEvents);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    useEffect(() => {
        findEvent(params.id);
    }, [params.id]);

    return (
        <div className='App'>
            <p class="font-sans text-xl font-semibold"> Workout Plan</p>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    center: 'dayGridMonth,timeGridWeek',
                }}
                events={events}
                eventColor="green"
                nowIndicator
                dateClick={(e) => console.log(e.dateStr)}
                eventClick={(e) => console.log(e.event.id)}
            />

        </div>
    )
};

export default WorkoutPlan;