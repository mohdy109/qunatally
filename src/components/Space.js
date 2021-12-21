import React from 'react'
import Smartbar from "../assets/images/space_up.svg"
import Smarticon from "../assets/images/space_down.svg"
import "../assets/css/details.css"

const Space = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
           <h1 className='head_use'>Space</h1>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>Quantally has the potential to revolutionize the space business and expedition. As space digital coins, this magical technology can enable decentralized and safe ways for processing and controlling space resources. Tokenizing space assets such as orbits, satellites, spacecraft, orbital debris, comets, and other space objects into DAG-based digital currencies will enable a wide range of applications in the space mining sector. In addition, smart-contract-based DAG technologies can be used to visibly, traceably, and reliably track all transactions and communications in space. </h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Space
