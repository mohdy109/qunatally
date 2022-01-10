import React from 'react'
import "../assets/css/ledger.css"
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import publicLedger from "../assets/images/ledgerTable.svg"
const PublicLedger = () => {
    return (
        <div className='ledger_main'>
            <div className='two_box_all_div core_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>The 4th Generation Of <span className='colors'> Public Ledgers </span></h1>
                </div>
            </div>
            <div className='ledger_flex'>
                    <div>
                        <h1 className='ledger_heading'>Bitcoin was the first cryptocurrency but its shortcoming is slow transaction time. Ethereum executes transactions faster than Bitcoin but is now fraught with scalability issues. Quantally is a part of the next generation of public ledgers with faster transaction time, improved security, and low bandwidth consumption.</h1>
                    </div>
                    <div className = "ledger_image_div">
                        <img src = {publicLedger} className='table_ledger' />
                    </div>
            </div>
        </div>
    )
}

export default PublicLedger
