import React from "react"
import { Typography,Container,Toolbar, Link, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
// import { grey, orange } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    toolbar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        [theme.breakpoints.down("xs")]:{
            flexDirection:'column'
        }
    },
    title:{
        // padding: theme.spacing(1)
        fontWeight:'bold',
        letterSpacing:1.5
    },
    menuitems:{
        
         padding: theme.spacing(2),
        // [theme.breakpoints.down("xs")] : {
        //     flexDirection:'column'
        // }
    },
    menuBox:{
        display:'flex',
        justifyContent:'space-between',
            [theme.breakpoints.down("xs")] : {
            flexDirection:'column'
        }
    }
    }));



export default function NavigationBar() {
    const classes = useStyles()
    return(
        <>
        <Container>
            <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} >
            Insane systems
            </Typography >
            <Box className={classes.menuBox}>
            {["home","courses","sign_up"].map((menu) => (
                    <Link 
                    component="button"
                    variant="body1"
                    className={classes.menuitems}
                    >
                    {menu.toUpperCase()}
                    </Link>
                ))}
            </Box>   
            </Toolbar>
        </Container>
        </>
    );
}