import React, {useState} from 'react'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import line from "../assets/images/line.png"
import Timefirst from "../assets/images/Timefirst.png"
import TimelineSec from "../assets/images/TimelineSec.png"
import Ellipse from "../assets/images/Ellipse 5.png"
import Ellipse7 from "../assets/images/Ellipse 7.png"
import "../assets/css/timeline.css"

const Timeline = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <div className='res_timeline_div'>
            <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>What's Our  <span className='colors'> Timeline </span></h1>
                </div>
            </div>
            {/* <div className = "timeline_div">
                <div className='time_first_flex'>
                    <img src = {Ellipse} className='ellip5 firsts' />
                    <img src = {Timefirst} className = "time_fir" />
                    <div className='time_first_block'>
                    <h1 className='milestone_title'>Milestone Title</h1>
                    <h1 className='milestone_date'>4th June 2020</h1>
                    </div>
                </div>
                <div className='time_first_flex'>
                <img src = {Ellipse} className='ellip5 second_timeline' />
                <img src = {TimelineSec} className = "time_sec" />
                    <div className='time_first_block'>
                    <h1 className='milestone_title second_title'>Milestone Title</h1>
                    <h1 className='milestone_date second_date'>4th June 2020</h1>
                    </div>
                </div>
                <div className='time_first_flex'>
                <img src = {Ellipse} className='ellip5 third_timeline' />
                    <div className='time_first_block'>
                    <h1 className='milestone_title third_milestone'>Milestone Title</h1>
                    <h1 className='milestone_date third_date'>4th June 2020</h1>
                    </div>
                </div>
            </div>
            <div className = "arrows">
                            <i class="fas fa-chevron-left fks"></i>
                            <img src = {line} className = "line" />
                            <i class="fas fa-chevron-right fks_right"></i>
            </div>
            <div className = "timeline_div bottom_timeline_div">
                <div className='time_first_flex left_side_timeline'>
                <img src = {Ellipse} className='ellip5'  />
                    <div className='time_first_block'>
                    <h1 className='milestone_title'>Milestone Title</h1>
                    <h1 className='milestone_date'>4th June 2020</h1>
                    </div>
                </div>
                <div className='time_first_flex'>
                <img src = {Ellipse} className='ellip5'  />
                    <div className='time_first_block'>
                    <h1 className='milestone_title'>Milestone Title</h1>
                    <h1 className='milestone_date'>4th June 2020</h1>
                    </div>
                </div>
                <div className='time_first_flex'>
                <img src = {Ellipse} className='ellip5'  />
                    <div className='time_first_block'>
                    <h1 className='milestone_title'>Milestone Title</h1>
                    <h1 className='milestone_date'>4th June 2020</h1>
                    </div>
                </div>
            </div> */}
             <div className = "inner_timeline_div">
                      <div style={style} id = "lorem_timeline" className = "lorem">
                      <h1 className = "lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim viverra cras porta erat.</h1>
                      </div>
                     <div className = "flex_timeline">
                        <div id = "res_block_timeline" className = "ellip">
                            <div 
                             onMouseEnter={e => {
                                setStyle({display: 'block'});
                          }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}

                           
                            >
                                <img src = {Ellipse} className = "ellip5" />
                                <img src = {Timefirst} className = "time_fir" />
                            </div>
                            <div>
                                <h1 className = "milestone_title first_miletitle">Milestone Ttile</h1>
                                <h1 className = "milestone_date first_miledate">4th June 2019</h1>
                                <img src = {TimelineSec} className = "timesec_fir" />
                            </div>
                        </div>
                        <div className = "ellip next">
                            <div 
                             onMouseEnter={e => {
                                setStyle({display: 'block'});
                          }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                            >
                                <img src = {Ellipse7} className = "ellip5" />
                            </div>
                            <div>
                                <h1 className = "milestone_title res_sec_tos">Milestone Ttile</h1>
                                <h1 className = "milestone_date res_sec_tos">4th June 2019</h1>
                            </div>
                        </div>
                        <div className = "ellip next res_time_res">
                            <div
                             onMouseEnter={e => {
                                setStyle({display: 'block'});
                          }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                            >
                                <img src = {Ellipse7} className = "ellip5" />
                            </div>
                            <div>
                                <h1 className = "milestone_title first_miletitles">Milestone Ttile</h1>
                                <h1 className = "milestone_date first_miledates">4th June 2019</h1>
                            </div>
                        </div>
                        <div  className = "ellip next res_last">
                            <div>
                                <img src = {Timefirst} className = "time_firss" />
                                <img src = {Ellipse7} className = "ellip5 res_ellp" />
                            </div>
                            <div>
                                <h1 className = "milestone_title res_sec_to upper">Milestone Ttile</h1>
                                <h1 className = "milestone_date res_sec_to upper">4th June 2019</h1>
                            </div>
                        </div>
                     </div>
                     <div className = "arrows">
                            <i class="fas fa-chevron-left fks"></i>
                            <img src = {line} className = "line" />
                            <i class="fas fa-chevron-right fks"></i>
                     </div>
                     <div className = "ellip als_res">
                     <div className = "ellip next">
                            <div
                             onMouseEnter={e => {
                                setStyle({display: 'block'});
                          }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                            >
                                <img src = {Ellipse7} className = "ellip5 bottom" />
                            </div>
                            <div>
                                <h1 className = "milestone_title">Milestone Ttile</h1>
                                <h1 className = "milestone_date">4th June 2019</h1>
                            </div>
                        </div>
                        <div className = "ellip next">
                            <div
                                 onMouseEnter={e => {
                                    setStyle({display: 'block'});
                              }}
                                onMouseLeave={e => {
                                    setStyle({display: 'none'})
                                }}
                            >
                                <img src = {Ellipse7} className = "ellip5 bottom" />
                            </div>
                            <div>
                                <h1 className = "milestone_title">Milestone Ttile</h1>
                                <h1 className = "milestone_date">4th June 2019</h1>
                            </div>
                        </div>
                        <div className = "ellip next">
                            <div
                             onMouseEnter={e => {
                                setStyle({display: 'block'});
                          }}
                            onMouseLeave={e => {
                                setStyle({display: 'none'})
                            }}
                            >
                                <img src = {Ellipse7} className = "ellip5 bottom " />
                            </div>
                            <div>
                                <h1 className = "milestone_title corner">Milestone Ttile</h1>
                                <h1 className = "milestone_date corner">4th June 2019</h1>
                            </div>
                        </div>
                    </div>  

            </div>
      
        </div>
    )
}

export default Timeline
