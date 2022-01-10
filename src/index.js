import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import App from "./App";


ReactDOM.render(
  <React.StrictMode>

      <App />
    
  </React.StrictMode>,
  document.getElementById("root")
);
{/* <div class="accordion " id="accordionExample">
  <div class="accordion-item ">
  <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h2 className='faq_ans'>Is Quantally a blockchain ?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style = {{display:"flex"}}>
      <div>
        <img src = {arrow} className='ans' />
        </div>
      <div class="accordion-body">
        <h1 className = "faq_ans">Quantally is a distributed and immutable public ledger that resembles a blockchain but it uses a different architecture, the DAG to reach consensus and enable quick finality using a parent of attribution to causality. Nodes can therefore verify transactions before adding them to the network.</h1>
      </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
  <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingTwo">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      <h2 className='faq_ans'>Does quantally support enterprise applications?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={{display:'flex'}}>
      <div>
        <img src = {arrow} className='ans' />
        </div>
      <div class="accordion-body">
        <h2 className='faq_ans'> Quantally is built for enterprise applications and it supports the development or migration of existing enterprise infrastructure to the DAG-based distributed ledger. The process is made to be as seamless as possible with the least possible friction</h2>
      </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
  <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingThree">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
      <h2 className='faq_ans'>When will Quantally move to its mainchain from Binance Smart Chain?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={{display:"flex"}}>
      <div>
        <img src = {arrow} className='ans' />
        </div>
        <div class="accordion-body">
        <h1 className='faq_ans'> Expectations for this event are as soon as possible but the team is working tirelessly to ensure that the main chain offers all the features described in the whitepaper and more where it is possible to do so.</h1>
      </div>
      </div>
      
    </div>
  </div>
  <div class="accordion-item">
  <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingFour">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
      <h2 className='faq_ans'> Why should I invest in Quantally?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div style={{display:"flex"}}>
      <div>
        <img src = {arrow} className='ans' />
        </div>
        <div class="accordion-body">
        <h1 className='faq_ans'> If you believe in the future of decentralization, you will understand the limitations of current networks such as Ethereum which are not 100% resolved by rollups and plasma scaling solutions. DAG is the fastest and most scalable form of the distributed ledger at the moment.</h1>
      </div>
      </div>
     
    </div>
  </div>
  <div class="accordion-item">
  <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingFive">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
      <h2 className='faq_ans'>How will Quantally avoid breaches and attacks on the mainchain and on other networks?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div style={{display:"flex"}}>
        <div>
        <img src = {arrow} className='ans' />
        </div>
        <div class="accordion-body">
        <h1 className='faq_ans'>DAG is built for security. It prevents single points of failure using a similar logic like the blockchain but it is even more sophisticated when you compare it to the blockchain.</h1>
      </div>
      </div>
      
    </div>
  </div>
  <div class="accordion-item">
  <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingSix">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      <h2 className='faq_ans'>What can I do to be a Quantally ambassador?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div style={{display:"flex"}}>
        <div>
        <img src = {arrow} className='ans' />
        </div>
        <div class="accordion-body">
        <h1 className='faq_ans'> The Quantally ambassador program will be announced with time. The objective of the program is to get less technically savvy individuals into crypto and also show them the power and simplicity of Quantally.</h1>
      </div>
      </div>
     
    </div>
    <div class="accordion-item seven_accor">
    <div style={{display:"flex",alignItems:"center",border:"1px solid #BEC1FF"}}>
     <div style={{width:"5%"}}>
       <img src = {ques} className='ques'  />
     </div>
     <div style={{width:"100%"}}>
     <h2 class="accordion-header faq_ans" id="headingSeven">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
      <h2 className='faq_ans'>Will the Game Oasis be integrated with other metaverses?</h2>
      </button>
    </h2>
     </div>
   </div>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div style={{display:"flex"}}>
        <div>
          <img src = {arrow} className='ans' />
        </div>
        <div class="accordion-body">
        <h1 className='faq_ans'> The team is working towards that, although this feature may not be available right away when the project is launched. Interoperability is a core objective of the project, and the team is working hard to achieve this. </h1>
      </div>
      </div>
    </div>

  </div>
</div> */}

// .accordion{
//   margin-top: 90px;

 
// }


// .accordion-item{
//   margin-top: 20px;
// }
// .accordion-button:focus {
//   outline: 0 !important;
//   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
//   background-color: white;
// }

// .accordion:hover{
//   box-shadow: 0px 4px 14px #E8EAFF;
// }



// .accordion-header{
//   font-family: Poppins;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 38px;
//   color: #383838;
// }

// .faq_ans{
//   font-family: Poppins;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 38px;
//   /* or 237% */
  
  
//   color: #383838;
// }

// .ans{
//   margin-top: 40px;
//   margin-left: 10px;
// }

// .ques{
//   margin-left: 20px;
// }

// @media screen and (max-width:425px){
//   .accordion{
//       margin-left: 30px;
//   }

//   .accordion-item{
//       margin-top: 30px;
//   }
//   .seven_accor{
//       margin-top: 100px;
//   }

//   .accordion:hover{
//       background: none;
//   }

//   .accordion-body{
//       height: 530px;
//   }
 
// }