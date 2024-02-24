import './Footer.css';

function Footer() {

  return (
    <div className='footer'>
      <div className='footer-links'>
          <a aria-label='github' href='https://github.com/ahmad-masud' className='footer-link' target="_blank" rel="noreferrer">
            <i className="bi bi-github icon"></i>
          </a>
          <a aria-label='linkedin' href='https://www.linkedin.com/in/ahmadmasud/' className='footer-link' target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin icon"></i>
          </a>
          <a aria-label='mail' href='mailto:ahmadmasud25@hotmail.com' className='footer-link' target="_blank" rel="noreferrer">
            <i className="bi bi-envelope-fill icon"></i>
          </a>
      </div>
      <span className='footer-copyright-text'>
        Designed and Programmed by Ahmad Masud ©
      </span>
    </div>
  );
}

export default Footer;
