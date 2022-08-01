import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

import Schedule from '../components/Schedule'
import WorkoutPlan from '../components/WorkoutPlan';
import Diet from '../components/Diet';
import Attendence from '../components/Attendence';
import Sidebar from '../components/Sidebar';

const Client = (user) => {
    const [name, setName] = useState("none user");
    const [photo, setPhoto] = useState("none user");

    useEffect(() => {
        setName("test User");
        setPhoto("../image/images.jfif");
    }, []);

    console.log("=========name=========", name);
    return (
        <div className="Client">
            <Sidebar user={user} name={name} photo={photo} />
            <Container>
                <Row>
                    <Col><Diet /></Col>
                    <Col><WorkoutPlan /></Col>
                </Row>
                <Row>
                    <Col><Schedule /></Col>
                    <Col><Attendence /></Col>
                </Row>
            </Container>
        </div>

    )
}

export default Client;