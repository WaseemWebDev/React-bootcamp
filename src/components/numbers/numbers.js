import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const Counters = () => {
    return (
        <Container fluid className="bg-primary text-white p-5">
            <Row className="numbers  text-center" >
                <Col lg={3}>
              <h3>Total Students</h3>
                    <CountUp  delay={2} end={200} />
                </Col>
                <Col lg={3}>
                <h3>Total Courses</h3>
                    <CountUp  delay={2} end={10} />
                </Col>
                <Col lg={3}>
                <h3>Projects</h3>
                    <CountUp delay={2}  end={4} />
                </Col>
                <Col lg={3}>
                <h3>Classes per week</h3>
                    <CountUp delay={2}  end={4} />
                </Col>
            </Row>
        </Container>
    );
};
export default Counters;