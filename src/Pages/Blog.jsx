import { CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import na from "../images/na.png"
import acc1 from "../images/acc1.jpg"
import nadi1 from "../images/nadi1.gif"

import Online from "../images/online.png"

export const Blog = () => {
  return (
    <div style={{backgroundColor:"#FAEBD7"}}>

   <div className='container' >
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8'>
        <Card style={{width:"400px", marginTop:"40px"}} >
<img src={na}></img>
<Typography>Genuine Astrologer</Typography>
<Typography>
NOVAMBAR 15, 2023</Typography>
<Typography>Genuine Astrologer Nadi Astrology, a sacred and ancient predictive science with roots in India...
Read More</Typography>
<Link to="/nadi"><Button>Readmore</Button></Link>
</Card>

<Card style={{width:"400px", marginTop:"40px"}} >
<img src={nadi1}></img>
<Typography>Accurate Nadi Jothidam</Typography>
<Typography>
October 16, 2023</Typography>
<Typography>Accurate Nadi Jothidam Nadi Jothidam, an ancient Indian predictive science, is revered for its...</Typography>
<Link to="/original"><Button>Readmore</Button></Link>
</Card>

<Card style={{width:"400px", marginTop:"40px"}} >
<img src={acc1}></img>
<Typography>Original Nadi Jothidam</Typography>
<Typography>
October 16, 2023</Typography>
<Typography>Original Nadi Jothidam Nadi Jothidam, often referred to as Nadi Shastra, is an ancient and...
Read More</Typography>
<Link to="/acure"><Button>Readmore</Button></Link>
</Card>

<Card style={{width:"400px", marginTop:"40px"}} >
<img src={Online}></img>
<Typography>Online Nadi Astrology With Guruji N. Sri Krishna”</Typography>
<Typography>
October 16, 2023</Typography>
<Typography>Introduction Online Nadi astrology, an ancient divination system, has found its way into the digital...
Read More</Typography>
<Link to="/all"><Button>Readmore</Button></Link>
</Card>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4'>
      <h1 className='boxs'>Search</h1>
<div >
<input type="search" id="form1" class=" box" />
<button type="button" class="btn btn-primary " >Search</button>
</div>
    <h4 className='boxs'>Recent post</h4>
    <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
      <Typography>
        <ul className='nadi'>
          <li><Link to="/nadi">
          nadi astrology bangalore</Link>  </li>
          <li><Link to="/genuine">Genuine Astrologer </Link></li>
           <li><Link to="/acure ">Accurate Nadi Jothidam</Link></li>
           <li><Link to="/originalnadi">Original Nadi Jothidam</Link></li>
        </ul>
       
      </Typography>
    </Card>
    <h4 className='boxs'>Archives</h4>
    <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
      <Typography>
        <ul className='novambar'>
          <li><Link to="/novambar">November 2023</Link></li>
          <li><Link to="/octobar">October 2023</Link></li>
        </ul>
      </Typography>
    </Card>
    <h4 className='boxs'>Categories</h4>
   <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
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

   </div>
   
   <div class="last-footer" maxWidth="lg md xs" style={{marginTop:"40px"}} >
   <h2>Copyright © 2020 Astrology | All Rights Reserved. Powered By Sanishsoft</h2>
           </div>
   </div>
   
  )
}
