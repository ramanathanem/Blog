import React from 'react'
import "./Home.css"
import { Grid,Card,CardContent,Typography } from '@mui/material'
import { Button } from 'react-bootstrap'
import { CardActions } from '@material-ui/core'
import na from "../images/na.png"
import { Link } from 'react-router-dom';

import acc1 from "../images/acc1.jpg"
import nadi1 from "../images/nadi1.gif"

import Online from "../images/online.png"

export const Homes = () => {
  return (
    <div  style={{backgroundColor:"#FAEBD7"}} >
      <div className='row' >
        <div className='col-lg-8 col-md-8 col-sm-8'>
        <Grid style={{marginTop:"50px"}}>
  <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5     col-md-5    col-sm-5'>
          <img src={na}></img>
        </div>
        <div className='col-lg-7 col-md-7  col-sm-7'>
       < CardContent>
       <Typography>GENUINE ASTROLOGER</Typography>
        <Typography  variant="h4" component="div"><Link to="/nadi" className='line'>
        Nadi Astrology Bangalore</Link>
        </Typography>
        <Typography variant='h6'>
        Title: “Unlocking Destiny: Online Nadi Astrology in Bangalore with Guruji N. Sri Krishna” Description: Embark […]
        </Typography>
      </CardContent>
      <hr/>
      <CardActions>
      <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
      <Link to="/nadi" className='nov'> <Button size="contained"> NOVAMBAR 15, 2023</Button></Link>
      </CardActions>
        </div>
      </div>
    </div>
  </Card>
</Grid>


<Grid style={{marginTop:"50px"}}>
  <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5     col-md-5    col-sm-5'>
          <img src={nadi1}></img>
        </div>
        <div className='col-lg-7 col-md-7  col-sm-7'>
       < CardContent>
       <Typography>ORIGINAL NADI JOTHIDAM</Typography>
        <Typography  variant="h4" component="div"><Link to="/nadi" className='line'>
        Original Nadi Jothidam</Link>
        </Typography>
        <Typography variant='h6'>
        Original Nadi Jothidam Nadi Jothidam, often referred to as Nadi Shastra, is an ancient and […]
        </Typography>
      </CardContent>
      <hr/>
      <CardActions>
      <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
      <Link to="/original" className='nov'> <Button size="contained"> October 16, 2023</Button></Link>
      </CardActions>
        </div>
      </div>
    </div>
  </Card>
</Grid>


<Grid style={{marginTop:"50px"}}>
  <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5     col-md-5    col-sm-5'>
          <img src={acc1}></img>
        </div>
        <div className='col-lg-7 col-md-7  col-sm-7'>
       < CardContent>
       <Typography>ACCURATE NADI JOTHIDAM</Typography>
        <Typography  variant="h4" component="div"><Link to="/nadi" className='line'>
        Accurate Nadi Jothidam</Link>
        </Typography>
        <Typography variant='h6'>
        Accurate Nadi Jothidam Nadi Jothidam, an ancient Indian predictive science, is revered for its remarkable […]
        </Typography>
      </CardContent>
      <hr/>
      <CardActions>
      <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
      <Link to="/acure" className='nov'> <Button size="contained"> October 16, 2023</Button></Link>
      </CardActions>
        </div>
      </div>
    </div>
  </Card>
</Grid>


<Grid style={{marginTop:"50px"}}>
  <Card className='box' style={{backgroundColor:"#FAEBD7"}}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5     col-md-5    col-sm-5'>
          <img src={Online}></img>
        </div>
        <div className='col-lg-7 col-md-7  col-sm-7'>
       < CardContent>
       <Typography>All</Typography>
        <Typography  variant="h4" component="div"><Link to="/nadi" className='line'>
        Online Nadi Astrology With Guruji N. Sri Krishna”</Link>
        </Typography>
        <Typography variant='h6'>
        Introduction Online Nadi astrology, an ancient divination system, has found its way into the digital […]
        </Typography>
      </CardContent>
      <hr/>
      <CardActions>
      <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
      <Link to="/acure" className='nov'> <Button size="contained">  October 16, 2023</Button></Link>
      </CardActions>
        </div>
      </div>
    </div>
  </Card>
</Grid>

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
 
        <div class="last-footer" maxWidth="lg md xs" style={{marginTop:"40px"}} >
<h2>Copyright © 2020 Astrology | All Rights Reserved. Powered By Sanishsoft</h2>
        </div>
 
    </div>
  )
}
