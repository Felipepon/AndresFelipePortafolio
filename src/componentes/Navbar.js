import { AppBar, Toolbar, makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import logo from "../Images/logo2.png"
import { Link, animateScroll as scroll } from 'react-scroll';
import ErrorIcon from '@mui/icons-material/Error';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { OpenInNew } from '@material-ui/icons';
import { fontSize } from '@mui/system';

const links=[
  {
    id:"about", 
    text: "Acerca de mi",
    icon:<ErrorIcon fontSize="large" />
  },
  {
    id:"skills",
    text: "Habilidades",
    icon:<CodeIcon fontSize="large" />
  },
  {
   id:"projects",
   text: "Proyectos",
   icon:<DnsIcon fontSize="large" /> 
  },
  {
    id:"contact",
    text:"Redes Sociales",
    icon: <FindInPageIcon fontSize="large" />
  },



]


const Navbar = () => {
  const classes =useStyles();
  const [open, setOpen]= useState(false)
  return (
    <>
      <AppBar position='sticky' className={classes.root}>
        <Toolbar className={classes.toolbar}>
         <img src={logo} className={classes.logo} alt="logo"></img>
          <List className={classes.Menu}>
           {
              links.map(({ id, text}, index) => (
               <Link key={index}
                 to={id}
                 spy={true}
                 activeClass="active"
                 smooth={true}
                 duration={500}
                 offset={-70} >
                 {text}
               </Link>
              ))
            }
          </List>
          <IconButton edge="end" className={classes.menubutton} onClick={()=>setOpen(!open)} >
          <MenuIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)} >
            <IconButton onClick={()=>setOpen(false)} className={classes.closeIcon}>
              <CloseIcon fontSize="large"/>
            </IconButton>
            <Divider/>
            {
            links.map(({ id, text, icon}, index) => (
               <Link key={index}
                 className={classes.sidebar}
                 to={id}
                 spy={true}
                 activeClass="active"
                 smooth={true}
                 duration={500}
                 offset={-70} >
                 <ListItem component="h5" >
                  <span>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                  </span>{text}
                 </ListItem>
               </Link>
              ))
            }
        </Drawer>
   </>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right:0,
    zIndex:999,
  },
  toolbar: {
    display: "flex",
    justifyContent:"flex-start",
    alignItems:"center"
   
  },
  logo:{
    height:"5.5rem",
    objectFit: "contain",
    "&:hover":{
      cursor:"pointer"
    }

  },
  Menu: {
    [theme.breakpoints.down("sm")]: {
      display:"none"
    },
    
    "& a":{
      color:"#800000",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(4)
    },
    "& a:hover":{
      cursor: "pointer",
      color:"brow",
      borderBottom: "3px solid tomato",

    },

  },
  menubutton:{
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color:"#2ECC71",
      position: "absolute",
      top: 0,
      right: 10,
    }
  },
  closeIcon:{
   color: "#C0392B",
   position: "absolute",
   top: 0,
   right: 10
  },
  sidebar:{
    width: "40vw",
    [theme.breakpoints.down("sm")]:{
      width:"60vw",
    },
    "& h5":{
      margin: theme.spacing(8, 0, 0,6),
      fontSize: "1.4rem",
      color: "#117A65",
      fontWeight: "bold",

    },
    "& h5:hover":{
      color: "#2980B9",
      cursor: "pointer"
    }
  }
}))

export default Navbar