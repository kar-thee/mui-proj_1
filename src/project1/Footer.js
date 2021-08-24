import { Paper, Typography,Button } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerPaper:{
        display:'flex',
        padding:theme.spacing(1),
        paddingBottom:theme.spacing(3),
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
            
        }
    },
    footertag:{
        paddingTop:theme.spacing(3),
        // paddingBottom:theme.spacing(2)
    },
    footerItem:{
        padding:theme.spacing(3)
    }
}))
 const Footer =() =>{
     const classes = useStyles();
    return(
        <>
        <footer className={classes.footertag}>
            <Paper className={classes.footerPaper} variant="outlined">
                <Typography variant='h6'className={classes.footerItem}>
                   <Button>Insane systems</Button>
                </Typography>
                <Typography variant='subtitle1' color='textSecondary' className={classes.footerItem}>
                😍Built with Material-Ui
                </Typography>
              <span className={classes.footerItem}>Copyrights @  {new Date().getFullYear()} </span>
            </Paper>
            
        </footer>
        </>
    );
}

export default Footer;