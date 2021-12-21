import React from 'react'
import Smartbar from "../assets/images/kitch_up.svg"
import Smarticon from "../assets/images/kitch_down.svg"
import "../assets/css/details.css"
const Kitchen = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
           <h1 className='head_use'>Smart Kitchen</h1>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>For a long time, the food industry has been vulnerable to numerous unexpected shifts due to increased competition and ever-increasing technology. The rise of delivery-only restaurants and cloud kitchens has resulted from the rising popularity of online meal deliveries, expensive real estate expenses, and dwindling profits.  Cloud kitchens are better suited to the needs of socially isolated consumers than typical dine-out restaurants. They are also able to reduce some expenses, such as rent and additional staff, and have fewer employees on the payroll.Quantally's decentralized technology, the DAG, underscores the concept of time as money. It's also obvious that fresh, hot food is worth the money. The growing importance of cloud kitchens raises customer expectations for fast food delivery, and that's where the DAG architecture comes in. The goal of DAG technology working with a cloud kitchen is to provide customers with on-time and trackable food deliveries.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Kitchen
