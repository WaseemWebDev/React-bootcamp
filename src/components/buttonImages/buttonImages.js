import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


function ButtonImages() {
useEffect(()=>{
    AOS.init();
},[])
    const images = [
        {
            url: 'https://wallpapercave.com/wp/wp4923979.png',
            title: 'React js',
            width: '50%',
        },
        {
            url: 'https://images8.alphacoders.com/380/380534.png',
            title: 'Node js',
            width: '25%',
        },
        {
            url: 'https://www.businessworldit.com/wp-content/uploads/2018/03/3-Differences-Between-Artificial-Intelligence-and-Virtual-Intelligence-1.jpg',
            title: 'Ai',
            width: '25%',
        },
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
            
        },
        image: {
            position: 'relative',
            height: 270,
            [theme.breakpoints.down('xs')]: {
                width: '100% !important', // Overrides inline-style
                height: 100,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        focusVisible: {},
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            outline:"1px solid green",
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
    }));
    const classes = useStyles();
    return (
        <Container fluid >
       
            <Row className=" justify-content-center">
            
                <Col lg={9} data-aos="fade-up"  data-aos-duration="1000" >
                <h1>What We Will Learn</h1>
                <br/>
                    <div className={classes.root}>
                        {images.map((image) => (
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        ))}
                    </div>

                </Col>


            </Row>
        </Container>

    );
}
export default ButtonImages;