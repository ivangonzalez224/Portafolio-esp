import '../../assets/styles/about.css';

const About = () => (
  <div className="about-main" id="about">
    <span id="about-title">SOBRE MÍ</span>
    <span id="about-subtitle">Ingeniería de soluciones con mentalidad de producto</span>
    <div className="about-content">
      <div id="about-presentation">
        <span>Perfil Profesional</span>
        <p>
          Soy <strong>Ingeniero Full Stack Senior</strong> y <strong>Fundador Técnico</strong> con 
          un historial comprobado construyendo aplicaciones móviles y web que llegan a usuarios reales 
          en múltiples países. Mi enfoque va más allá del código: diseño arquitecturas que impulsan 
          el crecimiento del negocio y optimizan la experiencia del usuario, integrando 
          <strong> Inteligencia Artificial</strong> y sistemas backend robustos en productos que 
          la gente realmente usa.
        </p>
        <p>
          He liderado ciclos completos de producto de forma independiente — desde la concepción 
          técnica y la arquitectura hasta el lanzamiento, la escalabilidad y la estrategia de 
          crecimiento. Si se trata de una app móvil para un mercado especializado o una plataforma 
          web de alto tráfico, me aseguro de que cada decisión técnica agregue valor real al negocio.
        </p>
      </div>
      <div id="about-skills">
        <span>Stack Tecnológico Principal</span>
        <ul>
          <li><strong>Mobile:</strong> React Native (Bare Workflow & Expo, iOS & Android)</li>
          <li><strong>Frontend:</strong> React.js, TypeScript, JavaScript (ES6+), TailwindCSS</li>
          <li><strong>Backend:</strong> Python (FastAPI), Ruby on Rails, PHP</li>
          <li><strong>Bases de datos:</strong> PostgreSQL, MySQL, Diseño relacional avanzado</li>
          <li><strong>IA & LLMs:</strong> Integración de modelos multimodales (VLM), Memoria conversacional</li>
          <li><strong>Herramientas:</strong> Git/GitHub, Docker, Jest, CI/CD</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;