import React from 'react'
import Smartbar from "../assets/images/govt_up.svg"
import Smarticon from "../assets/images/govt_down.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Govt = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Government Entities</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>The DAG-based governance system on Quantally can safeguard data, expedite operations, and eliminate fraud, wastage, and corruption all while boosting transparency and credibility. The decentralized DAG framework can be used to work with various types of government and public sector software, such as online exchange, land acquisition, identity authentication, supply chain eligibility, medical services, business registration, tax policy, voting (elections and proxies), and legal entity management.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Govt
