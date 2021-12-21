import React from 'react'
import Smartbar from "../assets/images/food_up.svg"
import Smarticon from "../assets/images/food_down.svg"
import "../assets/css/details.css"
const Food = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
           <h1 className='head_use'>Food Industry</h1>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>WAlthough DAG technology has widely been used for supply chain operations, it has just lately started to make an impact on the food sector. In food data, DAG technology enables transparency, reliability, and decentralization. Immutability is a feature of the DAG architecture. Transactions cannot be changed or concealed because every change is monitored, documented, and displayed to the entire network of those who have access to all the information.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Food
