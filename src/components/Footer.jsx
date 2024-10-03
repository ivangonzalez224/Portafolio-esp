import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Iván Gonzalez</p>
      <ul className="footer-social">
        <li><a className="footer-link" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
        <li><a className="footer-link" href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer"><BsGithub /></a></li>
      </ul>
      <p id="footer-mail"><MdEmail />&nbsp;&nbsp;<a href="mailto:ivan.gonzalezr224@gmail.com"> Contacto</a></p>
    </footer>
  );
};

export default Footer;