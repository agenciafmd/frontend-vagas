import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Members.css'


import Card from '../Card2/Card'


const Members = () => {

  const [name,setName] = useState()
  const [images,setImages] = useState()
  const [description,setDescription] = useState()

  const [member,setMember] = useState()
  
  const [screen,setScreen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const prevImage = prevIndex !== null ? member[prevIndex] : null;
  const intervalId = 1

  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get("http://localhost:5000/member")
      setMember(data.data)
      setName(data.data[currentIndex].name)
      setImages(data.data[currentIndex].img)
      setDescription(data.data[currentIndex].description)
    } 
    get()
    if (window.innerWidth > 800) {
      setScreen(true)
    }
  }, [currentIndex])

  function handlePrevious() {
    setPrevIndex(currentIndex);
    setCurrentIndex((currentIndex + member.length - 1) % member.length);
    clearInterval(intervalId);
  }
  
  function handleNext() {
    setPrevIndex(currentIndex);
    setCurrentIndex((currentIndex +  1) % member.length);
    clearInterval(intervalId);
  }
  
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className='' id="member">
      <b className='music'>
          Membros da Banda
       </b>
      {screen && 
      <div className='Members' >
        {member && member.map(e=>
          <Card name={e.name} description={e.description} img={e.img}/>
        )}
      </div>
      }
      {!screen &&
        <div className='member'>
          <Card name={name} description={description} img={images} />        
          
          {prevImage && (
            <img className='oldImg' alt="" src={prevImage}/>
          )}
          <div className='Section3'>
            <div className="imgPoint">
              {member && member.map((_,index) => (
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
          <div className='button'>
          <button className='buttonMember' onClick={handlePrevious}><svg
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
          <button className='buttonMember' onClick={handleNext}><svg
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
        </div>
        </div>
      }
    </div>
  )
}

export default Members