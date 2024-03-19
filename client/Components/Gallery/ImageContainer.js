import {useEffect, useState} from 'react';
import ImageCard from './ImageCard';
import { EVENTS_URL, IMG_URL } from '../../Constant/constant';

const ImageContainer = () => {
  // Initially the selected event will be = all
  // Fetch the images from strapi 
  const [events, setEvents] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let eventPromise = fetchEvents();
      let imageDataPromise = fetchImagesData();
  
      let result = await Promise.all([eventPromise, imageDataPromise])
      let events = result[0]?.data;
      let imageData = result[1]?.data;
      setEvents(events);
      setImageData(imageData);
    }

    fetchData();

  }, [])

  const fetchImagesData = () => {
    return new Promise( async(resolve, reject) => {
      let response = await fetch(IMG_URL);
      let json = await response.json()
      resolve(json);
    })
  }

  const fetchEvents = () => {
    return new Promise(async (resolve, reject) => {
      let response = await fetch(EVENTS_URL);
      let json = await response.json()
      resolve(json);
    })
  }


  return (
    <div className="media-container-wrapper">
      <div className="media-container">
        <div className="event-btn">
          <ul>
            <li>All</li>
            {events && events.length > 0 && events.map((e) => (
              <li key={e.attributes.id}>{e.attributes.eventName}</li>
            ))}
          </ul>
        </div>
        <div className='image-container'>
          {imageData && imageData.length > 0 ? imageData.map((img) => (
            <ImageCard key={img.id} imgData={img}/>
          )) : "No Images Found"}
        </div>
      </div>
    </div>
  )
}

export default ImageContainer;