import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactLogo from './reactLogo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
function Footer() {

    return (
        <Container fluid >
            <br /><br />
            <Row className="text-center text-white  " style={{ backgroundColor: "#212121", height: "350px" }}>

                <Col lg={12}>
                    <img src={reactLogo} className="fluid" height="130" alt="logo" />
                    <br />
                   <GitHubIcon className="github" />
                   
                    <br /><br />
                    <span><h6>Developed By:</h6><h4>Waseem Sohail</h4></span>

                </Col>
            </Row>
        </Container>
    );
}
export default Footer;
