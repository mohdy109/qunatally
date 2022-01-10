import React from 'react'
import Smartbar from "../assets/images/banks_up.svg"
import Smarticon from "../assets/images/banks_down.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Banks = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Banks</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>The financial sector is among the most vulnerable. Quantally reduces the threat or risk of fraud across all financial sectors, including trading platforms. Furthermore, because DAG is transparent and irreversible, it may solve concerns such as operational risk and administrative expenditures. Traceability and permanent historical proof on Quantally secures each transferred good or business entity and guarantees trust and legitimacy throughout the supply chain. The decentralized nature of DAG makes it less vulnerable to data loss and unauthorized access. The use of DAG technology not only enables real-time payment processing, but also increased transparency that allows real-time fraud investigation and deterrence.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Banks
