import React from 'react'
import Smartbar from "../assets/images/log_up.svg"
import Smarticon from "../assets/images/log_down.svg"
import "../assets/css/details.css"
<<<<<<< HEAD
=======
import back_arrow from "../assets/images/back_arrow.png"
>>>>>>> dbdd570... last commit
const Logistic = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
<<<<<<< HEAD
           <h1 className='head_use'>Logistics</h1>
=======
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Logistics</h1>
        </div>
>>>>>>> dbdd570... last commit
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>The Quantally smart homes will enable users to connect gadgets and home equipment in their residences to speak with one another and with them. It will assist them to unravel puzzling and doubtlessly demanding conditions such as understanding the place they saved matters in their home, and what is going on whilst they are away.Users of Quantally smart homes can easily switch on their coffee machine as quickly as they leave behind their mattress as well as set their doors to go open when it senses someone approaching. They can also set their doors to close after anyone passes. Aged users of Quantally who live alone will find the reminders and controls like turning off faucets to avoid overflowing of tubs.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Logistic
