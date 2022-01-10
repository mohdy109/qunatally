import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import Token from "../assets/images/Token Supply/Token illu.svg"
import Bar1 from "../assets/images/Bar SVG/Bar 1.svg"
import Bar2 from "../assets/images/Bar SVG/Bar 2.svg"
import Bar3 from "../assets/images/Bar SVG/Bar 3.svg"
import Bar4 from "../assets/images/Bar SVG/Bar 4.svg"
import Bar5 from "../assets/images/Bar SVG/Bar 5.svg"
import Bar6 from "../assets/images/Bar SVG/Bar 6.svg"
import Bar7 from "../assets/images/Bar SVG/Bar 7.svg"
import Buy15 from "../assets/images/Buy 15% SVG/Buy5.svg"
import "../assets/css/token.css"

const Tokenomics = () => {
    return (
        <div className='token_res_div'>
            <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>The  <span className='colors'> Tokenomics </span></h1>
                </div>
            </div>
            <div className='token_main_div'>
                <div className='token_pre_div'>
                    <img src = {Token} className='token_images' />
                </div>
                <div className='token_pre_divs'>
                        <div className='token_all'>
                            <h1 className='token_sale_para'>Presale 27.3%</h1>
                            <img src={Bar1} className = "token_percentage" />
                        </div>
                        <div className='token_all'>
                            <h1 className='token_sale_para'> Airdrop & Giveaway 5.7%</h1>
                            <img src={Bar2} className = "token_percentage" />
                        </div>
                        <div className='token_all'>
                            <h1 className='token_sale_para'>Initial Liquidity 10%</h1>
                            <img src={Bar3} className = "token_percentage" />
                        </div>
                        <div className='token_all'>
                            <h1 className='token_sale_para'>Marketing 5% </h1>
                            <img src={Bar4} className = "token_percentage" />
                        </div>
                        <div className='token_all'>
                            <h1 className='token_sale_para'> Development 25%</h1>
                            <img src={Bar5} className = "token_percentage" />
                        </div>
                        <div className='token_all'>
                            <h1 className='token_sale_para'>Burn Pool 10%</h1>
                            <img src={Bar6} className = "token_percentage" />
                        </div>
                        <div className='token_all'>
                            <h1 className='token_sale_para'>Team 10%</h1>
                            <img src={Bar7} className = "token_percentage" />
                        </div>
                </div>
            </div>
            <div className='bottom_tokens'>
                <div className='first_bottom_token'>
                 <div className='bottom_flex'>
                     <div>   <img src={Buy15} className='buyss first_buys' /></div>
                     <div>
                         <h1 className='head_buy lefti_token'>Buy: 15%</h1>
                         <h1 className='head_buy'>BUSD Reflections: 5%</h1>
                         <h1 className='head_buy'>Burn: 4% </h1>
                         <h1 className='head_buy'>Marketing & Dev: 3%</h1>
                         <h1 className='head_buy'>LP: 4%</h1>
                     </div>
                 </div>
                </div>
                <div className='second_bottom_token'>
                      <div className='first_bottom_token'>
                        <div className='bottom_flex'>
                        <div>   <img src={Buy15} className='buyss first_buys' /></div>
                     <div>
                         <h1 className='head_buy lefti_token'>Sell: 15%</h1>
                         <h1 className='head_buy'>BUSD Reflections: 5%</h1>
                         <h1 className='head_buy'>Burn: 4% </h1>
                         <h1 className='head_buy'>Marketing & Dev: 3%</h1>
                         <h1 className='head_buy'>LP: 4%</h1>
                     </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
