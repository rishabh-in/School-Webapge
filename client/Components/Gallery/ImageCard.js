import {Fragment, useState} from 'react';
import { STRIPE_BASE_URL } from "../../Constant/constant";
import formatDate from "../../helper/dateHelper";
import calLogo from "../../public/static/cal.png"
import ImageViewer from '../Common/ImageViewer';


const ImageCard = ({imgData}) => {

  const [showImage, setShowImage] = useState(false);

  const handleOpenImage = () => {
    setShowImage(true)
  }


  const imageInfo = imgData.attributes
  const imgAttributes = imageInfo?.image?.data;

  return (
    <Fragment>
      <div className="image-card-container" onClick={handleOpenImage}>
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
      {showImage && (
        <ImageViewer setShowImage={setShowImage} imgId={imgData.id}/>
      )}
    </Fragment>

  )
}

export default ImageCard;