import React from 'react'
import Smartbar from "../assets/images/sports_up.svg"
import Smarticon from "../assets/images/sports_down.svg"
import "../assets/css/details.css"
import back_arrow from "../assets/images/back_arrow.png"

const Sports = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Sports</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>As Quantally progresses, it is demonstrating to be a useful tool in a wide range of industries, including sports, which is a fairly surprising sector where it is rising in popularity quickly. At a time when ticket revenue has been severely impacted by the COVID-19 epidemic, introducing these types of advances is becoming increasingly important to the sustainability of clubs.In a dynamic environment, sports clubs and organizations are constantly looking for new ways to make money.In the face of unexpected events such as the explosion of Esports and the fact that most sporting events now take place without spectators, clubs need to optimize their operations and re-evaluate how they interact with their fans to increase engagement, maximize membership, improve retention and attract more foreign fans. All of this and more is made possible by blockchain technologies in the sports sector.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Sports
