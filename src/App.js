<<<<<<< HEAD
import React from 'react'
import About from './components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Enterprise from './components/Enterprise'
import UseCases from './components/UseCases'
import Farming from './components/Farming'
import Home from './components/Home'
import Fishing from './components/Fishing'
import Healthcare from './components/Healthcare'
import SmartCity from './components/SmartCity'
import Car from './components/Car'
import Kitchen from './components/Kitchen'
import Shop from './components/Shop'
import Grids from './components/Grids'
import Charge from './components/Charge'
import Real from './components/Real'
import Logistic from './components/Logistic'
import Airforce from './components/Airforce'
import Space from './components/Space'
import Travel from './components/Travel'
import Sports from './components/Sports'
import Education from './components/Education'
import Movie from './components/Movie'
import Banks from './components/Banks'
import Govt from './components/Govt'
import Personal from './components/Personal'
import Weather from './components/Weather'
import Media from './components/Media'
import Food from './components/Food'
import Footer from './components/Footer'
import HowWorks from './components/HowWorks'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
     <Routes>
     <Route path = "/" element = {<About />}  />
     <Route path = "/team" element = {<Team />}  />
     <Route path = "/enterprise-application" element = {<Enterprise />}  />
     <Route path = "/use-cases" element = {<UseCases />}  />
     <Route path = "/how-works" element = {<HowWorks />}  />
     <Route path = "/home" element = {<Home />}  />
     <Route path = "/farming" element = {<Farming />}  />
     <Route path = "/fishing" element = {<Fishing />}  />
     <Route path = "/healthcare" element = {<Healthcare />}  />
     <Route path = "/smart-city" element = {<SmartCity />}  />
     <Route path = "/smart-cars" element = {<Car />}  />
     <Route path = "/smart-kitchen" element = {<Kitchen />}  />
     <Route path = "/smart-shops" element = {<Shop />}  />
     <Route path = "/smart-grids" element = {<Grids />}  />
     <Route path = "/smart-charge" element = {<Charge />}  />
     <Route path = "/smart-real" element = {<Real />}  />
     <Route path = "/smart-log" element = {<Logistic />}  />
     <Route path = "/smart-air" element = {<Airforce />}  />
     <Route path = "/smart-space" element = {<Space />}  />
     <Route path = "/smart-travel" element = {<Travel />}  />
     <Route path = "/smart-sport" element = {<Sports />}  />
     <Route path = "/smart-edu" element = {<Education />}  />
     <Route path = "/smart-movie" element = {<Movie />}  />
     <Route path = "/smart-bank" element = {<Banks />}  />
     <Route path = "/smart-gove" element = {<Govt />}  />
     <Route path = "/smart-per" element = {<Personal />}  />
     <Route path = "/smart-wea" element = {<Weather />}  />
     <Route path = "/smart-media" element = {<Media />}  />
     <Route path = "/smart-food" element = {<Food />}  />
     
     </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

export default App

=======
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Enterprise from './components/Enterprise'
import UseCases from './components/UseCases'
import Farming from './components/Farming'
import Home from './components/Home'
import Fishing from './components/Fishing'
import Healthcare from './components/Healthcare'
import SmartCity from './components/SmartCity'
import Car from './components/Car'
import Kitchen from './components/Kitchen'
import Shop from './components/Shop'
import Grids from './components/Grids'
import Charge from './components/Charge'
import Real from './components/Real'
import Logistic from './components/Logistic'
import Airforce from './components/Airforce'
import Space from './components/Space'
import Travel from './components/Travel'
import Sports from './components/Sports'
import Education from './components/Education'
import Movie from './components/Movie'
import Banks from './components/Banks'
import Govt from './components/Govt'
import Personal from './components/Personal'
import Weather from './components/Weather'
import Media from './components/Media'
import Food from './components/Food'
import Footer from './components/Footer'
import HowWorks from './components/HowWorks'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
     <Routes>
     <Route path = "/" element = {<About />}  />
     <Route path = "/team" element = {<Team />}  />
     <Route path = "/enterprise-application" element = {<Enterprise />}  />
     <Route path = "/use-cases" element = {<UseCases />}  />
     <Route path = "/how-works" element = {<HowWorks />}  />
     <Route path = "/home" element = {<Home />}  />
     <Route path = "/farming" element = {<Farming />}  />
     <Route path = "/fishing" element = {<Fishing />}  />
     <Route path = "/healthcare" element = {<Healthcare />}  />
     <Route path = "/smart-city" element = {<SmartCity />}  />
     <Route path = "/smart-cars" element = {<Car />}  />
     <Route path = "/smart-kitchen" element = {<Kitchen />}  />
     <Route path = "/smart-shops" element = {<Shop />}  />
     <Route path = "/smart-grids" element = {<Grids />}  />
     <Route path = "/smart-charge" element = {<Charge />}  />
     <Route path = "/smart-real" element = {<Real />}  />
     <Route path = "/smart-log" element = {<Logistic />}  />
     <Route path = "/smart-air" element = {<Airforce />}  />
     <Route path = "/smart-space" element = {<Space />}  />
     <Route path = "/smart-travel" element = {<Travel />}  />
     <Route path = "/smart-sport" element = {<Sports />}  />
     <Route path = "/smart-edu" element = {<Education />}  />
     <Route path = "/smart-movie" element = {<Movie />}  />
     <Route path = "/smart-bank" element = {<Banks />}  />
     <Route path = "/smart-gove" element = {<Govt />}  />
     <Route path = "/smart-per" element = {<Personal />}  />
     <Route path = "/smart-wea" element = {<Weather />}  />
     <Route path = "/smart-media" element = {<Media />}  />
     <Route path = "/smart-food" element = {<Food />}  />
     
     </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

export default App

>>>>>>> dbdd570... last commit
