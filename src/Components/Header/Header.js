import './Header.css'
import Logo from '../../Images/Logo.png'

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-title'>
                    <img src={Logo} alt='Logo' className='header-title-logo'></img>
                    <span className='header-title-text'>Currency Converter</span>
                </div>
                <div className='header-links'>
                    <a href='https://github.com/ahmad-masud' className='header-link' target='_blank'><i className='fa-brands fa-github'></i></a>
                    <a href='https://www.linkedin.com/in/ahmadmasud/' className='header-link' target='_blank'><i className='fa-brands fa-linkedin'></i></a>
                    <a href='https://twitter.com/_AhmadMasud' className='header-link' target='_blank'><i className='fa-brands fa-square-twitter'></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header