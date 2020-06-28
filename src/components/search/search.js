import React from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

function Search() {
    return (
        <Container >
            <Row className="text-center card-row">
                <Col lg={12}  >
                    <Card className="shadow">
                        <Card.Header>Search Your Desire Course</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search Here"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Search Here</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>

    );
}
export default Search;