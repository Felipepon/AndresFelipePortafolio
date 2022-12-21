import vue from "../Images/vue.png"
import node from "../Images/node.png"
import java from "../Images/js.png"
import html from "../Images/html.png"
import django from  "../Images/django.png"
import mysql from  "../Images/mysql.png"
import heroku from  "../Images/heroku.png"
import flex from  "../Images/flex.png"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { Typography, makeStyles, Paper } from '@material-ui/core'
import StarRating from "./StarRating"



const Tecno = () => {
    const classes = useStyles()
    const skills= [
        {
            year:"1",
            src: vue,
            title: "Vue.js",
            star: 4,
        },
        {
            year:"2",
            src: node,
            title: "Node.js",
            star :4,
        },
        {
            year:"3",
            src: java,
            title: "JavaScript",
            star :3,
        },
        {
            year:"4",
            src: html,
            title: "HTML",
            star: 3,
        },
        {
            year:"5",
            src: django,
            title: "Django",
            star: 4,
        },
        {
            year:"6",
            src: mysql,
            title: "MySQL",
            star: 5,
        },
        {
            year:"7",
            src: heroku,
            title: "Heroku",
            star: 5,
        },
        {
            year:"8",
            src: flex,
            title: "Flexsim",
            star: 5,
        },
          
    
    ];

  return (
    <Timeline align="left">
     {
        skills.map(({year, src, title, star}, index) =>(
            <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography variant="h6" color="textSecondary" >
                        {year}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                    <img src={src} alt={title} className={classes.logo}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={4} className={classes.paper}>
                      <Typography variant="h6" component="h1"> 
                      {title}
                      </Typography>
                      <StarRating star={star}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        ))
     }
    </Timeline>
  )
}
const useStyles = makeStyles((theme) => ({
    logo :{
        width: "75px"
    
    },
    paper:{
        padding:"6px 16px",
        maxWidth:"250px"
    }
    
}))


export default Tecno