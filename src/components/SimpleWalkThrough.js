import React from 'react'
import "../assets/css/simplebox.css"
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import Qtnl from "../assets/images/Qtnl.svg"
import Network from "../assets/images/Network.svg"
import Staking from "../assets/images/Staking.svg"
const SimpleWalkThrough = () => {
    return ( 
        <div>
            <div className='two_box_all_div core_div' >
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>A Simple <span className='colors'>Walk-through</span></h1>
                </div>
            </div>
            <div className='simple_walk'>
                <div className='flex_walkThroug'>
                    <div>
                        <img src = {Qtnl} className='all_walk_left_img' />
                    </div>
                    <div className='left_walk_side'>
                        <h1 className='multiple'>Multiple Purposes of QNTL</h1>
                        <h1 className='quan_para'>QNTL is the native cryptocurrency of the Quantally public network. It consumes low energy and secures the network from hackers by incentivizing platform transactions and nodes. QNTL is the driver token for decentralized applications on Quantally.</h1>
                    </div>
                </div>
                <div className='flex_walkThroug'>
                    <div>
                        <img src = {Network} className='all_walk_left_img' />
                    </div>
                    <div className='left_walk_side'>
                        <h1 className='multiple'>Network Fees </h1>
                        <h1 className='quan_para'>Developers building apps on the Quantally public network will pay fees to compensate Quantally Nodes for bandwidth, computation, and storage. Typical transactions that require payment include transferring QNTL to other users, logging data, and payment of network fees.</h1>
                    </div>
                </div>
                <div className='flex_walkThroug'>
                    <div>
                        <img src = {Staking} className='all_walk_left_img' />
                    </div>
                    <div className='left_walk_side'>
                        <h1 className='multiple'>Staking </h1>
                        <h1 className='quan_para'>Although Quantally uses DAG architecture instead of proof-of-stake to order transactions topologically or linearly and reach consensus, staking is also a feature of the Quantally public network. Validator nodes will stake at least 250 QNTL tokens to verify transactions after meeting the hardware requirements and virtual instances defined by Quantally. </h1>
                    </div>
                </div>
            </div>
        </div>

)
}

export default SimpleWalkThrough
