import React,{useState} from 'react'
import {NavLink,Link} from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/material';
import tele from "../images/tele.png"


export const Navbar = () => {
    const[menuopen,setMenuOpen]=useState(false)
  return (
   
   <nav>
<div className='container'>
<div className='row'>
<div className=' col-md-6 col-lg-6 col-sm-6'>
<Link to="/" className='title'><Box><img style={{ width: 230, height: 100}} className="id" src="http://astrologynadi.com/wp-content/uploads/2023/10/logo1-2-scaled.jpg"/></Box></Link>
    <div className='menu' onClick={()=>{ setMenuOpen(!menuopen);}}>
        <span></span>
        <span></span>
        <span></span>
   
    </div>
</div>
<div className='col-lg-4 col-md-4 col-sm-4'>
<ul className={menuopen ? "open":""}>
        <li><NavLink to="/about"  style={{marginTop:"80px"}}>ABOUT-US</NavLink></li>
        <li><NavLink to="/blog" style={{marginTop:"80px"}}>BLOG</NavLink></li>
        <li><NavLink to="/contact" style={{marginTop:"80px"}} ><FontAwesomeIcon icon={faPhoneVolume} />CONTACT</NavLink></li>
    </ul>
    </div>
   
</div>

</div>

   
  
   </nav>
  )
}
export default Navbar
