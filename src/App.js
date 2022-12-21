import { makeStyles } from "@material-ui/core";
import Navbar from "./componentes/Navbar";
import About from "./componentes/About";
import Skills from "./componentes/Skills";
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";


function App() {
  const classes =useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title="Acerca de mi" id="about" blue={true} />
      <Skills title="Habilidades" id="skills" dark={true} />
      <Projects title="Proyectos" id="projects" dark={true} />
      <Contact  title="Redes Sociales" id="contact" blue={true} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root :{

  }
}))

export default App;
