import React from 'react'
import longpage from "../assets/images/longpage.svg"
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import Pub from "../assets/images/Pub.svg"
<<<<<<< HEAD
import Services from "../assets/images/Services.svg"
=======
import Khan from "../assets/images/Khan.svg"
>>>>>>> dbdd570... last commit
import Node from "../assets/images/Node.svg"
import Minting from "../assets/images/Minting.svg"
import Ordering from "../assets/images/Ordering.svg"
import Program from "../assets/images/Program.svg"
import File from "../assets/images/File.svg"
import App from "../assets/images/App.svg"
import Network from "../assets/images/Network.svg"
import Test from "../assets/images/Test.svg"
import Mainet from "../assets/images/Mainet.svg"
import Open from "../assets/images/Open.svg"
import "../assets/css/how.css"

const How = () => {
    return (
        <div className="how">
          
          <div>
              <img src={longpage}  className="img1" />
              </div>
              <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>How it <span className='colors'> Works</span></h1>
                </div>
            </div>
            <div className="contents">
           <h2>A hypergraph is the movement of data in a decentralized network that has a token attached to it. It provides immutability, scalability, and security which helps businesses store data. DAG is not linear and expands in multiple directions at the same time leading to high scalability and blazing fast. With Quantally it makes sense to hold the token forever since Quantally uses a community-first approach that makes the network formidable and accrues value to the token.</h2>
            </div>
<<<<<<< HEAD
            <div className="a">
<div className="button"><img  src={Pub} /><h4>A Reliable Public Ledger</h4></div>
<div className="button"> <img src={Node} /><h4> Nodes</h4></div>
<div className="button"><img src={Services} /><h4> Quantally Services</h4></div>
            </div>
            <div className="ledgers_how"> 
             <h3>   A Reliable Public Ledger</h3>
            </div>
            <div className="contents p">
           <h2>  Quantally is a secure and distributed database of transactions and a public ledger that everyone can review and edit. Each node stores a recent copy of the ledger and the distributed and decentralized nature of the ledger makes it the best way to store verifiable information and assets.</h2>
            </div>
            <div className="a">
<div className="button"><img  src={Minting} /><h4>Minting</h4></div>
<div className="button"> <img src={Ordering} /><h4>Consensus Ordering</h4></div>
<div className="button"><img src={Program} /><h4>Program Smart Contracts</h4></div>
            </div>
            <div className="a">
<div className="button"><img  src={File} /><h4>Files</h4></div>
<div className="button"> <img src={App} /><h4>Decentralized Application</h4></div>
<div className="button"><img src={Network} /><h4>Quantally Networks</h4></div>
            </div>
            <div className="a">
<div className="button"><img  src={Test} /><h4>Quantally Testnet</h4></div>
<div className="button"> <img src={Mainet} /><h4>Quantally Mainnet</h4></div>
<div className="button"><img src={Open} /><h4>Open Source</h4></div>
            </div>
=======
            <div class="container">
  <div class="row">
    <div class="col">
    <div className="cards">
<img src={Pub} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">A Reliable Public Ledger</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Node} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Nodes</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Khan} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Quantally Services</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col">
    <div className="cards">
<img src={Minting} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Minting</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Ordering} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Consensus Ordering</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Program} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Program Smart Contracts</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
    <div className="cards">
<img src={File} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Files</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={App} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Decentralized Applications</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Network} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Quantally Networks</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
    <div className="cards">
<img src={Test} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Quantally Testnet</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Mainet} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Quantally Mainnet</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
    <div class="col">
    <div className="cards">
<img src={Open} class="card-img-top" alt="small bussiness" />
<div class="card-body">
<h5 class="card-title">Open Source</h5>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
</div>
    </div>
  </div>
</div>
>>>>>>> dbdd570... last commit

        </div>
    )
}

export default How
<<<<<<< HEAD
=======




>>>>>>> dbdd570... last commit
