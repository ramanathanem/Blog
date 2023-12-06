import { Card ,Typography} from '@mui/material'
import React from 'react'

import { Button, Container } from 'react-bootstrap';
import nadi from "../images/na.png"
import "./Novambar.css"
import { Link } from 'react-router-dom';


export const Novambar = () => {
  return (
    <div style={{marginTop:"100px",backgroundColor:"#A9A9A9", marginTop:"1px"}}  maxWidth="lg md xs"  >
        <Container maxWidth="lg md xs"   style={{display:'flex'}}>
        <div class="col-8 col-md-8">
            <Card sx={{ maxWidth: 500 }}>
            <img src= {nadi}></img>
            <div className='admin'>
          <Link to="/novambar"><h2> Nadi Astrology Bangalore</h2></Link> 
           <h5>Title: “Unlocking Destiny: Online Nadi Astrology in Bangalore with Guruji N. Sri Krishna” Description: Embark […]</h5>
           
           <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
            <Button size="small">OCTOBAR 15,2023</Button>
            </div>
</Card>
</div>
<div class="col-4 col-md-4" style={{marginTop:"100px"}} maxWidth="lg xs md">
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
</Container>
<div class="last-footer" maxWidth="lg md xs" style={{marginTop:"20px"}}>
<h2>Copyright © 2020 Astrology | All Rights Reserved. Powered By Sanishsoft</h2>
        </div>
    </div>
   
  )
}
