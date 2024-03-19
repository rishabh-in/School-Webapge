import { STRIPE_BASE_URL } from "../../Constant/constant";
import formatDate from "../../helper/dateHelper";
import calLogo from "../../public/static/cal.png"


const ImageCard = ({imgData}) => {
  const imageInfo = imgData.attributes
  const imgAttributes = imageInfo?.image.data;

  return (
    <div className="image-card-container">
      <div className="img-container">
        <img src={STRIPE_BASE_URL + imgAttributes.attributes.url}/>
      </div>
      <div className="image-info-wrapper">
        <div className="image-info">
          <p className="img-event-text">{imageInfo.description}</p>
          <div className="cal-icon">
            <img src={calLogo}/>
            <p>{formatDate(imageInfo.uploadedOn)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;