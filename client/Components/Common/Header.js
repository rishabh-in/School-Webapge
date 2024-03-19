import '../../styles/header.css';
import logo from '../../public/static/logo.png'

const Header = () => {
  return (
    <div className='header-container-wrapper'>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo}  alt='logo-png'/>
        </div>
        <div className="menu-items-container">
          <ul>
            <li>The School</li>
            <li>Academics</li>
            <li>Life @ DBTR</li>
            <li>Contact us</li>
            <button className='btn-csr'>csr</button>
            <button className='btn-donate'>Donate <span className="heart">♥️</span></button>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Header;