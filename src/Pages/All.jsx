import React from 'react'
import nadi from "../images/na.png"
import { Card } from 'react-bootstrap'
import acure from "../images/acc1.jpg"

import online from "../images/online.png"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import "./Home.css";
export const All = () => {
  return (
    <div style={{backgroundColor:"#FAEBD7"}}>
    <div class="container" maxWidth="lg xs md" >
        <div class="row">
            <div class="col-sm" >
            <Card style={{marginTop:"40px"}}>
          
            <Link to="/genuine" className='geni'>   Genuine Astrologer</Link>
            <Typography variant="body2" color="text.secondary">
        Genuine Astrologer Nadi Astrology, a sacred and ancient predictive science with roots in India, offers […]
        </Typography>
        <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
            <Link to="/acure">     <Button size="small">OCTOBAR 15,2023</Button></Link>
      
           </Card>
      
    </div>
    <div class="col-sm">
     <Card style={{marginTop:"40px"}}>
     <img src= {online}></img>
     <Typography gutterBottom variant="h5" component="div"><Link to="/acure " className='geni'>
        Accurate Nadi Jothidam</Link>
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Accurate Nadi Jothidam Nadi Jothidam, an ancient Indian predictive science, is revered for its remarkable […]
        </Typography>
        <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
        <Link to="/all">   <Button size="small">OCTOBAR 15,2023</Button></Link>
     </Card>
    
    
    </div>
    <div class="col-sm">
    <div  style={{marginTop:"100px"}} maxWidth="lg xs md">
        <label class="form-label" for="form1">Search</label>
          <div class='container'>
            <div class="row">
              <div class="col-sm">

           
          <h5> <div class="input-group">
         
  <div class="form-outline" data-mdb-input-init>
  
    <input type="search" id="form1" class="form-control" />
    <div >
<button type="button" class="btn btn-primary" >Search</button>
</div>
    <h4>Recent post</h4>
    <Card>
      <Typography>
        <ul className='nadi'>
          <li><Link to="/nadi">
          nadi astrology bangalore</Link>  </li>
          <li><Link to="/genuine">Genuine Astrologer </Link></li>
           <li><Link to="/acure ">Accurate Nadi Jothidam</Link></li>
           <li><Link to="/original">Original Nadi Jothidam</Link></li>
            
        </ul>
       
      </Typography>
    </Card>
    <h4>Archives</h4>
    <Card>
      <Typography>
        <ul className='novambar'>
          <li><Link to="/novambar">November 2023</Link></li>
          <li><Link to="/octobar">October 2023</Link></li>
        </ul>
      </Typography>
    </Card>
    <h4>Categories</h4>
   <Card>
    <Typography>
      <ul className='all'>
        <li><Link to="/accurate">Accurate Nadi Jothidam</Link></li>
        <li><Link to="/all">All</Link></li>
        <li><Link to="/genuineastro">Genuine Astrologer</Link></li>
        <li><Link to="/originalnadi">Original Nadi Jothidam</Link></li>
      </ul>
    </Typography>
   </Card>
  </div>
  

</div>

</h5>
</div>

        </div>
       
        </div>
        
        </div>
       
    </div>
  </div>
</div>
 
<div class="last-footer" maxWidth="lg md xs" style={{marginTop:"20px"}}>
<h2>Copyright © 2020 Astrology | All Rights Reserved. Powered By Sanishsoft</h2>
        </div>
</div>
  )
}
