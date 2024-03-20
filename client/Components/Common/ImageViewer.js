import React, {useContext, useState} from "react";
import { STRIPE_BASE_URL } from "../../Constant/constant";
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
    if(currentImageId + 1 > imgArray.length) {
      return;
    } else {
      setImageId(currentImageId + 1);
    }
  }

  const currImageInfo = imgArray[currentImageId - 1].attributes;
  const imgAttributes = currImageInfo?.image?.data;

  return (
    <div className="image-viewer-overlay">
      <div className="image-viewer-image-container">
        <div className="close-image-modal">
          <button className="close-image-btn"><img src="http://localhost:1337/uploads/close_Btn_083f19529c.png" onClick={() => setShowImage(false)}></img></button>
        </div>
        <div className="image-viewer-operations">
          <button className="left-image-btn"><img src="http://localhost:1337/uploads/left_arrow_2bbb40d1f3.png" onClick={() => showPrevImage()}></img></button>
          <img className="opened-image-container" src={STRIPE_BASE_URL + imgAttributes.attributes.url}></img>
          <button className="right-image-btn"><img src="http://localhost:1337/uploads/right_arrow_29654e4b42.png" onClick={() => showNextImg()}></img></button>
        </div>
        <div className="image-viewer-image-details">
          <p>{currImageInfo.description}</p>
          <span>{formatDate(currImageInfo.uploadedOn)}</span>
        </div>
      </div>
      {/* Image details */}
    </div>
  )
}

export default ImageViewer;