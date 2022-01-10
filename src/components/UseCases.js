import React from 'react'
import "../assets/css/usecases.css"
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import SmartHome from "../assets/images/use/Group 15037.svg"
import SmartFarm from "../assets/images/use/Group 121.svg"
import SmartFish from "../assets/images/use/Group 122.svg"
import SmartHealth from "../assets/images/use/Group 123.svg"
import SmartCity from "../assets/images/use/Group 124.svg"
import SmartKitchen from "../assets/images/use/Group 125.svg"
import SmartCars from "../assets/images/use/Group 126.svg"
import SmartShops from "../assets/images/use/Group 127.svg"
import SmartGrids from "../assets/images/use/Group 128.svg"
import SmartCharge from "../assets/images/use/Group 130.svg"
import SmartReal from "../assets/images/use/Group 129.svg"
import SmartLog from "../assets/images/use/Group 131.svg"
import SmartAir from "../assets/images/use/Group 132.svg"
import SmartSpace from "../assets/images/use/Group 14651.svg"
import SmartTravel from "../assets/images/use/Group 134.svg"
import SmartSport from "../assets/images/use/Group 138.svg"
import SmartEdu from "../assets/images/use/Group 133.svg"
import SmartMovie from "../assets/images/use/Group 137.svg"
import SmartBank from "../assets/images/use/Group 135.svg"
import SmartGove from "../assets/images/use/Group 139.svg"
import SmartPer from "../assets/images/use/Group 14653.svg"
import SmartWea from "../assets/images/use/Group 15036.svg"
import SmartMed from "../assets/images/use/Group 14654.svg"
import SmartFood from "../assets/images/use/Group 143.svg"
<<<<<<< HEAD
=======
import Smartbar from "../assets/images/alien.png"
>>>>>>> dbdd570... last commit

const UseCases = () => {
    return (
        <div className = "usecase_div">
<<<<<<< HEAD
=======
           <img src={Smartbar}  className="img1 y enterprise_main_image alien" />
>>>>>>> dbdd570... last commit
            <div className='two_box_all_div'>
                <div>
                    <img src={first} alt = "first_box" className='first_box' /> 
                </div>
                <div>
                    <img src={second} alt = "first_box" className='second_box' /> 
                </div>
                <div>
                    <h1 className='topic_head'>Use Cases <span className='colors'> </span></h1>
                </div>
            </div>
<<<<<<< HEAD
=======
           
>>>>>>> dbdd570... last commit
            <div className = "use_imgs_div">
              <div>
                <a href='/home'><img src = {SmartHome} className = "home_img" /></a>
              </div>
              <div>
                <a href='/farming'><img src = {SmartFarm} className = "home_img" /></a>
              </div>
              <div>
                <a href='/fishing'><img src = {SmartFish} className = "home_img" /></a>
              </div>
              <div>
                <a href='/healthcare'><img src = {SmartHealth} className = "home_img" /></a>
              </div>
            </div>
            <p>
              <div className='axs'> 
                <button class="btn btn-primary cases_btn" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">View All Cases</button>
              </div>
            </p>
            <div class="row bottom_use_case_flex ">
  <div class="col">
    <div class="collapse multi-collapse " id="multiCollapseExample1">
      <div class="card card-body rums">
            <div className = "frows">
            <a href = "/smart-city"><img src = {SmartCity} className = "home_img" /></a>
            <a href='/smart-cars'><img src = {SmartKitchen} className = "home_img" /></a>
            <a href='/smart-kitchen'><img src = {SmartCars} className = "home_img" /></a>
            <a href='/smart-shops'><img src = {SmartShops} className = "home_img" /></a>
            <a href='/smart-grids'><img src = {SmartGrids} className = "home_img" /></a>
            <a href='/smart-charge'><img src = {SmartCharge} className = "home_img" /></a>
            <a href='/smart-real'><img src = {SmartReal} className = "home_img" /></a>
            <a href='/smart-log'><img src = {SmartLog} className = "home_img" /></a>
            <a href='/smart-air'><img src = {SmartAir} className = "home_img" /></a>
            <a href='/smart-space'><img src = {SmartSpace} className = "home_img" /></a>
            <a href='/smart-travel'><img src = {SmartTravel} className = "home_img" /></a>
            <a href='/smart-sport'><img src = {SmartSport} className = "home_img" /></a>
            <a href='/smart-edu'><img src = {SmartEdu} className = "home_img" /></a>
            <a href='/smart-movie'><img src = {SmartMovie} className = "home_img" /></a>
            <a href='/smart-bank'><img src = {SmartBank} className = "home_img" /></a>
            <a href='/smart-gove'><img src = {SmartGove} className = "home_img" /></a>
            <a href='/smart-per'><img src = {SmartPer} className = "home_img" /></a>
            <a href='/smart-wea'><img src = {SmartWea} className = "home_img" /></a>
            <a href='/smart-media'><img src = {SmartMed} className = "home_img" /></a>
            <a href='/smart-food'><img src = {SmartFood} className = "home_img" /></a>
            </div>
      </div>
    </div>
  </div>
  </div>
  
        </div>
    )
}

export default UseCases
