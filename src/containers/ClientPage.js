import React, { useState, useEffect } from 'react';
import WorkoutPlan from '../components/WorkoutPlan';
import Diet from '../components/Diet';
import Attendence from '../components/Attendence';

const Client = (user) => {
    const [name, setName] = useState("none user");
    const [photo, setPhoto] = useState("none user");

    useEffect(() => {
        setName("test User");
        setPhoto("../image/images.jfif");
    }, []);

    console.log("=========name=========", name);
    return (
        <body>
            <div class="flex place-content-center">
                <aside class="w-45 fixed left-0 top-0 h-screen bg-slate-700 p-10">
                    <h2 class="text-white text-4xl">Dashboard</h2>
                </aside>


                <main class="grid grid-cols-2 gap-4 place-content-center">
                    <div class="bg-yellow-300 p-10">
                        <Diet />
                    </div>
                    <div class="bg-purple-50 p-10">
                        <WorkoutPlan />
                    </div>
                    <div class="col-span-2 bg-blue-200 p-10">
                        <Attendence />
                    </div>

                </main>
            </div>
        </body>
    );
}

export default Client;

