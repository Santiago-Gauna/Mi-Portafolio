import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.profile}>
        <img 
          src="public/IMG_0298.PNG"
          alt="Placeholder de Perfil"
          className={classes.profileimg} 
        />
        <span className={classes.profilename}>Santiago Gauna</span>
      </div>

      <nav className={classes.navlinks}>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#acerca-de-mi">Acerca de mí</a>
      </nav>
    </header>
  );
};

export default Nav;