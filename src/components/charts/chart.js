import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import { Pie } from "react-chartjs-2";
import LineChart from "./line";



const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const Charts = () => {
	useEffect(()=>{
		AOS.init();
		},[])
  return (
    <Container>
      <br />
      <center>
        <h2>Charts</h2>
      </center>
      <br />
      <br />
      <Row className="numbers  text-center">
        <Col
          lg={6}
          data-aos="fade-right"
          data-aos-duration="1000"
         
        >
          <Pie height={170} data={data} />
        </Col>
        <Col lg={6}
		 data-aos="fade-left"
          data-aos-duration="1000">
          <LineChart />
        </Col>
      </Row>
    </Container>
  );
};
export default Charts;
