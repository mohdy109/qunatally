import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
<<<<<<< HEAD
import yahoo from "../assets/images/news1.png"
=======
import yahoo from "../assets/images/Flinders.svg"
>>>>>>> dbdd570... last commit
import "../assets/css/partnership.css"
const Partnership = () => {
    return (
        <div className='res_partnership_image'>
             <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'> <span className='colors'> Partnerships</span></h1>
                </div>
            </div>
            <div className = "part_img">
                <div className = "part_imgs">
                    <img src = {yahoo} className = "news_img part_news" />
                </div>
            </div>
        </div>
    )
}

export default Partnership
