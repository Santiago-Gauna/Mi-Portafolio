import classes from "./Nav.module.css";
import img from "./assets/IMG_0298.PNG";
import {Link} from 'react-scroll'
const Nav = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.profile}>
        <img src={img} className={classes.profileimg} alt="Foto de Perfil" />
        <span className={classes.profilename}>Santiago Gauna</span>
      </div>

      <nav className={classes.navlinks}>
        <Link to="Experiencia" smooth={true} duration={600}>
          Experiencia
        </Link>
        <a href="#proyectos">Proyectos</a>
        <a href="#acerca-de-mi">Acerca de mí</a>
      </nav>
    </header>
  );
};

export default Nav;
