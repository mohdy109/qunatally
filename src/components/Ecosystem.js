<<<<<<< HEAD
import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/eco.css"
import Ecosystem from "../assets/images/Ecosystem mobile Screen.png"

const EcoSystem = () => {
=======
import React,{Component} from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/eco.css"
import Slider from "react-slick";
import Minting from "../assets/images/eco/Mining gadget.svg"
import Cold from "../assets/images/eco/Cold Wallet.svg"
import CryptoTrade from "../assets/images/eco/crypto Trading app.svg"
import Dog from "../assets/images/eco/Dag Wallet.svg"
import Meta from "../assets/images/eco/Meta Oasis.svg"
import Dag from "../assets/images/eco/Dag Launch Pad.svg"
import Block from "../assets/images/eco/DAG Blockchain.svg"
import {ArrowBackIos,ArrowForwardIos} from "@material-ui/icons"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
   
      className={className}
      style={{ ...style, background: "#433ED1",color:"white",textAlign:"center",height:"50px",width:"50px",padding:"15px",borderRadius:"50px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#433ED1",textAlign:"center",height:"50px",width:"50px",padding:"15px",borderRadius:"50px" }}
      onClick={onClick}
    />
  );
}


const EcoSystem = () => {
  
    const settings = {
        dots: false,
        infinite: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 4,
                dots: true,
                nextArrow:false,
                prevArrow:false
              }
            },
            {
              breakpoint: 1783,
              settings: {
                slidesToShow:3,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              },
              
            },
            {
              breakpoint: 411,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              },
              
            },
            {
                breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                nextArrow:false,
                prevArrow:false,
                dots:true
              },
            }
          ]
    }
    
>>>>>>> dbdd570... last commit
    return (
        <div className = "decentralization_div exos_div">
            <div className='two_box_all_div eco_res_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>The <span className='colors'> Ecosystem </span></h1>
                </div>
            </div> 
            <h1 className = "join_eco">Join Our Ecosystem</h1> 
<<<<<<< HEAD
            <div className = "eco_flex"  style = {{display:"flex"}}>
            {/* <div className = "eco_mob_img">
                    <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                </div>  */}
                <div className = "eco_res_main" style = {{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                    <div>
                        <div class="accordion res_sec_des" id="accordionExample">
                            <div class="accordion-item eco_res">
                                    <button class="accordion-button hovering" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h2 class="accordion-header res_heading" id="headingOne">
                                            Mining gadget 
                                    </h2>
                                    </button>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                    <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                                        <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="accordion-item eco_res">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h2 class="accordion-header two" id="headingTwo">
                                            Cold Wallet
                                        </h2>   
                                    </button>
                            <div id="collapseTwo" class="accordion-collapse collapse ans" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item eco_res second_eco">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h2 class="accordion-header two" id="headingThree">
                                            Meta Oasis
                                        </h2>   
                                    </button>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item eco_res">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h2 class="accordion-header two" id="headingFour">
                                            Crypto Trading app
                                        </h2>   
                                    </button>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item eco_res">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <h2 class="accordion-header two" id="headingFive">
                                            DAG Blockchain
                                        </h2>   
                                    </button>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item eco_res">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <h2 class="accordion-header two" id="headingSix">
                                        Dag Social
                                        </h2>   
                                    </button>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item eco_res " >
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <h2 class="accordion-header two" id="headingSeven">
                                        Dag Dex
                                        </h2>   
                                    </button>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item eco_res res_new_ecos">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        <h2 class="accordion-header two" id="headingEight">
                                        Dag Wallet
                                        </h2>   
                                    </button>
                            <div id="collapseEight" class="accordion-collapse collapse " aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                        <div class="accordion-item  last_new_eco">
                                    <button class="accordion-button collapsed acc_ne_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        <h2 class="accordion-header two" id="headingNine">
                                        Dag Launch Pad
                                        </h2>   
                                    </button>
                            <div id="collapseNine" class="accordion-collapse collapse " aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <img src = {Ecosystem} className = "eco_img eco_mob_imgs" alt = "eco_img " />
                            <h1 className = "accordion_head">Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                            </div>
                            </div>
                         </div>  
                    </div>
                    <div>
                  </div>
                </div>   
                 
            </div>     
=======
            <div>
        <Slider {...settings}>
        
          <div className='mob_ecos_de'>
          <div style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className='first_card_eco_system first_card_luk'>
            <h1 className='eco_heading_title'>Mining gadget</h1>
            <img src = {Minting} className='eco_mob' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>
          </div>
          
          </div>

          <div className='first_card_eco_system second_card_luk res_mob_ecos'>
            <h1 className='eco_heading_title'>Cold Wallet</h1>
            <img src = {Cold} className='eco_mob ' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className='first_card_eco_system third_card_luk res_mob_ecos'>
            <h1 className='eco_heading_title'>crypto Trading app</h1>
            <img src = {CryptoTrade} className='eco_mob third_eco_img' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className='first_card_eco_system first_card_luk res_mob_ecos mf'>
            <h1 className='eco_heading_title'>Dag Wallet</h1>
            <img src = {Dag} className='eco_mob' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className='first_card_eco_system second_card_luk res_mob_ecos meta'>
            <h1 className='eco_heading_title'>Meta Oasis</h1>
            <img src = {Meta} className='eco_mob' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className='first_card_eco_system third_card_luk res_mob_ecos'>
            <h1 className='eco_heading_title'>Dag Launch Pad</h1>
            <img src = {Dog} className='eco_mob' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className='first_card_eco_system first_card_luk res_mob_ecos mf'>
            <h1 className='eco_heading_title'>DAG Blockchain</h1>
            <img src = {Block} className='eco_mob' />
            <h1 className='eco_desc'>Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
          </div>

        </Slider>
      </div>
>>>>>>> dbdd570... last commit
        </div>
    )
}

export default EcoSystem
