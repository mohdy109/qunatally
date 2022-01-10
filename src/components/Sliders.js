import React from 'react'
import Slider from "react-slick"
import Ecosystems from "../assets/images/Ecosystem mobile Screen.png"

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
             <Slider {...settings}>
                     <div className='caro_fle' style={{display:"flex"}}>
                        <div className='first_eco_card first_card'>
                            <h1 className='mining'>Mining gadget</h1>
                            <img src={Ecosystems} className='eco_mob' />
                            <h1 className='lorems_eco'> Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                        </div>
                        <div className='first_eco_card second_card'>
                        <h1 className='mining'>Mining gadget</h1>
                            <img src={Ecosystems} className='eco_mob' />
                            <h1 className='lorems_eco'> Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                        </div>
                        <div className='first_eco_card second_card'>
                            <h1 className='mining'>Mining gadget</h1>
                            <img src={Ecosystems} className='eco_mob' />
                            <h1 className='lorems_eco'> Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consectetur adipiscing elit. Lorem ipsum dolor sit amet.</h1>
                        </div>
                   </div>   
        </Slider>
        </div>
    )
}

export default Sliders
