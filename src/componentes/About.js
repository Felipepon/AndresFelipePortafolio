
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import perfil from "../Images/Perfil.jpeg"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../Images/hoja vida Andres Uribe.pdf"


const About = ({title, blue, id}) => {
    const classes =useStyles();
  return (
        <div className={`${classes.section} ${blue && classes.sectionblue} `}>
            <div className={classes.sectioncontent} id={id}>
             <Typography variant="h3"> {title}</Typography>
             <Card className={classes.Card}>
                <CardMedia image={perfil} className={classes.media} title="picture" />
                    <CardContent className={classes.content}>
                        <TypeWriterEffect
                            text="Andres Felipe Uribe Tamayo"
                            textStyle={{fontSize:"2rem", fontWeight: "700Px", Color:"#2E4053"}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <TypeWriterEffect
                            text="Web Devloper and Industrial Engineer..."
                            textStyle={{fontSize:"1.2rem", fontWeight: "500Px"}}
                            startDelay={2700}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                        como puedes observar me gusta mucho la programación y el desarrollo de aplicaciones web, aunque este estudiando ingeniería industrial el mundo de la programación me llamo la atención, tengo habilidades para el desarrollo de páginas web como full-stack o la gestión de base de datos, tengo dominio en el ingles y manejo en Excel; si quieres conocer más acerca de mi puedes dirigirte a mis redes sociales.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href= {pdf } download>
                                Descargar hoja de vida
                            </a>
                        </Button>
                       
                    </CardActions>
             </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: "100vh",
  
    },
    sectionblue: {
        background: "#00416A",
        color:"#fff",

    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    Card:{
        height:"70vh",
        display:"flex",
        marginTop: theme.spacing(6), 
        position: "relative", 
    },
    media:{
        width: "1050px",
        height: "auto",
        objectFit: "cover",
        borderRadius:"10px",
        margin: theme.spacing(5),
    },
    content:{
        marginTop: theme.spacing(2),
        "& h6":{
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")] :{
                display:"none",
            }
        }
    },
    pdfbutton:{
        position: "absolute",
        bottom: "2rem",
        right: "4rem",
        [theme.breakpoints.down("sm")]:{
            bottom: "2rem",
            right:"1rem"
        },
        backgroundColor:"#2471A3",
        "& a":{
            color:"#fff",
            textDecoration: "none",
            fontWeight:900,
        },
        "& a:hover":{
            color:"#2471A3",
         },  
    }
}))

export default About