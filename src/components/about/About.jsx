import '../../assets/styles/about.css';


const About = () => (
  <div className="about-main" id="about">
    <span id="about-title">SOBRE MÍ</span>
    <span id="about-subtitle">Conoce más sobre mí</span>
    <div className="about-content">
      <div id="about-presentation">
        <span>
          Hello
        </span>
        <p>
          Soy Iván Gonzalez, desarrollador Full Stack apasionado por crear aplicaciones móviles y web que impulsan negocios y transforman experiencias. Ya sea para lanzar una marca, optimizar procesos o alcanzar nuevas audiencias, mi enfoque está en diseñar soluciones tecnológicas que generen impacto real y tangible.
        </p>
        <p>
          ¡Hagamos realidad tu próximo proyecto! Escríbeme en la sección de contacto o, si prefieres, podemos reunirnos para conversar sobre tus ideas y cómo puedo ayudarte a llevarlas al siguiente nivel.
        </p>
      </div>
      <div id="about-skills">
        <span>Skills</span>  
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TailwindCSS</li>
        </ul> 
        <ul>
          <li>React Native</li>
          <li>React.js</li>
          <li>TypeScript</li>
        </ul>
        <ul>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>Vite.js</li>
          <li>Jest</li>
        </ul> 
      </div>
    </div>  
  </div>
);

export default About;