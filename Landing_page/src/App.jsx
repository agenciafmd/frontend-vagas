import { Header } from './components/Header/Header'
import { Home } from './Pages/Section1'
import { Section_TopRated } from './Pages/Section2'
import { useEffect, useState, useRef } from 'react'
import { SlideCards } from './Pages/Section3';
import { FormNewsLetter } from './Pages/Section4';
import { Footer } from './Components/Footer/Footer';

const Api_Url = 'https://api.themoviedb.org/3/movie/';
const Api_Key = 'api_key=5388c3a2adab3279b15814d613079c99';

function App() {
  const [info, setInfo ] = useState([]);

  useEffect(() => {

    fetch(`${Api_Url}top_rated?${Api_Key}`)
    .then((resp) => resp.json())
    .then((data) => {
      setInfo(data.results)
    })
  }, [])

  return (
    <div>
      <Header />
      <Home/>
      <Section_TopRated movie={info}/>
      <SlideCards movie={info}/>
      <FormNewsLetter/>
      <Footer/> 
    </div>
  )
}

export default App