import { useEffect, useState } from "react";
import "../../styles/gallery.css";
import Loading from "../Common/Loading";
import { STRIPE_BASE_URL } from "../../Constant/constant";

const PageInfo = () => {

  const [bodyTopContainerDetails, setBodyTopContainerDetails] = useState();

  useEffect(() => {
    const fetchToBodyContent = async() => {
      const response = await fetch("http://localhost:1337/api/gallery-body?populate=*")
      const json = await response.json();
      setBodyTopContainerDetails(json.data);

    }
    fetchToBodyContent();
  }, [])



  if(!bodyTopContainerDetails) {
    return <Loading />
  }

  const IMG_URL = `${STRIPE_BASE_URL}${bodyTopContainerDetails?.attributes?.background?.data[0].attributes?.url}`
  console.log("img", IMG_URL) 
  return (
    <div className="info-container-wrapper">
      <div className="background-image">
        <img src={IMG_URL} />
      </div>
      <div className="info-container">
        <h1>Our events gallery</h1>
        <p>Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together.</p>
      </div>
    </div>
  )
}

export default PageInfo;