import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import blazing from "../assets/images/Blazing.svg"
import Low from "../assets/images/Low Fees.svg"
import Quick from "../assets/images/Quick Finality.svg"
import generation from "../assets/images/generation.svg"
import Security from "../assets/images/Security.svg"
import Stablity from "../assets/images/Stablity.svg"
import Fairness from "../assets/images/Fairness.svg"
import Speed from "../assets/images/Speed.svg"
import "../assets/css/decentralization.css"

const Decentralizaton = () => {
    return (
        <div className='decentralization_divs'>
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
<<<<<<< HEAD
                    <h1 className='topic_head'>The 4th Generation Of <span className='colors'> Public Ledgers </span></h1>
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
=======
                    <h1 className='topic_head'>Decentralization Redefined on  <span className='colors'> Quantally </span></h1>
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
>>>>>>> dbdd570... last commit
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className = "decentralization_cards">
                            <div className = "first_decentralization_card">
                                <div className = "decen_first_divs">
                                    <img src = {blazing} alt = "blazing" className = "blazing" />
                                        <h1 className = "blazing_head">Blazing Fast Throughput</h1>
                                </div>
                                        <h1 className = "blaz_para">Quantally handles up to an infinite QNTL transactions per second on a highly secure directed acyclic graph ledger architecture.</h1>
                            </div>
                                <div className = "second_decentralization_card">
<<<<<<< HEAD
                <div className = "decen_first_divs">
                        <img src = {Low} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Low Fees</h1>
                </div>
                    <h1 className = "blaz_para">The Quantally public ledger is lightweight. It allows for micropayments costing a fraction of a cent. The transactions are also executed at an incredible speed. Quantally is the platform of choice for small payments and believers inefficiency.</h1>
                </div>
                <div className = "third_decentralization_card">
                <div className = "decen_first_divs">
                        <img src = {Quick} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Low Fees</h1>
                </div>
                    <h1 className = "blaz_para">TDAG does not wait for miners to verify transactions before finality is reached. Anyone can become a node, and add transactions to the ledger that are identifiable with their parent transactions with their transaction hash. Previous transactions are parent transactions on Quantally.</h1>
=======
                                    <div className = "decen_first_divs">
                                            <img src = {Low} alt = "blazing" className = "blazing" />
                                            <h1 className = "blazing_head">Low Fees</h1>
                                    </div>
                                    <h1 className = "blaz_para">The Quantally public ledger is lightweight. It allows for micropayments costing a fraction of a cent. The transactions are also executed at an incredible speed. Quantally is the platform of choice for small payments and believers inefficiency.</h1>
                                    </div>
                <div className = "third_decentralization_card">
                <div className = "decen_first_divs">
                        <img src = {Quick} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Quick Finality</h1>
                </div>
                    <h1 className = "blaz_para">DAG does not wait for miners to verify transactions before finality is reached. Anyone can become a node, and add transactions to the ledger that are identifiable with their parent transactions with their transaction hash. Previous transactions are parent transactions on Quantally.</h1>
>>>>>>> dbdd570... last commit
                </div>
                <div className = "four_decentralization_card">
                <div className = "decen_first_divs">
                        <img src = {generation} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">4th generation distributed ledger technology.</h1>
                </div>
                    <h1 className = "blaz_para">Quantally is fair, safe and secure for everyone. It doesn’t matter who you are. The only requirement is that you start using Quantally now by signing up.</h1>
                </div>
            </div>
        </div>
        <div class="carousel-item">
        <div className = "decentralization_cards">
<<<<<<< HEAD
                <div className = "first_decentralization_card">
=======
                <div className = "first_decentralization_card security_div">
>>>>>>> dbdd570... last commit
                    <div className = "decen_first_divs">
                        <img src = {Security} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Security</h1>
                    </div>
                    <h1 className = "blaz_para">Quantally uses a mathematically secure DAG architecture that is resistant to Sybill and DDoS attacks.</h1>
                </div>
<<<<<<< HEAD
                <div className = "second_decentralization_card">
=======
                <div className = "second_decentralization_card res_second_decentra_card">
>>>>>>> dbdd570... last commit
                <div className = "decen_first_divs">
                        <img src = {Stablity} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Stablity</h1>
                </div>
                    <h1 className = "blaz_para">The Quantally DAO is a fair organization and anyone with the minimum requirements can be a member. The development team will never come up with a decision that does not go do</h1>
                </div>
<<<<<<< HEAD
                <div className = "third_decentralization_card">
=======
                <div className = "third_decentralization_card fairness_div">
>>>>>>> dbdd570... last commit
                <div className = "decen_first_divs">
                        <img src = {Fairness} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Fairness</h1>
                </div>
                    <h1 className = "blaz_para">The DAG architecture is based on fairness like we have never seen before in blockchain technology. A mathematically directed topological ordering and timestamps ensures that everyone is equal on Quantally.</h1>
                </div>
<<<<<<< HEAD
                <div className = "four_decentralization_card">
=======
                <div className = "four_decentralization_card speed_div">
>>>>>>> dbdd570... last commit
                <div className = "decen_first_divs">
                        <img src = {Speed} alt = "blazing" className = "blazing" />
                        <h1 className = "blazing_head">Speed</h1>
                </div>
                    <h1 className = "blaz_para">Quantally is a step ahead in speed compared to other blockchains. You won’t ever have to wait for your transactions to be verified and final. Transactions are finalized in seconds on Quantally.</h1>
                </div>
            </div>
        </div>
        </div>
              
                 <div className='two_carousel'>
                       <div className='first_carousel'>
<<<<<<< HEAD
                       <i class="fas fa-chevron-right left_arrows  carousel-control-prev pehla" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"></i>
                       </div>
                       <div className='second_carousel'>
                       <i class="fas fa-chevron-left right_arrows carousel-control-next dusra" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"></i>
                       </div>
                   </div>
       
=======
                       <i class="fas fa-chevron-left left_beyond_arrow" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"></i>

                       </div>
                       <div className='second_carousel'>
                       <i class="fas fa-chevron-right left_beyond_arrow" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"></i>

                       </div>
                   </div>
       {/* right_arrows carousel-control-next dusra */}
       {/* left_arrows  carousel-control-prev pehla */}
>>>>>>> dbdd570... last commit
        </div>
        </div>
    )
}

export default Decentralizaton
