import { useState } from "react";
import classes from "./App.module.css";
import Nav from "./Nav";
import Icon from "./Icon";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { Link } from "react-scroll";

function App() {
  const [active, setActive] = useState(null);

  const techs = [
    {
      id: "react",
      class: classes.iconReact,
      icon: <FaReact size={50} />,
      text: "Cuento con más de un año de experiencia desarrollando aplicaciones con React, donde he adquirido un dominio sólido en el uso de hooks nativos y la creación de hooks personalizados para optimizar la lógica y mejorar la reutilización de código. Me destaco en la construcción y estructuración de componentes reutilizables, aplicando buenas prácticas de diseño y manteniendo la escalabilidad de los proyectos. Además, estoy familiarizado con el manejo de estados globales, integración con APIs, y la organización de proyectos en base a arquitecturas claras y mantenibles. Mi enfoque se centra en escribir código limpio, reutilizable y eficiente, siempre buscando un balance entre la experiencia del usuario y la calidad técnica del producto.",
    },
    {
      id: "js",
      class: classes.iconJs,
      icon: <RiJavascriptFill size={50} />,
      text: "Tengo experiencia sólida trabajando con JavaScript moderno (ES6+), aplicando conceptos avanzados como asincronía con promesas y async/await, manejo de eventos, manipulación del DOM y programación orientada a objetos. Lo utilizo como base para construir aplicaciones dinámicas y escalables, aplicando buenas prácticas y patrones que mejoran la mantenibilidad del código.",
    },
    {
      id: "css",
      class: classes.iconCss,
      icon: <FaCss3Alt size={50} />,
      text: "Domino CSS3 para la creación de interfaces modernas, responsivas y atractivas, utilizando Flexbox, Grid y animaciones para mejorar la experiencia del usuario. Me enfoco en mantener un diseño limpio y accesible, cuidando la coherencia visual en cada proyecto.",
    },
    {
      id: "node",
      class: classes.iconNode,
      icon: <DiNodejs size={50} />,
      text: "Con Node.js he trabajado en la construcción de APIs RESTful, gestión de rutas y middleware, así como integración con bases de datos y servicios externos. Tengo experiencia estructurando proyectos backend eficientes y escalables, aplicando principios de modularidad y buenas prácticas de desarrollo.",
    },
    {
      id: "sql",
      class: classes.iconSql,
      icon: <FaDatabase size={50} />,
      text: "Manejo SQL para la administración de bases de datos relacionales, con experiencia en la creación y optimización de consultas, diseño de tablas, procedimientos almacenados y gestión de datos. Estoy familiarizado con SQL Server, lo que me permite trabajar con entornos empresariales.",
    },
    {
      id: "mongo",
      class: classes.iconMongo,
      icon: <DiMongodb size={50} />,
      text: "Con MongoDB he desarrollado aplicaciones que requieren flexibilidad en el manejo de datos no relacionales. Tengo experiencia en la definición de esquemas, consultas eficientes y modelado de documentos, integrándolo con Node.js para aplicaciones modernas basadas en JavaScript.",
    },
  ];

  return (
    <>
      <Nav />
      <div className={classes.principal}>
        <h1 className={classes.h1pri}>Software Developer</h1>
        <Icon />
      </div>
      <div className={classes.secundario}>
        <h2 className={classes.h2pri} id="Experiencia">
          Experiencia
        </h2>
        <div className={classes.techcontainer}>
          <div className={classes.techicons}>
            {techs.map((t) => (
              <div
                key={t.id}
                className={t.class}
                onClick={() => setActive(active === t.id ? null : t.id)}
              >
                {t.icon}
              </div>
            ))}
          </div>

          {active && (
            <p key={active} className={classes.techtext}>
              {techs.find((t) => t.id === active)?.text}
            </p>
          )}
        </div>
      </div>
      <Link id="about" className={classes.aboutSection}>
        <h2 className={classes.h2pri}>Acerca de mí</h2>

        <div className={classes.aboutContainer}>
          <div
            className={`${classes.aboutCard} ${
              active === "infra" ? classes.activeCard : ""
            }`}
            onClick={() => setActive(active === "infra" ? null : "infra")}
          >
            <div className={classes.aboutHeader}>
              <h3>🧰 Técnico en Infraestructura Informática</h3>
              <span>{active === "infra" ? "▲" : "▼"}</span>
            </div>

            {active === "infra" && (
              <div className={classes.aboutContent}>
                <p>
                  Soy técnico en infraestructura informática con 2 años de
                  experiencia en el sector. Mi trayectoria profesional abarca
                  una amplia gama de habilidades técnicas y un fuerte enfoque en
                  la solución de problemas.
                </p>
                <ul>
                  <li>Administración y configuración de sistemas de CCTV.</li>
                  <li>Configuración de switches y puntos de acceso (AP).</li>
                  <li>
                    Gestión de firewalls Fortinet y administración de Tenant.
                  </li>
                  <li>Soporte técnico helpdesk.</li>
                </ul>
                <p>
                  También tengo experiencia como{" "}
                  <b>Técnico en Hardware (3 meses)</b>, realizando mantenimiento
                  y reparación de equipos informáticos.
                </p>
                <p>
                  <b>Habilidades:</b> Redes, seguridad, SQL Server, Veeam,
                  vCenter y VMware.
                </p>
              </div>
            )}
          </div>
          <div
            className={`${classes.aboutCard} ${
              active === "dev" ? classes.activeCard : ""
            }`}
            onClick={() => setActive(active === "dev" ? null : "dev")}
          >
            <div className={classes.aboutHeader}>
              <h3>💻 Desarrollador Full-Stack</h3>
              <span>{active === "dev" ? "▲" : "▼"}</span>
            </div>

            {active === "dev" && (
              <div className={classes.aboutContent}>
                <p>
                  Actualmente me estoy formando como{" "}
                  <b>Desarrollador Full-Stack</b> en BIOS, con sólidos
                  conocimientos en el desarrollo de aplicaciones web modernas.
                </p>
                <ul>
                  <li>JavaScript, Node.js, HTML5, CSS3 y React.</li>
                  <li>Consumo de APIs mediante Axios.</li>
                  <li>Diseño y prototipado en Figma.</li>
                </ul>
                <p>
                  Combino mi experiencia en infraestructura con mis habilidades
                  en desarrollo para ofrecer soluciones integrales, tanto a
                  nivel backend como frontend.
                </p>
                <p>
                  Mi objetivo es seguir creciendo como profesional, integrando
                  la visión del técnico en infraestructura con la del
                  desarrollador.
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default App;
