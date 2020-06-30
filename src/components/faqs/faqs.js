import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import faqs from "./faq.jpg";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Faqs() {
  const classes = useStyles();

  return (
    <Container fluid>
    <br/><br/>
      <center><h2>Frequently asked questions</h2></center>
      <Row className="text-center  justify-content-center ">
     
        <Col lg={5}>
        <br/> <br/> <br/> <br/>
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <h6>What is React?</h6>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  React is javascript library for creating user interfaces
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                <h6>React is easy or difficult?</h6>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                   It is easy to learn 
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                <h6>How much time it takes to master it?</h6>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  It depend on person but it takes 2 months to master it approx
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Col>
        <Col lg={6}>
          <img src={faqs} className="faq-img img-fluid"  alt="faqs" />
        </Col>
      </Row>
    </Container>
  );
}
export default Faqs;
