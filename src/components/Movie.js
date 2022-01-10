import React from 'react'
import Smartbar from "../assets/images/movie_up.svg"
import Smarticon from "../assets/images/movie_down.svg"
import "../assets/css/details.css"
<<<<<<< HEAD
=======
import back_arrow from "../assets/images/back_arrow.png"
>>>>>>> dbdd570... last commit

const Movie = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
<<<<<<< HEAD
           <h1 className='head_use'>Movie Industry</h1>
=======
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Movie Industry</h1>
        </div>
>>>>>>> dbdd570... last commit
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>Large television and film studios used to be the primary producers of media and entertainment material. However, with the advent of the internet and streaming platforms, this tendency has shifted dramatically. Movies, dramas, documentaries, and other entertaining content are now available to anyone with smart and/or mobile technology (usually for a fee). Independent media companies can create high-quality content on Quantally without investing heavily in supporting equipment. Likewise, they can track and validate their material on Quantally to prevent intellectual property theft and identity fraud.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Movie
