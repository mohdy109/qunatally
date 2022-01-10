import React from 'react'
import Smartbar from "../assets/images/charging_up.svg"
import Smarticon from "../assets/images/charging_down.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Charge = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Smart Charging Stations</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>P2P electric vehicle (EV) charging is the latest use of blockchain-based P2P smart contracts that is rapidly growing. Range anxiety is a significant barrier to the mainstream adoption of electric cars (EVs). To solve the problem of the lack of charging infrastructure, an alternative option is emerging. Thanks to blockchain-based applications, private individuals can now share their private charging stations with others.Private owners can use P2P EV charging platforms to make their charging stations available to the public when they are not in use. In turn, customers can make more money from their inactive charging station by increasing its usage. EV drivers can search for charging stations nearby and charge their vehicles.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Charge
