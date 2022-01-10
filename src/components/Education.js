import React from 'react'
import Smartbar from "../assets/images/education_up.svg"
import Smarticon from "../assets/images/education_down.svg"
import back_arrow from "../assets/images/back_arrow.png"
import "../assets/css/details.css"
const Education = () => {
    return (
        <div className='res_div_usecases'> 
        <div className="ledger L"> 
        <div className = "back_use_arrow">
          <a href = "/use-cases"><img src = {back_arrow} className='back_arrow' /></a>
        </div>
        <div>
           <h1 className='head_use'>Education</h1>
        </div>
       </div>
       <div className='res_divs'>
         <img src={Smartbar}  className="img1 y" />
         </div>
         <div className="flex">
           <div className="contents p f">
          <h1 className='content_text'>There are several advantages to utilizing DAG technology in academic institutions presently. Accreditation of educational institutions can potentially be supported by DAG ledger technology. It is difficult for most countries to verify and approve most educational institutions. The use of DAG technology will make it easier to verify credentials and the quality of education offered by educational institutions.Quantally’s DAG ledger architecture is transforming the storage of certifications and students’ credentials in educational institutions. Several cases have been reported where job seekers have used fake academic credentials. When looking for a job, most people lie about their academic qualifications. In certain situations, the company or the interviewer has no grades to verify the applicants' skills. As a result, they are more inclined to hire untrained or unqualified workers for a job. Education is one of the industries most affected by fraud and cybercrime.</h1>
           </div>
          <div>
           <img  src={Smarticon}  className="smart"/>
         </div>
         </div>
   </div>
    )
}

export default Education
