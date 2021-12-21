import React from 'react'
import Smartbar from "../assets/images/Farming.png"
import Smarticon from "../assets/images/Farming_up.svg"
import "../assets/css/details.css"

const Farming = () => {
    return (
        <div className='res_div_usecases'> 
             <div className="ledger L"> 
                <h1 className='head_use'>Smart Farming</h1>
            </div>
            <div className='res_divs'>
              <img src={Smartbar}  className="img1 y" />
              </div>
              <div className="flex">
                <div className="contents p f">
               <h1 className='content_text'>Quantally can help with the tracing of food provenance, assisting in the creation of trustworthy food supply chains and the development of trust between producers and consumers. By removing the need for a central authority, the technology changes the way trust is established - instead of trusting an authority, trust is placed in encryption and peer-to-peer architecture. In doing so, it helps rebuild trust between producers and customers, which can reduce transaction fees in the agri-food industry.Quantally promotes openness between all stakeholders and facilitates the acquisition of trusted data. From the development of a product to its end, DAG can be used to capture every stage of the value chain.</h1>
                </div>
               <div>
                <img  src={Smarticon}  className="smart"/>
              </div>
              </div>
        </div>
    )
}

export default Farming
