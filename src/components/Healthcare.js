import React from 'react'
import Smartbar from "../assets/images/H.svg"
import Smarticon from "../assets/images/Health_down.svg"
import back_arrow from "../assets/images/back_arrow.png"
import "../assets/css/details.css"

const Healthcare = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Smart Healthcare</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>Quantally architecture allows many parties to securely share and access data. This is a serious hurdle in e-health systems, where the safety and confidentiality of healthcare records are crucial, but enhancing the quality of healthcare requires more collaboration in the management of medical data across the medical system, as well as the ability to apply metrics to population-level medical data.Each hash function is distinctive and can only be decrypted with the consent of the person to whom the data belongs - in this example, the patient's consent. In this case, any change to the patient's data, as well as any time the patient agrees to share a portion of their medical data, is recorded in the distributed ledger as a transaction.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Healthcare
