import React from 'react'
import "../assets/css/countdown.css"
import { useState,useRef,useEffect } from 'react';
const Countdown = () => {
        
    const [day,setDay]= useState("00");
    const [hour,setHour]= useState("00");
    const [minutes,setMinutes]= useState("00");
    const [second,setSecond]= useState("00");
    let interval = useRef();
    const startTimer = ()=>{
        const  countdowndate = new Date("Jan 30,2022 00:00:00").getTime();
        
        interval = setInterval(()=>{

            const  now = new Date().getTime();
            const  diff = countdowndate - now;
            const  days = Math.floor(diff / (1000*60*60*24)); 
            const  hours = Math.floor((diff%(1000*60*60*24)/(1000*60*60)))
            const  minutess = Math.floor((diff%(1000*60*60)/(1000*60)))
            const  seconds = Math.floor((diff%(1000*60)/(1000)))
            if(diff <0){
clearInterval(interval.current);
            }else{
setDay(days);
setHour(hours);
setMinutes(minutess);
setSecond(seconds);
            }

        },1000);
        
        
    } 
      
    //mounting property
    
    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current);
        }
    })
    return (
        <div className='main_countdown'>
            <div className='countdown'> 
                <div>
                    <h1 className='countdown_date'>14th December</h1>
                    <h1 className='countdown_sale'>Quantally Pre-sale</h1>
                </div>
                <div className='countdown_seperate'>
                    <h1 className='countdown_day'>{day} </h1>
                    <h1 className='countdown_days'> Days</h1>
                </div>
                <div>
                    <h1 className='countdown_day'>{hour} </h1>
                    <h1 className='countdown_days'> Hours</h1>
                </div>
                <div>
                    <h1 className='countdown_day'>{minutes}</h1>
                    <h1 className='countdown_days'> Minutes</h1>
                </div>
                <div>
                    <h1 className='countdown_day'>{second} </h1>
                    <h1 className='countdown_days'>Seconds</h1>
                </div>
            </div>
        </div>
    )
}

export default Countdown
