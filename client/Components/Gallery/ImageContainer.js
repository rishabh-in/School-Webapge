import {useEffect, useState} from 'react';
import ImageCard from './ImageCard';
import { EVENTS_URL, IMG_URL } from '../../Constant/constant';
import DataContext from '../Common/UseContext';

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

  const fetchImagesData = (event) => {
    return new Promise( async(resolve, reject) => {
      let response;
      if(event && event !== 'All') {
        response = await fetch(`${IMG_URL}?populate=image&filters[event][$eq]=${event}`)
      } else {
        response = await fetch(`${IMG_URL}?populate=image`);
      }
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

  const handleEventChange = async (e) => {
    if(e?.target?.nodeName === 'LI') {
      const menuItems = document.querySelectorAll(".event-menu li");
      menuItems.forEach((node) => {
        node.classList.remove("event-btn-active");
      })
      e.target.classList.add("event-btn-active");
      let eventImages = await fetchImagesData(e.target.textContent)
      console.log(eventImages)
      setImageData(eventImages?.data)
    }
  }
  console.log(imageData)
  return (
    <div className="media-container-wrapper">
      <div className="media-container">
        <div className="event-menu-container">
          <ul className='event-menu' onClick={(e) => handleEventChange(e)}>
            <li className='event-btn-active'>All</li>
            {events && events.length > 0 && events.map((e) => (
              <li key={e.attributes.id}>{e.attributes.eventName}</li>
            ))}
          </ul>
        </div>
        <div className='image-container'>
          <DataContext.Provider value={imageData}>
            {imageData && imageData.length > 0 ? imageData.map((img) => (
              <ImageCard key={img.id} imgData={img}/>
              )) : "No Images Found"}
              </DataContext.Provider>

        </div>
        <div className='load-more-btn'>
          <button>View more</button>
        </div>
      </div>
    </div>
  )
}

export default ImageContainer;