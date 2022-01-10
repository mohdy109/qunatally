import React from 'react'
import Smartbar from "../assets/images/weather_up.svg"
import Smarticon from "../assets/images/weather_down.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Weather = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Weather Data</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>WMankind has grappled with weather variations from the beginning of time. We now have smart and linked sensors that can help us become more aware. A decentralized concept for a meteorological data exchange platform that employs DAG ledger technology to promote, trade, and securely reward membership. It is a democratic setup that connects data owners and data consumers through tokenized transactionsthat are aligned with the data mining, donation, and facilitation incentive structures mentioned in the business strategy section. Nowadays, there are numerous incredible techniques to capture various weather indicators. High-tech weather protection technology that can monitor everything with incredible precision, from commercial to residential purposes.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Weather
