import React from 'react'
import Smartbar from "../assets/images/air_up.svg"
import Smarticon from "../assets/images/air_down.svg"
import "../assets/css/details.css"

const Airforce = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
           <h1 className='head_use'>Airforce/Army</h1>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>National armies will also benefit from Quantally. The Quantally DAG architecture is highly useful for the military especially in the areas of communication. Entire wars have been lost and won in history by interrupting the communication transmission of opponents.Military drone technology is another area where DAG technology can prove effective by helping to securely analyze footage and protect real-time data, even if the drone ever fails. The vast number of weapons controlled simultaneously on warships can best be managed by using DAG technology to store coordinated information and prevent a single point of failure. DAG technology can help armies successfully manage Aegis systems by coordinating weapons control and neutralizing threats.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Airforce
