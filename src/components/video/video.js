import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Video() {
    return (
        <Container   style={{background:"#F5F5F5"}}  fluid>
        <br/>
            <Row className="text-left ">
             <Col lg={4} >
             <br/>
           <center><h2>Piac </h2></center>
           <br/>
           <p className="piac-text">
           The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by 
           adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution.
            We want Pakistan tobecome a global hub for AI, data science, cloud native computing, edge c omputing,
             blockchain, augmented reality, and internet of things.
          
           </p>
           <button className="btn btn-primary">Read More</button>
             </Col>
                <Col lg={8}  >
                    <iframe className=" video shadow fluid" style={{height:"500px",width:"100%"}}  title="piac" src="https://www.youtube.com/embed/sfwvcpB8HyM"
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                        </iframe>

                </Col>


            </Row>
        </Container>

    );
}
export default Video;