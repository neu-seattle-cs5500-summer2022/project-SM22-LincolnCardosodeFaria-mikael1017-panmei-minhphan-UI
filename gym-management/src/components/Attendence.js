import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'


const Attendence = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Object();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            var cur = currentDate.toISOString().slice(0, 10);
            dateArray["\"" + cur + "\""] = getRandomInt(5);
            currentDate = currentDate.addDays(1);
        }
        console.log(dateArray);
        return dateArray;
    }

    var dates = getDates(new Date(), new Date().addDays(30));
    return (
        <div className='Attendence'>
            <h2>Attendence</h2>
            <LineChart data={dates} />
        </div>
    )
}

export default Attendence;