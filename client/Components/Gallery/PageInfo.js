import { useEffect, useState } from "react";
import "../../styles/gallery.css";
import Loading from "../Common/Loading";
import { STRIPE_BASE_URL } from "../../Constant/constant";

const PageInfo = () => {

  const [bodyTopContainerDetails, setBodyTopContainerDetails] = useState();

  useEffect(() => {
    const fetchToBodyContent = async() => {
      const response = await fetch(`${STRIPE_BASE_URL}/api/gallery-body?populate=*`)
      const json = await response.json();
      setBodyTopContainerDetails(json.data);

    }
    fetchToBodyContent();
  }, [])

  if(!bodyTopContainerDetails) {
    return <Loading />
  }

  const IMG_URL = `${STRIPE_BASE_URL}${bodyTopContainerDetails?.attributes?.background?.data[0].attributes?.url}`

  return (
    <div className="info-container-wrapper">
      <div className="background-image">
        <img src={IMG_URL} />
      </div>
      <div className="info-container">
        <h1>{bodyTopContainerDetails.attributes.title}</h1>
        <p>{bodyTopContainerDetails.attributes.description}</p>
      </div>
    </div>
  )
}

export default PageInfo;