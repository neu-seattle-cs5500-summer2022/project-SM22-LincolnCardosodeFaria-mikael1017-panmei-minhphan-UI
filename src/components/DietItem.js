import React, { useState } from 'react';

const DietItem = ({ title, content }) => {
    return (

        <div className="accordion-item">
            <div>{title}</div>
            <div>{content}</div>
        </div>

    );
};

export default DietItem;