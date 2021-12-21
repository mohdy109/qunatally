import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/node.css"
const Node = () => {
    return (
        <div className='node_main_div'>
             <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>Wanna Become A  <span className='colors'> Node Operator </span></h1>
                </div>
            </div>  
            <div className='node_ope'>
                <h1>Video</h1>
            </div>
            <div className='join_us_now'>
                <h1 className='joining'>Join Us Now</h1>
            </div>
            <div className='all_subs'>
               <div className='all_texts'>
               <input type = "text" placeholder='Name' className='names' />
                <input type = "text" placeholder='Email Id' className='id' />
                <button className='node_submit'> Submit </button>
               </div>
            </div>
        </div>
    )
}

export default Node
