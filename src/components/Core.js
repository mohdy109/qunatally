import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import Decentra from "../assets/images/Decentralized Applications.svg"
import Buy from "../assets/images/Buy Quantally.svg"
import Network from "../assets/images/Network.svg"
import Payment from "../assets/images/Payment.svg"
import "../assets/css/core.css"
const Core = () => {
    return (
        <div className='core_main'>
<<<<<<< HEAD
            <div className='two_box_all_div'>
=======
            <div className='two_box_all_div core_div'>
>>>>>>> dbdd570... last commit
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>Core <span className='colors'> Benifits</span></h1>
                </div>
            </div>
            <div className='flexi_core'>
                <div>
                    <img src={Decentra} className='decentra_mobile'  />
                </div>
                <div>
<<<<<<< HEAD
                    <h1 className='core_head left_core'>Decentralized Applications</h1>
=======
                    <h1 className='core_head first_core left_core'>Decentralized Applications</h1>
>>>>>>> dbdd570... last commit
                    <h1 className='core_para left_core only_this'>The Quantally decentralized application layer allows enterprise and developers to build their applications and solutions for their customers. Developers will have full control of their projects and the project will benefit from the speed, low fees, and transparency of the Quantally public ledger</h1>
                </div>
            </div>
            {/* Second */}
            <div className='flexi_core second_cores'>
                <div>
                    <h1 className='core_head right_core res_core_head'> Buy Quantally </h1>
                    <h1 className='core_para right_core res_core_para only_this'>You can purchase your QNTL tokens in a few clicks on any exchange that supports QNTL. Quantally will partner with other centralized and decentralized exchanges to make QNTL available and users can also benefit from Quantally liquidity pools on DeFi platforms.</h1>
                </div>
                <div>
                    <img src={Buy} className='decentra_mobile res_images'  />
                </div>
            </div>
            {/* Third */}
            <div className='flexi_core core_network'>
                <div>
<<<<<<< HEAD
                    <img src={Network} className='decentra_mobile'  />
                </div>
                <div>
                    <h1 className='core_head left_core'>Network</h1>
=======
                    <img src={Network} className='decentra_mobile new_core_img'  />
                </div>
                <div>
                    <h1 className='core_head first_cores left_core'>Network</h1>
>>>>>>> dbdd570... last commit
                    <h1 className='core_para left_core only_this'>In a decentralized future, any asset can be tokenized and entire economies will run on a public ledger. Quantally is one of the public networks making this dream a reality for companies and developers. </h1>
                </div>
            </div>
            {/* Fourth */}
            <div className='flexi_core payment_cores'>
                <div>
                    <h1 className='core_head right_core res_core_head'> Payment </h1>
                    <h1 className='core_para right_core res_core_para only_this'>Use your cryptocurrency to innovate on Quantally, by deploying a secure, and efficient means of payment that is also compliant with your guiding regulations as well as cost-effective. You don’t need to own a blockchain to enjoy the benefits of distributed ledger technology. </h1>
                </div>
                <div>
<<<<<<< HEAD
                    <img src={Payment} className='decentra_mobile res_images'  />
=======
                    <img src={Payment} className='decentra_mobile res_images pay_core_img'  />
>>>>>>> dbdd570... last commit
                </div>
            </div>
            <div className='buttons_core'>
                <button className='benefit_button'>View All Benefits</button>
            </div>
        </div>
    )
}

export default Core
