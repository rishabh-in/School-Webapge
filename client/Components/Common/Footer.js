import "../../styles/footer.css"
import logo from "../../public/static/logo.png"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { FETCH_FOOTER_DATA, STRIPE_BASE_URL } from "../../Constant/constant"
import Loading from "./Loading"

const Footer = () => {
  const [footerData, setFooterData] = useState();

  useEffect(() => {
    const fetchFooterData = async() => {
      const response = await fetch(FETCH_FOOTER_DATA);
      const json = await response.json();
      setFooterData(json.data);
    }
    fetchFooterData();
  }, [])
  
  if(!footerData) {
    return <Loading />
  }

  console.log(footerData);
  const {
    schoolName,
    schoolMotto,
    schoolEst,
    quickLinks,
    quickLink1,
    quickLink2,
    quickLink3,
    quickLink4,
    contact,
    address,
    number,
    email,
    text1,
    btnText,
    credits,
    sitemap,
    designedByText,
  } = footerData?.attributes;

  const footerLogo = footerData?.attributes.footerLogo?.data[0];
  const twitterIcon = footerData?.attributes.twitter?.data[0];
  const linkedInIcon = footerData?.attributes.linkedIn?.data[0];
  const instaIcon = footerData?.attributes.insta?.data[0];
  const facebookIcon = footerData?.attributes.facebook?.data[0];
  const youtubeIcon = footerData?.attributes.youtube?.data[0];
  const pepperContentLogo = footerData?.attributes.pepperContentLogo?.data[0];
  console.log("twitter", twitterIcon)
  return (
      <div className="parent-footer-wrapper">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-container">
                <img className="footer-logo-img" src={logo} alt="Footer Logo" />
              </div>
              <div className="school-details">
                  <p className="school-name">{schoolName}</p>
                  <p className="school-motto">{schoolMotto}</p>
                  <p className="school-est">{schoolEst}</p>
                </div>
            </div>
              <div className="quick-links">
                <p className="section-title">{quickLinks}</p>
                <ul>
                  <li><Link to="/admission">{quickLink1}</Link></li>
                  <li><Link to="/alumni">{quickLink2}</Link></li>
                  <li><Link to="donate">{quickLink3}</Link></li>
                  <li><Link to="events">{quickLink4}</Link></li>
                </ul>
              </div>
              <div className="contact-info">
                <p className="section-title">{contact}</p>
                <p>{address}</p>
                <p className="contact-phone">{number}</p>
                <p>{email}</p>
              </div>
              <div className="donate-section">
                <p>{text1}</p>
                <button className="footer-btn-donate"><Link>{btnText} <span className="heart">♥️</span></Link></button>
              </div>
          </div>
          <div className="footer-bottom">
            <div className="border-line"></div>
            <div className="footer-bottom-first-half">
              <div>
                <p>{credits}</p>
                <div>
                  <div></div>
                </div>
                <p>{sitemap}</p>
              </div>
              <div className="social-media-icons">
                <div>
                  <Link to="/"><img src={STRIPE_BASE_URL + twitterIcon.attributes.url} /></Link>
                  <Link to="/"><img src={STRIPE_BASE_URL + linkedInIcon.attributes.url} /></Link>
                  <Link to="/"><img src={STRIPE_BASE_URL + instaIcon.attributes.url} /></Link>
                  <Link to="/"><img src={STRIPE_BASE_URL + facebookIcon.attributes.url} /></Link>
                  <Link to="/"><img src={STRIPE_BASE_URL + youtubeIcon.attributes.url} /></Link>
                </div>
              </div>
            </div>
            <div className="credit">
              <div>
                <p>{designedByText}</p>
                <Link to="https://www.peppersquare.com/" target="_blank"><img src={STRIPE_BASE_URL + pepperContentLogo.attributes.url} /></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Footer;