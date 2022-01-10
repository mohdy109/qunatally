import React from 'react'
import Smartbar from "../assets/images/real_up.svg"
import Smarticon from "../assets/images/real_down.svg"
import "../assets/css/details.css"
<<<<<<< HEAD
=======
import back_arrow from "../assets/images/back_arrow.png"
>>>>>>> dbdd570... last commit

const Real = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
<<<<<<< HEAD
           <h1 className='head_use'>Real Estate</h1>
=======
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Real Estate</h1>
        </div>
>>>>>>> dbdd570... last commit
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>One of the most significant effects of blockchain on real estate development would be a seamless, quicker contract administration procedure that speeds up transactions. Every aspect of a lease or sale deal is automated with smart contracts, and funds are collected quickly – even after working days. Liquidating assets can be challenging for shareholders who are under pressure to build a diversified portfolio.When all assets are documented through the ledger, DAG technology has the potential to streamline the exchange of shares between investors. By providing additional liquidity and easy accessibility to leading real estate sponsors and issuers, the blockchain-based capital issuance and subsequent trading system offers new applications for expensive real estate assets and properties.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Real
