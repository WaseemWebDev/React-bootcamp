import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ComputerIcon from "@material-ui/icons/Computer";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AOS from 'aos';

function TimelineSection() {
  useEffect(()=>{
    AOS.init();
},[])
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "6px 16px",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();
  return (
    <Container fluid className="bg-light">
      <br />
      <center><h2>Timeline</h2></center>
      <br />
      <Row className="text-left  justify-content-center">
        <Col lg={7}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
               
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <ComputerIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper} data-aos="fade-left"  data-aos-duration="1000">
                  <Typography>
                    <img
                      className="rounded"
                      src="https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg"
                      fluid
                      height="200"
                      alt="reactjs"
                    />
                  </Typography>
                  <Typography variant="h6" component="h1">
                    React
                  </Typography>
                  <Typography>
                    Best javascript framework avaiable right now
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
               
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper} data-aos="fade-left"  data-aos-duration="1000">
                <Typography>
                <img
                      className="rounded"
                      src="https://gisgeography.com/wp-content/uploads/2016/03/gis-programming-in-python.png"
                      fluid
                      height="200"
                      alt="reactjs"
                    />
                    </Typography>
                  <Typography variant="h6" component="h1">
                 
                  
                    Code
                  </Typography>
                  <Typography>Because it&apos;s awesome!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper} data-aos="fade-right"  data-aos-duration="1000">
                <Typography>
                <img
                      className="rounded"
                      src="https://i.dlpng.com/static/png/4298969-sleep-scene-vector-hand-computer-boy-png-and-vector-for-free-computer-boy-png-650_672_preview.webp"
                      fluid
                      height="200"
                      alt="reactjs"
                    />
                </Typography>
                  <Typography variant="h6" component="h1">
                  
                    Sleep
                  </Typography>
                  <Typography>Because you need rest</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper} data-aos="fade-right"  data-aos-duration="1000">
                <Typography>
                <img
                      className="rounded"
                      src="https://img.freepik.com/free-vector/programmer-s-workplace-writing-code-laptop_80328-238.jpg?size=626&ext=jpg"
                      fluid
                      height="200"
                      alt="reactjs"
                    />
                
                </Typography>
                  <Typography variant="h6" component="h1">
                    Repeat
                  </Typography>
                  <Typography>Because i love coding!</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>
    </Container>
  );
}
export default TimelineSection;
