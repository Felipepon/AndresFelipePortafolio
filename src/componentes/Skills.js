import { makeStyles, Typography } from '@material-ui/core'
import Tecno from './Tecno';


const Skills = ({title, dark, id}) => {
    const classes =useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionblue} `}>
            <div className={classes.sectioncontent} id={id}>
             <Typography variant="h3"> {title}</Typography>
                <Tecno/>
            </div>
        </div>
   )
}

const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: "100vh",
  
    },
    sectionblue: {
        background: "#283747",
        color:"#F4F6F7  ",

    },
}))

export default Skills