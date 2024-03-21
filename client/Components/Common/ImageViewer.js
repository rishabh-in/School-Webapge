import React, {useContext, useState} from "react";
import { CLOSE_BTN_IMG, LEFT_ARROW_IMG, RIGHT_ARROW_IMG, STRIPE_BASE_URL } from "../../Constant/constant";
import formatDate from "../../helper/dateHelper";
import "../../styles/imageViewer.css"
import DataContext from "./UseContext";

const ImageViewer = (props) => {
  const {imgId, setShowImage} = props;
  const [currentImageId, setImageId] = useState(imgId);
  const imgArray = useContext(DataContext);

  
  const showPrevImage = () => {
    if(currentImageId - 1 <= 0) {
      return;
    } else {
      setImageId(currentImageId - 1);
    }
  }

  const showNextImg = () => {
    if(currentImageId + 1 > imgArray.length || (imgArray.length < currentImageId)) {
      return;
    } else {
      setImageId(currentImageId + 1);
    }
  }
  const currImageInfo = imgArray.find((img) => img.id == currentImageId)?.attributes;
  const imgAttributes = currImageInfo?.image?.data;
  return (
    <div className="image-viewer-overlay">
      <div className="image-viewer-image-container">
        <div className="close-image-modal">
          <button className="close-image-btn"><img src={CLOSE_BTN_IMG} onClick={() => setShowImage(false)}></img></button>
        </div>
        <div className="image-viewer-operations">
          <button className="left-image-btn"><img src={LEFT_ARROW_IMG} onClick={() => showPrevImage()}></img></button>
          <img className="opened-image-container" src={STRIPE_BASE_URL + imgAttributes.attributes.url}></img>
          <button className="right-image-btn"><img src={RIGHT_ARROW_IMG} onClick={() => showNextImg()}></img></button>
        </div>
        <div className="image-viewer-image-details">
          <p>{currImageInfo.description}</p>
          <span>{formatDate(currImageInfo.uploadedOn)}</span>
        </div>
      </div>
    </div>
  )
}

export default ImageViewer;