import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-title'>
                    <img src={process.env.PUBLIC_URL + '/Logo.png'} alt='Logo' className='header-title-logo'></img>
                    <span className='header-title-text'>RATEROVER</span>
                </div>
                <div className='header-links'>
                    <a href='https://github.com/ahmad-masud' className='header-link' target='_blank' rel="noreferrer"><i className='fa-brands fa-github'></i></a>
                    <a href='https://www.linkedin.com/in/ahmadmasud/' className='header-link' target='_blank' rel="noreferrer"><i className='fa-brands fa-linkedin'></i></a>
                    <a href='https://ahmadmasud.xyz' className='header-link' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header