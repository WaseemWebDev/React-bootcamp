import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Courses() {
    const useStyles = makeStyles({
        root: {
            maxWidth: 500,
            marginBottom:20
        },
        media: {
            height: 140,
        },
    });
    const classes = useStyles();
    return (
        <Container fluid className=" p-5 " style={{borderRadius:"23% 18% 0% 0% / 10% 10% 10% 10% ",backgroundColor:"#1976D2"}} >
            <center><h1 className="text-white">Courses We Offer</h1></center>
            <br /> <br />
            <Row >
                <Col lg={4} >
                    <Card className={`shadow ${classes.root}`}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://miro.medium.com/max/3840/1*XUgTtQ8XBOkqm0fmT7f-OQ.png"
                                title="Cloud Native Computing"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cloud Native Computing
                               </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    In cloud native computing we will learn about javascript technologies and we then we will learn
                                    how to deploy web applications on cloud
                               </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                           </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
                
                <Col lg={4} >
                    <Card className={`shadow ${classes.root}`}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://i.ytimg.com/vi/2EWDDUGNhKM/maxresdefault.jpg"
                                title="Artificial Intelligence"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Artificial Intelligence
                               </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    In cloud native computing we will learn about javascript technologies and we then we will learn
                                    how to deploy web applications on cloud
                               </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                           </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col lg={4} >
                    <Card className={`shadow ${classes.root}`}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://miro.medium.com/max/1024/1*4_X6RTfPE-pjGRc-5QSjdA.jpeg"
                                title="Cloud Native Computing"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Blockchain Development
                               </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    In cloud native computing we will learn about javascript technologies and we then we will learn
                                    how to deploy web applications on cloud
                               </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                           </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Courses;
