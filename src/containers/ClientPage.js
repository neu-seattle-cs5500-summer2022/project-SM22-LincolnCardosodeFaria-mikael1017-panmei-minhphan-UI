import React, { useState, useEffect } from 'react';
import WorkoutPlan from '../components/WorkoutPlan';
import Diet from '../components/Diet';
import Attendence from '../components/Attendence';
import { useParams } from 'react-router-dom';

// import Sidebar from '../components/Sidebar';


const Client = (user) => {
    let params = useParams();
    const [name, setName] = useState("none user");

    useEffect(() => {
        setName("huskey");
    }, []);

    console.log("=========user=========", user);
    return (
        <body class="py-6">
            <div class="grid grid-cols-12 gap-3 place-content-center">
                {/* <Sidebar /> */}
                <aside class="w-36 fixed left-0 top-0 h-screen bg-slate-700 p-1">
                    <p class="text-white font-sans text-xl">Dashboard</p>
                    <p class="text-white font-sans text-base">{name}<br></br>Welcome!</p>
                    <a href={params.id + '/checkin'} target="_blank">
                        <button class="btn btn-secondary">Check-in</button>
                    </a>
                </aside>
                <div class="rounded-lg col-start-3 col-span-4  bg-yellow-300  p-3">
                    <Diet />
                </div>
                <div class="rounded-lg col-span-5 bg-slate-200 p-3">
                    <WorkoutPlan />
                </div>
                <div class="rounded-lg col-start-3 col-span-9 bg-blue-200  p-3">
                    <Attendence />
                </div>

            </div>

        </body >
    );
}

export default Client;

