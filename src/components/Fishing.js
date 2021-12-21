import React from 'react'
import Smartbar from "../assets/images/Fishing_down.svg"
import Smarticon from "../assets/images/Fishing_up.svg"
import "../assets/css/details.css"

const Fishing = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
           <h1 className='head_use'>Fish Farming</h1>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>Quantally features an innovative mechanism in aquaculture, aiding in tracking from farm to plate and eradicating fish theft. Quantally's DAG technology has helped many sectors digitize and improve operations in areas such as healthcare, pension systems, grocery stores, and financial markets. Now Quantally is focusing on agriculture and fisheries to apply DAG technology to the seafood supply chain.Quantally allows us to track a fish's journey from ocean to table. This is more important today than ever," he said, adding that this is the way of the future when it comes to stopping seafood fraud. Quantally promotes transparency through the use of a mechanism known as a QR code. Consumers and corporate buyers can scan the QR code and receive comprehensive information about the origin of a particular product, in this example salmon, as well as the fjord from which it comes.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Fishing
