import React from 'react'
import Smartbar from "../assets/images/shop_up.svg"
import Smarticon from "../assets/images/shop_down.svg"
<<<<<<< HEAD
=======
import back_arrow from "../assets/images/back_arrow.png"
>>>>>>> dbdd570... last commit
import "../assets/css/details.css"

const Shop = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
<<<<<<< HEAD
           <h1 className='head_use'>Smart Shops</h1>
=======
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
           <div>
           <h1 className='head_use'>Smart Shops</h1>
           </div>
>>>>>>> dbdd570... last commit
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>DAG provides the most long-term benefits, such as cost savings and transparent retailer supply chain management. At the moment, blockchain is mostly used in retail for compliance management, document processing via smart contracts, supply chain and stock management, transactions, customer service automation, and identity.E-commerce will undergo certain changes to provide the greatest benefits of online and offline shopping while remaining as secure as possible. A retailer's success depends heavily on its supply chain, which is a critical component of retail. Quantally enables retailers to improve the customer experience, increase logistical efficiency and enhance consumer secrecy.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Shop
