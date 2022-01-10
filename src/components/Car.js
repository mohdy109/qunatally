import React from 'react'
import Smartbar from "../assets/images/cars_down.svg"
import Smarticon from "../assets/images/cars_up.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Car = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Smart Cars</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>Quantally is the future of self-driving cars. The capacity to distribute data more efficiently and quickly is one of the advantages that DAG-based smart vehicles bring to the table. Self-driving automobiles must be continually aware of a few critical aspects, including driving conditions, their condition, and the state of other vehicles. Owing to DAG's decentralized ledger, every node in the network - in this example, every car and every data point - has virtually instant and accurate access to all data.Companies are already trying to improve overall connectivity by incorporating enhanced vehicle monitoring and communications. The first step in creating a secure autonomous environment is to create decentralized networks that can more easily transport information to all locations.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Car
