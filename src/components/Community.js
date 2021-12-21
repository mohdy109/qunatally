import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import reditt from "../assets/images/community/Reddit.svg"
import twitter from "../assets/images/community/twitters.svg"
import insta from "../assets/images/community/Instagram (2).svg"
import tiktok from "../assets/images/community/Tiktok.svg"
import twitch from "../assets/images/community/Twitch.svg"
import telegram from "../assets/images/community/Telegram.svg"
import discord from "../assets/images/community/Discord.svg"
import fb from "../assets/images/community/Facebook (2).svg"
import medium from "../assets/images/community/Medium.svg"
import "../assets/css/community.css"

const Community = () => {
    return (
        <div className='res_comm'>
            <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'> Our <span className='colors'> Community  </span></h1>
                </div>
            </div>
            <div className = "inner_community">
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {reditt} className = "logos" />
                    </div>
                     <div >
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Reddit Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {twitter} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Twitter Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {insta} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Instagram Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {tiktok} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Tiktok Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {twitch} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Twitch Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {telegram} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Telegram Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {discord} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Discord Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res">
                    <div className = "logo_res_im">
                        <img src = {fb} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Facebook Community</h1>
                    </div>
                </div>
                <div className = "inner_comm_res mod_comm_res">
                    <div className = "logo_res_im">
                        <img src = {medium} className = "logos" />
                    </div>
                     <div>
                        <h1 className = "join_our">Join Our</h1>
                        <h1 className = "reddit" >Medium Community</h1>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Community
