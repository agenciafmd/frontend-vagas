import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Banners.css'

function Banners() {  
  const [currentImage,setCurrentImage] = useState()
  const [images,setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const prevImage = prevIndex !== null ? images[prevIndex] : null;
  const intervalId = 1

  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get("http://localhost:5000/banner")
      setImages(data.data)
      setCurrentImage(data.data[currentIndex].img)
    }

    let intervalId;
    function startInterval() {
      intervalId = setInterval(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((currentIndex + 1));
      }, 3000);
    }

    get()
    startInterval();
    if(images.length===currentIndex && currentIndex !== 0){
      setCurrentIndex(0);
    }
    
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  function handlePrevious() {
    setPrevIndex(currentIndex);
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
    clearInterval(intervalId);
  }

  function handleNext() {
    setPrevIndex(currentIndex);
    setCurrentIndex((currentIndex + 1) % images.length);
    clearInterval(intervalId);
  }

  function handleChange(index) {
    setCurrentIndex(index);
    clearInterval(intervalId);
  }

  return (
    <div className='Banner'>
    <h1 className='BannerH1'>ALBUNS BLINK-182</h1>
      
    <div className="BannerImg" id="banner">
      <button className='imgButton left' onClick={handlePrevious}><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
      <path
         d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
         fill="currentColor"
         />
      </svg></button>

      <img className="newImg" alt="" src={currentImage} />

      {prevImage && (
        <img className='oldImg' alt="" src={prevImage}/>
      )}
      <button className='imgButton right' onClick={handleNext}><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >     
      <path
        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
        fill="currentColor"
        />
      </svg>
      </button>
    </div>
      <div className="imgPoint">
        {images.map((_,index) => (
          <div
          key={index}
          onClick={() => handleChange(index)}
          className="points"
          style={{
              backgroundColor: currentIndex === index ? 'yellow' : 'white'
            }}
            />
            ))}
      </div>
    </div>
  );
}


export default Banners;