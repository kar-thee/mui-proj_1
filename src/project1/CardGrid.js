import React from "react"
import {Card,CardHeader,CardMedia,CardContent,CardActions, Typography, IconButton} from "@material-ui/core"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { makeStyles } from "@material-ui/core/styles";

// import info from "./info.json"
// console.log(info)
const useStyles = makeStyles( (theme) => ({
    root: {
        // [theme.breakpoints.down('md')]:{
        //     maxWidth: 345
        // },
        // height:'100%'
        // minHeight:'600px'
         height: '100%',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'spaceBetween'
       
      },
    action:{
        marginLeft:'auto' // to place the button to the very end of the line/flex [box]
    },
    cardImg:{
        // height:'0',
        // paddingTop:'56.25%' //for 16:9 aspect ratio learnt from mui docs
        height:'300px'
    },
    content:{
            //    minHeight:'100px'
            flexGrow:1 //finally achieved same card height without disruptions
    }
    
}));

export default function CardGrid(props){
    const classes = useStyles();
    return(
        <>
        <Card className={classes.root}>
            <CardHeader
            title={props.title}
            subheader={props.subheader}
            action={
                <IconButton>
                    <AddShoppingCartIcon/>
                </IconButton>
                }
            
            />

            <CardMedia
            image={props.image}
            title={props.imgtitle}
            className={classes.cardImg}
            />
            {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}> */}
            <CardContent className={classes.content}>
                <Typography>
                {props.desc}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton className={classes.action}>
                <ArrowForwardOutlinedIcon/>
                </IconButton>
            </CardActions>
            {/* </div> */}
            
        </Card>
        </>
    );
}