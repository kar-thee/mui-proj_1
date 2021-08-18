
import {Grid, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>({
    mainSub:{
        height:'450px',
        backgroundImage: "url(https://cdn.pixabay.com/photo/2017/10/30/18/44/hacking-2903156_1280.jpg)",
        color:theme.palette.common.white,
        backgroundPosition:'center center',
        padding:'15px'
        },
   
}));
export default function MainGrid(){
    const classes=useStyles()
    return(
        <>
        <Grid container className={classes.mainSub}>
            <Grid item fluid>
                <Typography component='h2' variant='h5'>
                    Hello Folks!
                </Typography>
                <Typography component='h2' variant='body1' paragraph>You can code Your First Web Project in 90 Days .Learn with Industry Qualified Professionals...
                </Typography>
            </Grid>
        </Grid>
        </>
    );
}