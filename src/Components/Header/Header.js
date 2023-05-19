import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-title'>
                    <img src={process.env.PUBLIC_URL + '/Logo.png'} alt='Logo' className='header-title-logo'></img>
                    <span className='header-title-text'>RATEROVER</span>
                </div>
            </div>
        </div>
    )
}

export default Header