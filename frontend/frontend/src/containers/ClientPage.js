import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Schedule from '../components/Schedule'
import WorkoutPlan from '../components/WorkoutPlan';
import Diet from '../components/Diet';
import Attendence from '../components/Attendence';
import Sidebar from '../components/Sidebar';

const Client = props => {
    return (
        <div className="Client">
            <Sidebar />
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