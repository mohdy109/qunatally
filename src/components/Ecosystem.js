import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/eco.css"
import Ecosystem from "../assets/images/Ecosystem mobile Screen.png"

const EcoSystem = () => {
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
        </div>
    )
}

export default EcoSystem
