import './Footer.css';

function Footer() {

  return (
    <div className='footer'>
      <div className='footer-links'>
          <a href='https://github.com/ahmad-masud' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github icon"></i>
          </a>
          <a href='https://www.facebook.com/AhmadMasud25' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook icon"></i>
          </a>
          <a href='https://www.linkedin.com/in/ahmadmasud/' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin icon"></i>
          </a>
          <a href='https://twitter.com/_AhmadMasud' className='footer-link' target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-twitter icon"></i>
          </a>
      </div>
      <span className='footer-copyright-text'>
        Designed and Programmed by Ahmad Masud ©
      </span>
    </div>
  );
}

export default Footer;
