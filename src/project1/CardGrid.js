import React from "react"
import {Card,CardHeader,CardMedia,CardContent,CardActions, Typography, IconButton} from "@material-ui/core"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) => ({
    action:{
        marginLeft:'auto'
    },
    cardImg:{
        // height:'0',
        // paddingTop:'56.25%' //for 16:9 aspect ratio learnt from mui docs
        height:'300px'
    }
    
}));

export default function CardGrid(){
    const classes = useStyles();
    return(
        <>
        <Card className={classes.root}>
            <CardHeader
            title="FrontEnd Masters"
            subheader="HTML,CSS and JS"
            action={
                <IconButton>
                    <AddShoppingCartIcon/>
                </IconButton>
                }
            />

            <CardMedia
            image="https://wallpapercave.com/wp/wp4974475.jpg"
            title="FrontEnd Masters Course"
            className={classes.cardImg}
            />
            <CardContent>
                <Typography>
                    Learn To Code Basic Static sites to Fully Functional Dynamic Websites using JAVASCRIPT along with HTML,CSS and Bootstrap   
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton className={classes.action}>
                <ArrowForwardOutlinedIcon/>
                </IconButton>
            
            </CardActions>
        </Card>
        </>
    );
}