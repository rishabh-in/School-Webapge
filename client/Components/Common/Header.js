import { FETCH_HEADER_DATA, STRIPE_BASE_URL } from '../../Constant/constant';
import '../../styles/header.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Header = () => {
  const [headerData, setHeaderData] = useState();

  useEffect(() => {
    const fetchHeaderData = async() => {
      const response = await fetch(FETCH_HEADER_DATA);
      const json = await response.json();
      setHeaderData(json.data);
    } 
    fetchHeaderData()
  }, []);

  if(headerData == null) {
    return <Loading />
  }
  const headerLogoDetails = headerData?.attributes?.headerLogo?.data[0];
  return (
    <div className='header-container-wrapper'>
      <div className="header-container">
        <div className="logo-container">
          <img src={STRIPE_BASE_URL + headerLogoDetails.attributes.url}  alt='logo-png'/>
        </div>
        <div className="menu-items-container">
          <ul>
            <li><Link to="/school">{headerData.attributes.menuItem1}</Link></li>
            <li><Link to="/academics">{headerData.attributes.menuItem2}</Link></li>
            <li><Link to="/life">{headerData.attributes.menuItem3}</Link></li>
            <li><Link to="/contact">{headerData.attributes.menuItem4}</Link></li>
            <button className='btn-csr'><Link to="csr">{headerData.attributes.menuBtn1}</Link></button>
            <button className='btn-donate'><Link to="/donate">{headerData.attributes.menuBtn2} <span className="heart">♥️</span></Link></button>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Header;