import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
// Navbar
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
// https://www.npmjs.com/package/yt-channel-info

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/> 
      </Route>     
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
