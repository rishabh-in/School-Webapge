import "../../styles/footer.css"
import logo from "../../public/static/logo.png"


const Footer = () => {

  return (
      <div class="parent-footer-wrapper">
        <div class="footer-wrapper">
          <div class="footer-top">
            <div class="footer-logo-container">
              <img class="footer-logo-img" src={logo} alt="Footer Logo" />
            </div>
              <div class="school-details">
                <p class="school-name">DBTR National Higher Secondary School</p>
                <p class="school-motto">Virtuousness is Life</p>
                <p class="school-est">Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.</p>
              </div>
              <div class="quick-links">
                <p class="section-title">QUICK LINKS</p>
                <ul>
                  <li><a href="#">Admissions</a></li>
                  <li><a href="#">Alumni association</a></li>
                  <li><a href="#">Donate</a></li>
                  <li><a href="#">Events</a></li>
                </ul>
              </div>
              <div class="contact-info">
                <p class="section-title">CONTACT</p>
                <p>DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai, Tamilnadu – 609001</p>
                <p>+91.436.422.3272</p>
                <p>contact@nationalhighschool.in</p>
              </div>
              <div class="donate-section">
                <p>Big or small, you can make an impact.</p>
                <button class="btn-donate">Donate <span class="heart">♥️</span></button>
              </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-bottom-first-half">
            </div>
            <div class="credit">
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;