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
          <span>Gracias por contactarme.</span>
          <p>Tu mensaje fue recibido. Revisaré los detalles y te responderé a la brevedad.</p>
          <button className="popup-close-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // 
    const response = await fetch('https://script.google.com/macros/s/AKfycbxrECoeqSBaNOnRnTmugJYOiv8kmXnByAx-1rjBao1eFuQK2yAaFfSJ85xWT5mg2vROnw/exec', {
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
      alert('There was an error sending your message. Please try again later.');
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-main" id="contact">
      <h2>Contacto</h2>
      <div className="contact-content">
        <div className="contact-left">
          <span>
            Estoy disponible para nuevos proyectos y colaboraciones técnicas. 
            Si tienes algo en mente o simplemente quieres conversar sobre una idea, 
            escríbeme. Te respondo en menos de 24 horas.
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
            <label htmlFor="email">Email</label>
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
              placeholder="Cuéntame sobre tu proyecto o consulta..."
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
          <span id="contact-emailUp">EMAIL</span>
          <span>ivan.gonzalezr224@gmail.com</span>
          <div className="contact-social">
            <a className="social-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a className="social-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a>
          </div>
        </div>
      </div>
      {showPopup && <Popup message="¡Mensaje enviado con éxito! ✔️" onClose={() => setShowPopup(false)} />}
    </section>
  );
};

Contact.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Contact;