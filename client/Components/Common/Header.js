import { STRIPE_BASE_URL } from '../../Constant/constant';
import '../../styles/header.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const Header = () => {
  const [headerData, setHeaderData] = useState();

  useEffect(() => {
    const fetchHeaderData = async() => {
      const response = await fetch("http://localhost:1337/api/home-static?populate=*");
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
            <li>{headerData.attributes.menuItem1}</li>
            <li>{headerData.attributes.menuItem2}</li>
            <li>{headerData.attributes.menuItem3}</li>
            <li>{headerData.attributes.menuItem4}</li>
            <button className='btn-csr'>{headerData.attributes.menuBtn1}</button>
            <button className='btn-donate'>{headerData.attributes.menuBtn2} <span className="heart">♥️</span></button>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Header;