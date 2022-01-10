import React from 'react'
import Smartbar from "../assets/images/Smartbar.svg"
import Smarticon from "../assets/images/Smarticon.svg"
import back_arrow from "../assets/images/back_arrow.png"
import "../assets/css/details.css"

const Home = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Smart Homes</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f max_content">
          <h1 className='content_text'>With the creation of a large number of digital artifacts such as educational credentials, birth/death certifications, driving licenses, health data, employee official records, sale deeds/property registrations files, MOU/agreements, and so on, the need for document security and management is becoming increasingly important in the world of digitization. The decentralized DAG framework can be used to work with various types of government and public sector software, such as online exchanges, land acquisition, identity authentication, supply chain eligibility, medical services, business registration, taxation, voting (elections and proxies), and legal entity management.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Home
