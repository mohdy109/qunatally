import React from 'react'
import "../assets/css/top.css"

const Top = () => {
    return (
        <div className='top_head'>
            <div className='top_left'>
                    <h1 className='top_heading'>
                    Building the next generation of interoperable distributed public ledger technology on <br /> <span className='coloured'>DAG architecture</span>
                    </h1>
                    <div className='top_button'>
                        <div >
                            <button className='first_button'>Download Whitepaper</button>
                        </div>
                        <div>
                            <button  className='second_button'>Buy QTNL</button>
                        </div>
                    </div>
            </div>
            <div className='top_right'>
                    <div className='animation_top'>
                        <h1 className='animation_head'>Animation/illustration </h1>
                    </div>
            </div>
        </div>
    )
}

export default Top
