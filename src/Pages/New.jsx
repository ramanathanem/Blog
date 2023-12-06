import "./New.css"
import na from "../images/na.png"
import React from 'react'
import { Avatar, Stack, Typography,Box, ImageList } from "@mui/material"
import Card from "../components/Card"
import { Link } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material'
export const New = () => {
  return (
   
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5">
    <img src={na}></img>
    </div>     

    <div className="col-lg-7   col-md-7  col-sm-7">
    <Card>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div"><Link to="/nadi" className='line'>
        Nadi Astrology Bangalore</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Title: “Unlocking Destiny: Online Nadi Astrology in Bangalore with Guruji N. Sri Krishna” Description: Embark […]
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/octobar">  <Button variant="contained">Admin</Button></Link>
      <Link to="/nadi" className='nov'> <Button size="contained"> NOVAMBAR 15, 2023</Button></Link>
      </CardActions>
    </Card>
    </div>
       </div>
    
  </div>
  )
}
