import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/future.css"
const Future = () => {
    return (
        <div className='future_wrap_div'>
            <div className='two_box_all_div core_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>Establishing A <span className='colors'>Decentralized Future Together</span></h1>
                </div>
            </div>  
            <div className='future_main_div'>
                <div >
                    <h1 className='future_head'> Quantally is an enterprise grade public ledger that makes your digital world work just as it should. QNTL is the native cryptocurrency used for the settlement of transactions on Quantally. Quantally creates a fair and innovative ecosystem for the deployment of secure applications.</h1>
                </div>
                <div className='future_illus'>
                    <h1 className='future_animation_head' >Animation/Illustration</h1>
                </div>
            </div>
        </div>
    )
}

export default Future
