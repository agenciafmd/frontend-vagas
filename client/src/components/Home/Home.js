import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Banners from '../Banners/Banners'
import Card from '../Card1/Card'
import Members from '../Members/Members'
import  Form  from '../Form/Form'
import './Home.css'

export const Home = () => {
  const [music,setMusic] = useState()
  
  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get("http://localhost:5000/music")
      setMusic(data.data)
    } 
    get()
  }, [])

  return (
    <div id="home" className='Home'>
      <span/>
      <Banners/>
      <h2 id="music">
        Musicas:
      </h2>
      <ul  className='Cards'>
        {music && music.map(e=>(
          <Card name={e.name} description={e.description} img={e.img} url={e.url}/>
        ))
        }        
      </ul>       

      <Members />     

      <Form/>
    </div>
  )
}
