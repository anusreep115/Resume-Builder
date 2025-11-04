import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div style={{height:'400px'}} className='d-flex align-items-center justify-content-center bg-primary'>
       <div className='d-flex align-items-center justify-content-center flex-column'>
         <h1 className='mb-2'>Contact us</h1>
         <h5><span><IoMdMail /></span>resumebuilder@gmail.com</h5>
         <h5><span><FaPhoneAlt /></span>+91 9526396523</h5>
         <h4 className='mt-2'>Connect With US</h4>
             <div  className='d-flex align-items-center justify-content-center mt-3'>
                <FaWhatsappSquare className='me-2 fs-2 ' />
                <FaFacebook  className='me-2 fs-2' />
                <FaInstagramSquare className='me-2 fs-2' />
             </div>
             <p  className='fs-5 mt-3'>With Love from ZyranovAi</p>
       </div>
     </div>
      
    </div>
  )
}

export default Footer
