import React from 'react'
import Smartbar from "../assets/images/Elecdown.svg"
import Smarticon from "../assets/images/Elecup.svg"
import "../assets/css/details.css"
<<<<<<< HEAD
=======
import back_arrow from "../assets/images/back_arrow.png"
>>>>>>> dbdd570... last commit
const Grids = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
<<<<<<< HEAD
           <h1 className='head_use'>Smart Electrical Grids Water Supply</h1>
=======
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Smart Electrical Grids Water Supply</h1>
        </div>
>>>>>>> dbdd570... last commit
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>The smart grid is a two-way transmission of power and information that is transparent, flawless, and immediate. The most significant distinction between smart grids and traditional power grids is the two-way information flow between power grids and customers.After the Internet as another disruptive technological invention, Blockchain has led to the development of a distributed ledger system that is tamper-proof, traceable, highly trustworthy, and decentralized. Blockchain enhances the security of the transmission system data and helps in developing a reliable, efficient and trustworthy distributed smart grid system. The smart grid coupled with the DAG architecture can upload, store data, and perform state queries.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Grids
