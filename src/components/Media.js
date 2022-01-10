import React from 'react'
import Smartbar from "../assets/images/media_up.svg"
import Smarticon from "../assets/images/media_down.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Media = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Media Industry</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>In the war for eyes and ears, the media industry is always evolving, utilizing cutting-edge technologies to generate and disseminate information. There is no shortage of methods to capture our interest, from immersive virtual music videos to CGI in major blockbusters to video game live streams. It is a democratic setup that connects data owners and data consumers through tokenized transactions that are aligned with the data mining, donation, and facilitation incentive structures mentioned in the business strategy section.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Media
