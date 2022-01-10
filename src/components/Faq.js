import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import ques from "../assets/images/Q.svg"
import plus from "../assets/images/+.svg"
import arrow from "../assets/images/Arrow 2.png"
import "../assets/css/faq.css"

const Faq = () => {
    return (
<<<<<<< HEAD
        <div className='res_faq'>
             <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>Frequently Asked Questions <span className='colors'> </span></h1>
                </div>
            </div>
            <div class="accordion faq_accordion" id="accordionExample">
  <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head first_faq" id="headingOne">
     Is Quantally a blockchain?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
     </div>
      </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans">Quantally is a distributed and immutable public ledger that resembles a blockchain but it uses a different architecture, the DAG to reach consensus and enable quick finality using a parent of attribution to causality. Nodes can therefore verify transactions before adding them to the network.</h1>
      </div>
    </div>
  </div>
  </div>
      {/* Second */}

      <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head " id="headingTwo">
     Does quantally support enterprise applications?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
     </div>
      </div>
    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans">Quantally is built for enterprise applications and it supports the development or migration of existing enterprise infrastructure to the DAG-based distributed ledger. The process is made to be as seamless as possible with the least possible friction.</h1>
=======
//       <div style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <div className='res_faq'>
//              <div className='two_box_all_div'>
//                 <div>
//                     <img src={first} alt = "first_box" className='first_box' /> 
//                 </div>
//                 <div>
//                     <img src={second} alt = "first_box" className='second_box' /> 
//                 </div>
//                 <div>
//                     <h1 className='topic_head'>Frequently Asked Questions <span className='colors'> </span></h1>
//                 </div>
//             </div>
//            <div style = {{display:"flex", justifyContent:"center",alignItems:"center"}}>
//            <div class="accordion faq_accordion" id="accordionExample">
//   <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head first_faq" id="headingOne">
//      Is Quantally a blockchain?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
//      </div>
//       </div>
//     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans">Quantally is a distributed and immutable public ledger that resembles a blockchain but it uses a different architecture, the DAG to reach consensus and enable quick finality using a parent of attribution to causality. Nodes can therefore verify transactions before adding them to the network.</h1>
//       </div>
//     </div>
//   </div>
//   </div>
//       {/* Second */}

//       <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head " id="headingTwo">
//      Does quantally support enterprise applications?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
//      </div>
//       </div>
//     <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans">Quantally is built for enterprise applications and it supports the development or migration of existing enterprise infrastructure to the DAG-based distributed ledger. The process is made to be as seamless as possible with the least possible friction.</h1>
//       </div>
//     </div>
//   </div>
//   </div>

//   {/* Third */}
//   <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head" id="headingThree">
//      When will Quantally move to its mainchain from Binance Smart Chain?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" />
//      </div>
//       </div>
//     <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans">Expectations for this event are as soon as possible but the team is working tirelessly to ensure that the main chain offers all the features described in the whitepaper and more where it is possible to do so.</h1>
//       </div>
//     </div>
//   </div>
//   </div>
//     {/* Last */}
//     <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head first_faq" id="headingFour">
//      Why should I invest in Quantally?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" />
//      </div>
//       </div>
//     <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans"> 
//             If you believe in the future of decentralization, you will understand the limitations of current networks such as Ethereum which are not 100% resolved by rollups and plasma scaling solutions. DAG is the fastest and most scalable form of the distributed ledger at the moment. </h1>
//       </div>
//     </div>
//   </div>
//   </div>
//   {/* LEST */}
//   <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head fivess" id="headingFive">
//      How will Quantally avoid breaches and attacks on the mainchain and on other networks?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" />
//      </div>
//       </div>
//     <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans"> 
//             DAG is built for security. It prevents single points of failure using a similar logic like the blockchain but it is even more sophisticated when you compare it to the blockchain.  </h1>
//       </div>
//     </div>
//   </div>
//   </div>
//   {/*  */}
  
//   {/* POSP */}
//   <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head" id="headingSix">
//      What can I do to be a Quantally ambassador?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix" />
//      </div>
//       </div>
//     <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans"> 
            
// The Quantally ambassador program will be announced with time. The objective of the program is to get less technically savvy individuals into crypto and also show them the power and simplicity of Quantally. 
//        </h1>
//       </div>
//     </div>
//   </div>
//   </div>
//   {/*  */}
//   <div class="accordion-item faq_accor_item">
//       <div className = "faq_flex">
//         <div>
//             <img src = {ques} alt = "" className = "search_faq "/>
//         </div>
//      <div>
//      <h2 class="accordion-header faq_head" id="headingSeven">
//      Will the Game Oasis be integrated with other metaverses?
//     </h2>       
//     <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven" />
//      </div>
//       </div>
//     <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
//     <div className = "faq_flex">
//         <div>
//             <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
//         </div>
//       <div class="accordion-body">
//             <h1 className = "faq_ans"> 
//             If you believe in the future of decentralization, you will understand the limitations of current networks such as Ethereum which are not 100% resolved by rollups and plasma scaling solutions. DAG is the fastest and most scalable form of the distributed ledger at the moment. </h1>
//       </div>
//     </div>
//   </div>
//   </div>
// </div>
//            </div>
//         </div>
//         </div>
           <div className = "res_faq" >
              <div className='two_box_all_div'>
                 <div>
                     <img src={first} alt = "first_box" className='first_box' /> 
                 </div>
                 <div>
                     <img src={second} alt = "first_box" className='second_box' /> 
                 </div>
                 <div>
                     <h1 className='topic_head'>Frequently Asked Questions <span className='colors'> </span></h1>
                 </div>
             </div>
<div class="accordion" id="accordionExample">
  <div className='req_faq'>
  <div class="accordion-item">
    
  <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <img src = {ques}  className='ques' />
        <h1 className='faq_ques'>Is Quantally a blockchain?</h1>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    
      <div class="accordion-body">
        <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'>Quantally is a distributed and immutable public ledger that resembles a blockchain but it uses a different architecture, the DAG to reach consensus and enable quick finality using a parent of attribution to causality. Nodes can therefore verify transactions before adding them to the network.</h1>
      
    </div>
    </div>
  </div>
  </div>
  <div className='req_faq'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <img src = {ques}  className='ques' />
      <h1 className='faq_ques'>Does quantally support enterprise applications?</h1>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'>Quantally is built for enterprise applications and it supports the development or migration of existing enterprise infrastructure to the DAG-based distributed ledger. The process is made to be as seamless as possible with the least possible friction.</h1>
>>>>>>> dbdd570... last commit
      </div>
    </div>
  </div>
  </div>
<<<<<<< HEAD

  {/* Third */}
  <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head" id="headingThree">
     When will Quantally move to its mainchain from Binance Smart Chain?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" />
     </div>
      </div>
    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans">Expectations for this event are as soon as possible but the team is working tirelessly to ensure that the main chain offers all the features described in the whitepaper and more where it is possible to do so.</h1>
      </div>
    </div>
  </div>
  </div>
    {/* Last */}
    <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head first_faq" id="headingFour">
     Why should I invest in Quantally?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" />
     </div>
      </div>
    <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans"> 
            If you believe in the future of decentralization, you will understand the limitations of current networks such as Ethereum which are not 100% resolved by rollups and plasma scaling solutions. DAG is the fastest and most scalable form of the distributed ledger at the moment. </h1>
      </div>
    </div>
  </div>
  </div>
  {/* LEST */}
  <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head fivess" id="headingFive">
     How will Quantally avoid breaches and attacks on the mainchain and on other networks?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" />
     </div>
      </div>
    <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans"> 
            DAG is built for security. It prevents single points of failure using a similar logic like the blockchain but it is even more sophisticated when you compare it to the blockchain.  </h1>
      </div>
    </div>
  </div>
  </div>
  {/*  */}
  
  {/* POSP */}
  <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head" id="headingSix">
     What can I do to be a Quantally ambassador?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix" />
     </div>
      </div>
    <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans"> 
            
The Quantally ambassador program will be announced with time. The objective of the program is to get less technically savvy individuals into crypto and also show them the power and simplicity of Quantally. 
       </h1>
      </div>
    </div>
  </div>
  </div>
  {/*  */}
  <div class="accordion-item faq_accor_item">
      <div className = "faq_flex">
        <div>
            <img src = {ques} alt = "" className = "search_faq "/>
        </div>
     <div>
     <h2 class="accordion-header faq_head" id="headingSeven">
     Will the Game Oasis be integrated with other metaverses?
    </h2>       
    <img src  = {plus} class="faq_plus"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven" />
     </div>
      </div>
    <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
    <div className = "faq_flex">
        <div>
            <img src = {arrow} alt = "" className = "search_faq arrow_faq"/>
        </div>
      <div class="accordion-body">
            <h1 className = "faq_ans"> 
            If you believe in the future of decentralization, you will understand the limitations of current networks such as Ethereum which are not 100% resolved by rollups and plasma scaling solutions. DAG is the fastest and most scalable form of the distributed ledger at the moment. </h1>
      </div>
    </div>
  </div>
  </div>
</div>
        </div>
=======
  <div className='req_faq'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <img src = {ques}  className='ques' />
      <h1 className='faq_ques'>When will Quantally move to its mainchain from Binance Smart Chain?</h1>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'> 
Expectations for this event are as soon as possible but the team is working tirelessly to ensure that the main chain offers all the features described in the whitepaper and more where it is possible to do so.</h1>
      </div>
    </div>
  </div>
</div>
<div className='req_faq'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <img src = {ques}  className='ques' />
      <h1 className='faq_ques'>Why should I invest in Quantally?</h1>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'> 
If you believe in the future of decentralization, you will understand the limitations of current networks such as Ethereum which are not 100% resolved by rollups and plasma scaling solutions. DAG is the fastest and most scalable form of the distributed ledger at the moment.</h1>
      </div>
    </div>
  </div>
</div>
<div className='req_faq'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <img src = {ques}  className='ques' />
      <h1 className='faq_ques'>How will Quantally avoid breaches and attacks on the mainchain and on other networks?</h1>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'> 
      DAG is built for security. It prevents single points of failure using a similar logic like the blockchain but it is even more sophisticated when you compare it to the blockchain. 
      </h1>
      </div>
    </div>
  </div>
</div>
<div className='req_faq'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <img src = {ques}  className='ques' />
      <h1 className='faq_ques'>What can I do to be a Quantally ambassador?</h1>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'> 
      The Quantally ambassador program will be announced with time. The objective of the program is to get less technically savvy individuals into crypto and also show them the power and simplicity of Quantally. 
      </h1>
      </div>
    </div>
  </div>
</div>
<div className='req_faq'>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      <img src = {ques}  className='ques' />
      <h1 className='faq_ques'>Will the Game Oasis be integrated with other metaverses?</h1>
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img src = {arrow} className = "arrow" />
      <h1 className='faq_ans'> 
      The team is working towards that, although this feature may not be available right away when the project is launched. Interoperability is a core objective of the project, and the team is working hard to achieve this.
      </h1>
      </div>
    </div>
  </div>
</div>
</div>
</div>

>>>>>>> dbdd570... last commit
    )
}

export default Faq
