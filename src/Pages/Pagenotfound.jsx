import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Landingpage from './Landingpage'




function Pagenotfound() {
  return (
    <div>
     <h1 style={{fontSize:'10em',textAlign:'center',paddingTop:'100px'}}>404</h1>
     <p style={{fontSize:'2.5em',textAlign:'center',paddingTop:'10px'}}>Ooops!Page not found</p>
     <p style={{fontSize:'1.3em',textAlign:'center',paddingTop:'10px'}}>Sorry,but the page you are looking for is not found.Please make sure you typed the correct URL</p>
     <Link to={'/'} className='btn text-primary' style={{marginLeft:'700px'}}>BACK TO HOME</Link>
    </div>
  )
}

export default Pagenotfound

