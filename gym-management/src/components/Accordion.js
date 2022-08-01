import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

const Accordion = ({ title, content }) => {
    return (
        <Stack gap={5}>
            <div className="accordion-item">
                <div>{title}</div>
                <div>{content}</div>
            </div>
        </Stack>
    );
};

export default Accordion;