import '../../assets/styles/Headline.css';
import myPic from '../../assets/images/myPic.png';
import myLinkedin from '../../assets/images/myLinkedin.png';
import myGithub from '../../assets/images/myGithub.png';
import myGmail from '../../assets/images/myGmail.png';

const Headline = () => (
  <div className="head-main" id="home">
    <div id="head-presentation">
      <div className="head-imgDiv">
        <img className="head-myPic" src={myPic} alt="My photo" />
      </div>
      <div>
        <span id="head-hello">¡Hola! </span>
        <span> 👋 </span>
      </div>
      <div>
        <span>Soy </span>
        <span id="head-name">Iván Gonzalez,</span>
      </div>  
      <span>
        <strong>Ingeniero Full Stack Senior</strong> & <strong>Desarrollador de Producto</strong> — construyo aplicaciones móviles y web de alto rendimiento impulsadas por IA. 🚀
      </span>
      <span>
        Me especializo en arquitecturas escalables y productos digitales end-to-end, 
        combinando una sólida ingeniería backend con experiencias móviles que los usuarios 
        realmente disfrutan.
      </span>
      <div className="head-imgDiv head-imgSocial">
        <a className="socialLinks" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer">
          <img className="head-mySocial" src={myLinkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer">
          <img className="head-mySocial" src={myGithub} alt="Github" />
        </a>
        <a href="mailto:ivan.gonzalezr224@gmail.com" target="_blank" rel="noreferrer">
          <img className="head-mySocial" src={myGmail} alt="Gmail" />
        </a>
      </div>
    </div>
    <div id="head-photo"></div> 
  </div>
);

export default Headline;