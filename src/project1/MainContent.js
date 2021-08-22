import React from "react"
import {Grid
    // , 
    // Typography
} from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles";
import MainGrid from "./MainGrid"
import CardGrid from "./CardGrid"
import info from "./info.json"

// const useStyles = makeStyles((theme) => ({
//     lgitem:{
//         backgroundColor:'grey'
//     },
//     mditem:{
//         backgroundColor:'green'
//     },
//     smitem:{
//         backgroundColor:'aqua'
//     }
// }));

export default  function MainContent(){
    // const classes=useStyles();
    return(
        <>
        <Grid container  spacing={4}>
            <Grid item xs={12} lg={12} >
            <MainGrid/>
            </Grid>
        </Grid>
            
              
        

            {/* <Grid item xs={12} sm={6} >
            <CardGrid/>
            </Grid> */}
{/* 
             <Grid item xs={12} sm={6} >
            <CardGrid/>
             <Typography className={classes.mditem}>Hello sm this is fine</Typography> 
            </Grid>  */}

              {/* <Grid item xs={12}  sm={6} md={4}>
             <CardGrid/> 
              <Typography className={classes.smitem}>Hello "xs={12} sm={6} md={4}"this is fine</Typography>
              </Grid> */}

             {/* <Grid item xs={12}  sm={6} md={4}>
             <CardGrid/>
              <Typography className={classes.smitem}>Hello "xs={12} sm={6} md={4}"this is fine</Typography> 
             </Grid> */}
             {/*
            //  <Grid item xs={12}  sm={6} md={4}>
            //  <CardGrid/>
            //   <Typography className={classes.smitem}>"Hello xs={12} sm={6} md={4}"this is fine</Typography> 
            //  </Grid> */}

            <Grid container spacing={3} style={{marginTop:'2%'}}>
                     {info.map( ({title,subheader,image,imgtitle,desc}) => {
                    return(
                        <Grid item xs={12} sm={6} md={4}  key={subheader}
                        // alignItems="stretch"
                        >
                        <CardGrid
                           
                            title={title}
                            subheader={subheader}
                            image={image}
                            imgtitle={imgtitle}
                            desc={desc}
                         /> 
                     </Grid>
                    )
                })}
            
             </Grid>
               
            </>
        
        
    );
}