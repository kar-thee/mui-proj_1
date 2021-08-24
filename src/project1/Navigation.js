import React, { useEffect, useState } from "react"
import { Typography,Toolbar, Link, Box,AppBar, Drawer, MenuItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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
        
         padding: theme.spacing(3),
        // [theme.breakpoints.down("xs")] : {
        //     flexDirection:'column'
        // }
    },
    menuBox:{
         
        // justifyContent:'space-between',
        //     [theme.breakpoints.down("xs")] : {
        //     display:'flex',
        //     flexDirection:'column'
        // } 
        //since using responsive navbar(mobileview togglebar) we dont need to make it as column
    },
    menuButton: {
        marginRight: theme.spacing(2),
      }
    }));



export default function NavigationBar() {
    const [state,setState] = useState({
        mobileView:false
    });
    useEffect(()=>{
       const responivefun = () =>{

            window.innerWidth < 900 
            ? setState({mobileView:true})
            : setState({mobileView:false});
            
        };
        responivefun();
        // console.log(state)

        window.addEventListener('resize',() => responivefun())
    },[]);//componentDidMount Alternative

    

    const classes = useStyles()
    const {mobileView} =state;

    //DesktopView Function
    const DesktopView = () =>{
        return (
           
            <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} >
            Insane systems 
            </Typography >
            <Box className={classes.menuBox}>
            {["home","courses","sign_up"].map((menu) => (
                    <Link 
                    key={menu}
                    component="button"
                    variant="body1"
                    className={classes.menuitems}
                    color='inherit'
                    >
                    {menu.toUpperCase()}
                    </Link>
                ))}
            </Box>   
            </Toolbar>
           
        );
        
    }

    //MobileView Function
    const MobileView = () =>{
        const [drawer,drawerSwitch] = useState(null); //(!null ===true) weird Javascript
        const handleDrawer =() =>{
            drawerSwitch(!drawer);
        }
        return(
            <>
                <Toolbar>
                    <IconButton edge='start' color='inherit' onClick={handleDrawer} className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title}>
                    Insane systems 
                    </Typography>
                    <Drawer
                        open={drawer}
                        anchor="left"
                        onClose={handleDrawer}>
                            <Box>
                                {["home","courses","sign_up"].map((drawermenu) => {
                                    return (
                                    <MenuItem 
                                        key={drawermenu}
                                        component="button"
                                        variant="body1"
                                        // className={classes.menuitems}
                                        >
                                        {drawermenu.toUpperCase()}
                                    </MenuItem>);
                                })}
                            </Box>
                    </Drawer>
                </Toolbar>
            </>
        )
    }

    return(
        <>
         {/* <Container> */}
        <AppBar position='static'>
        {mobileView?<MobileView/>:<DesktopView/>}
        </AppBar>
        {/* </Container> */}
       </>
    );
}



