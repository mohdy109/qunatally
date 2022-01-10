import React from 'react'
import Smartbar from "../assets/images/tavel.svg"
import Smarticon from "../assets/images/travel_dow.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Travel = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Travel</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>Stability and security are two of the most important benefits of Quantally in the tourism business. With DAG's decentralized structure, information can never go "down" or be lost due to inadvertent deletion or a hostile cyber-attack, assuring transactions are always accessible. Although the responsibility for maintaining critical data resides throughout the network, DAG can make accessing and maintaining data easier and more trustworthy. Money transfers are, of course, an important aspect of the travel business, and DAG technology enables not only streamlining but also securing transfers. This is especially true for payments made abroad. In this way, DAG can increase the trust of all parties involved.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Travel
