import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/news.css"
<<<<<<< HEAD
import yahoo from "../assets/images/news2.png"
=======
import yahoo from "../assets/images/Cointelegraph.svg"
>>>>>>> dbdd570... last commit
import yahoos from "../assets/images/yahoo.png"
const News = () => {
    return (
        <div className='news_main_div'>
            <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'> <span className='colors'>In News </span></h1>
                </div>
            </div>       
            <div className = "flexi_news">
<<<<<<< HEAD
                <div className = "first_news">
                    <img src = {yahoos} className = "news_img" />
=======
                <div className = "first_news res_five">
                    <img src = {yahoos} className = "news_img " />
>>>>>>> dbdd570... last commit
                </div>
                <div className = "second_news">
                    <img src = {yahoo} className = "news_img sec_news" />
                </div>
            </div>
        </div>
    )
}

export default News
