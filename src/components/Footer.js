import React from 'react'
import "../assets/css/footer.css"
import Quantallylogo from "../assets/images/Quantallylogo.svg"
// import Discord from "../assets/Discord.svg"
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import medium from "../assets/images/medium.svg"
import reddit from "../assets/images/reddit.svg"
import telegram from "../assets/images/telegram.svg"
import tiktok from "../assets/images/Tiktok.svg"
import twitch from "../assets/images/twitch.svg"
import twitter from "../assets/images/twitter.svg"
import Discord from "../assets/images/Discord.svg"


export default function Footer() {
    return (
        <div className="footer">
            <div className='res_footer_logo'>
            <img className="icon" src={Quantallylogo}/>
            </div>
            <div className="use4">
                <a className="yes">network</a>
                <a>Token services</a>
                <a>Consensus Service</a>
                <a>How it Works</a>
                <a>Explorers</a>
                <a>Dashboard</a>
                <a>Network Nodes</a>
                <a>Status</a>
</div>

  
<div className="use">
                <a className="yes">Use Cases</a>
                <a>case studies</a>
                <a>payments</a>
                <a>tokenised assets</a>
                <a>fraud mitigation</a>
                <a>identity</a>
                <a>data compilance</a>
                <a>permissioned bloackchain</a>
                <a>enterprize</a>
                <a>heath care</a>
                <a>gaming</a>


</div>
<div className="use1">
                <a className="yes">About</a>
                <a >Team</a>
                <a>Partners</a>
                <a >Journey</a>
                <a>Roadmao</a>
                <a >MVP</a>
                <a>Careers</a>
                <a>Brand</a>
               


</div>
<div className="use2">
                <a className="yes">Media</a>
                <a >Press</a>
                <a>News</a>
                <a >Blog</a>
                <a>Podcast</a>
                <a >Videos</a>
                
            
</div>
<div className="use3">
                <a className="yes">Other</a>
                <a >Blog</a>
                <a>Podcast</a>
                <a >Events</a>
                <a>Papers</a>
                <a >Audits</a>
                <a >Shop</a>
                <a>Careers</a>
                <a >FAQ</a>
                <a>Contact</a>
                <a >Pr</a>
                
        </div>
        <p className="para">  2021-2022 Quantally, LLC. All trademarks and company names are the property of their respective owners.
</p>
            <div className='social_logos'>
            <div className="facebook">

<img src={Discord}/>
<img src={tiktok}/>
<img src={reddit}/>
<img src={twitter}/>
<img src={instagram}/>
<img src={facebook}/>
<img src={twitch}/>
<img src={telegram}/>
<img src={medium}/>

            </div>

            </div>
            <p className="copyright">Copyright © Quantally 2021. All rights reserved. </p>
        </div>
    )
}
