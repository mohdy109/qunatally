import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/enterprise.css"
import Trust from "../assets/images/Enterprise/Trusted and Private.svg"
import Serve from "../assets/images/Enterprise/Designed to Serve Enterprises.svg"
import Networks from "../assets/images/Enterprise/Network Fees.svg"
import Prefer from "../assets/images/Enterprise/Develop in Your Preferred Language.svg"
import Reliable from "../assets/images/Enterprise/A Reliable Real-time Auditable log.svg"
import Connect from "../assets/images/Enterprise/Connecting Permissioned Networks.svg"
import Buy from "../assets/images/Buy Quantally.svg"
import Network from "../assets/images/Network.svg"
import Payment from "../assets/images/Payment.svg"
import Smartbar from "../assets/images/Enterprise/Image.png"
const Enterprise = () => {
    return (
        <div className='enterprise_div'> 
             <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head res_enterprise_head'>Decentralized & Secured Consensus<span className='colors'>  </span></h1>
                </div>
            </div>
            <div className='res_divs hexa_divs'>
         <img src={Smartbar}  className="img1 y enterprise_main_image" />
         </div>
         <div>
             <h1 className='image_para'>Capitalize on the trust of the Quantally public ledger with the benefits of a private and secured architecture. Worry less by building on Quantally for privacy, trust, and audibility.</h1>
         </div>
         <h1 className='topic_head res_truy'>Trusted <span className='colors'>& Private  </span></h1>
            
            <div className='flexi_core res_first_core_device'>
                <div>
                    <img src={Trust} className='decentra_mobile'  />
                </div>
                <div>
                    <h1 className='core_head left_core'>Trusted and Private</h1>
                    <h1 className='core_para left_core'>Capitalize on the trust of the Quantally public ledger with the benefits of a private and secured architecture. Worry less by building on Quantally for privacy, trust, and audibility.</h1>
                </div>
            </div>
            {/* Second */}
            <div className='flexi_core second_cores'>
                <div>
                    <h1 className='core_head right_core res_core_head'> Designed to Serve Enterprises</h1>
                    <h1 className='core_para right_core res_core_para'>Building is now better on Quantally with remarkable throughput, fast finality, and trusted timestamps.</h1>
                </div>
                <div>
                    <img src={Serve} className='decentra_mobile res_images enter_sec_imsg'  />
                </div>
            </div>
            {/* Third */}
            <div className='flexi_core core_networks'>
                <div>
                    <img src={Networks} className='decentra_mobile'  />
                </div>
                <div>
                    <h1 className='core_head left_core'>Network Fees</h1>
                    <h1 className='core_para left_core'>Quantally is designed to make you pay only what you spend and the fees for any transaction are just a fraction of a cent. Thanks to DAG architecture there are no high or arbitrary network fees and this is the case whether you are using a permission or a standalone blockchain.  </h1>
                </div>
            </div>
            {/* Fourth */}
            <div className='flexi_core payment_coress'>
                <div>
                    <h1 className='core_head right_core res_core_head'> Develop in Your Preferred Language</h1>
                    <h1 className='core_para right_core res_core_para'>Applications across industries can rely on Quantally for decentralized trust across applications. Businesses often rely on costly intermediaries to facilitate trust between parties, sharing of data, transacting value, and meeting regulatory compliance. New applications can benefit from Quantally’s high throughput, </h1>
                </div>
                <div>
                    <img src={Prefer} className='decentra_mobile res_images'  />
                </div>
            </div>
            <div className='flexi_core res_first_core_device five_resxs'>
                <div>
                    <img src={Reliable} className='decentra_mobile'  />
                </div>
                <div>
                    <h1 className='core_head left_core'>A Reliable Real-time Auditable log</h1>
                    <h1 className='core_para left_core'>Applications across industries can rely on Quantally for decentralized trust across applications. Businesses often rely on costly intermediaries to facilitate trust between parties, sharing of data, transacting value, and meeting regulatory compliance. New applications can benefit from Quantally’s high throughput,</h1>
                </div>
            </div>
            <div className='flexi_core second_cores res_last_pages'>
                <div>
                    <h1 className='core_head right_core res_core_head'> Connecting Permissioned Networks</h1>
                    <h1 className='core_para right_core res_core_para'>Centralized services with complex and costly configurations are often used by private companies to establish the interconnectivity of applications running on different blockchain frameworks. The companies can now confidently share data, messages, and communication across diverse blockchain frameworks using Quantally’s public network.</h1>
                </div>
                <div>
                    <img src={Connect} className='decentra_mobile res_images enter_sec_imsgs'  />
                </div>
            </div>
        </div>
    )
}

export default Enterprise
