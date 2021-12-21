import React from 'react'
import Smartbar from "../assets/images/citi_down.svg"
import Smarticon from "../assets/images/citi_up.svg"
import "../assets/css/details.css"


const SmartCity = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
           <h1 className='head_use'>Smart Cities</h1>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>The modern technology stack of Quantally can help to solve these societal challenges and achieve effective urban administration. The Quantally DAG architecture can be used to solve data problems in cities. For example, Smart Dubai, which aims to make Dubai the smartest and most intelligent city in the world, is exploring blockchain use cases in a variety of industries, including banking, education, and public transportation.For example, a blockchain-based initiative is currently underway to simplify registration procedures for students traveling between the emirates. They should keep in mind that autonomous smart cities are not sufficient to contribute to social concerns, function effectively, and improve service quality. Rather, it is crucial to ensure interoperability and coordination between the various smart cities. Attempts are already being made to achieve this goal. Openness and interoperability are the key underlying principles for the deployment of smart city technology.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default SmartCity
