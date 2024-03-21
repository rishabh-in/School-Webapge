import "../../styles/footer.css"
import logo from "../../public/static/logo.png"
import {Link} from 'react-router-dom'

const Footer = () => {

  return (
      <div className="parent-footer-wrapper">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-logo-container">
              <img className="footer-logo-img" src={logo} alt="Footer Logo" />
            </div>
              <div className="school-details">
                <p className="school-name">DBTR National Higher Secondary School</p>
                <p className="school-motto">Virtuousness is Life</p>
                <p className="school-est">Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.</p>
              </div>
              <div className="quick-links">
                <p className="section-title">QUICK LINKS</p>
                <ul>
                  <li><Link to="/admission">Admissions</Link></li>
                  <li><Link to="/alumni">Alumni association</Link></li>
                  <li><Link to="donate">Donate</Link></li>
                  <li><Link to="events">Events</Link></li>
                </ul>
              </div>
              <div className="contact-info">
                <p className="section-title">CONTACT</p>
                <p>DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai, Tamilnadu – 609001</p>
                <p>+91.436.422.3272</p>
                <p>contact@nationalhighschool.in</p>
              </div>
              <div className="donate-section">
                <p>Big or small, you can make an impact.</p>
                <button className="btn-donate">Donate <span className="heart">♥️</span></button>
              </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-first-half">
            </div>
            <div className="credit">
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;