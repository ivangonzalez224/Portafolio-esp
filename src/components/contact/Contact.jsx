import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import '../../assets/styles/contact.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const form = document.forms['submit-form']
  const [showPopup, setShowPopup] = useState(false);

  const Popup = ({ message, onClose }) => {
    return (
      <div className="popup-container">
        <div className="popup-content">
          <p>{message}</p>
          <span>Gracias por ponerte en contacto.</span>
          <p>Te responderé lo antes posible.</p>
          <button className="popup-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // 
    const response = await fetch('https://script.google.com/macros/s/AKfycbxCKNrr_Fdrg1OX5sq8Uf7ezhpJucaeYlaMpfDN5XzgcKeiyv3LHN3lv_vRzI3nGOQizw/exec', {
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      // Success
      setShowPopup(true);
      setSubmitting(false);
      setFullName('');
      setEmail('');
      setMessage('');
    } else {
      // Error
      alert('Ocurrió un error al enviar tu mensaje. Por favor intenta nuevamente más tarde.');
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-main" id="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-left">
            <span>Siempre estoy interesado en escuchar sobre nuevos proyectos. Si te gustaría conversar, puedes contactarme directamente o llenar el formulario y te responderé pronto.
            </span>
            <div className="contact-mobile">
              <div className="mobileEmail">
                <span id="contact-emailUp">EMAIL</span>
                <span>ivan.gonzalezr224@gmail.com</span>
              </div>
              <div className="contact-social">
                <a className="social-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a className="social-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>
        </div>
            <form name="submit-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Nombre</label>
              <input
                type="text"
                className="contact-input"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required      
            />
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              className="contact-input"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required        
            />
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              className="contact-input"
              name="message"
              placeholder="Ingresa tu mensaje aquí..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required        
            />
            <button className="contact-submit-btn" type="submit" disabled={submitting}>
              {submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
        <div className="contact-right">
          <span id="contact-emailUp">Correo</span>
          <span>ivan.gonzalezr224@gmail.com</span>
          <div className="contact-social">
            <a className="social-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a className="social-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a>
          </div>
        </div>
      </div>
      {showPopup && <Popup message="Tu mensaje ha sido enviado! ✔️" onClose={() => setShowPopup(false)} />}
    </section>    
  );
};

Contact.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Contact;