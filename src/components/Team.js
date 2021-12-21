import React from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import "../assets/css/team.css"
import firstmem from "../assets/images/firstmem.png"
import secmem from "../assets/images/secmem.png"
import thirdmem from "../assets/images/thirdmem.png"
import fourmem from "../assets/images/fourmem.png"
import fivemem from "../assets/images/fivemem.png"
import sixmem from "../assets/images/sixmem.png"
const Team = () => {
    return (
        <div className='team_div'>
                <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>Our Proud Team <span className='colors'>  </span></h1>
                    <h1 className='topic_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare curabitur sapien ut gravida consequat a pellentesque. Morbi at molestie tempor, pharetra pellentesque sed.</h1>
                </div>
            </div>
            <div className='teams_list'>
                <div className='first_member'>
                    <img src = {firstmem} className='first_mem' />
                    <h1 className='team_mem_name'>Jeff Thomas </h1>
                     <h1 className='team_mem_occ'>Director, Quantally</h1>
                </div>
                <div className='sec_member'>
                    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <img src={secmem} className = "sec_mem" />
                    </div>
                    <h1 className='team_mem_name'>Ketty Jones</h1>
                    <h1 className='team_mem_occ'>Managing Partner, Quantally</h1>
                </div>
                <div className='third_member'>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <img src={thirdmem} className = "sec_mem" />
                </div>
                    <h1 className='team_mem_name'>Nathon Tenner</h1>
                    <h1 className='team_mem_occ'>COO, Quantally</h1>
                </div>
                <div className='four_member'>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <img src={fourmem} className = "sec_mem" />
                </div>
                    <h1 className='team_mem_name res_name'>Michale Clarke</h1>
                    <h1 className='team_mem_occ'>CEO, Quantally</h1>
                </div>
                <div className='four_member'>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <img src={fivemem} className = "sec_mem" />
                </div>
                    <h1 className='team_mem_name res_names'>Ketty Jones</h1>
                    <h1 className='team_mem_occ'>Managing Partner, Quantally</h1>
                </div>
                <div className='four_member'>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <img src={sixmem} className = "sec_mem" />
                </div>
                    <h1 className='team_mem_name res_names'>Ketty Jones</h1>
                    <h1 className='team_mem_occ'>Managing Partner, Quantally</h1>
                </div>
            </div>    
        </div>
    )
}

export default Team
