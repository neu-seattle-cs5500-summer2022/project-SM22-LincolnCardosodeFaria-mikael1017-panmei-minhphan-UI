import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Schedule from '../components/Schedule'
import WorkoutPlan from '../components/WorkoutPlan';
import Diet from '../components/Diet';
import Attendence from '../components/Attendence';
import Sidebar from '../components/Sidebar';
import DietLarge from '../components/Diet-Large';

const Client = props => {
    return (
        <div className="Client">
            <Sidebar />
            <Container>
                <Row>
                    <Col><Diet /></Col>
                    <Col><Schedule /></Col>
                    <Col><Attendence /></Col>
                </Row>
                <Row>
                    <Col><WorkoutPlan /></Col>
                </Row>
            </Container>
        </div>

    )
}

export default Client;