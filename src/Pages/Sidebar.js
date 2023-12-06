import React from 'react'
import { Grid,Card,CardContent,Typography,Container,Link } from '@mui/material'

export const Sidebar = () => {
  return (
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
    <ul>
      <li><Link to="/nadi">
      nadi astrology bangalore  </Link></li>
      <li><Link to="/genuie">Genuine Astrologer</Link></li>
       <li>Accurate Nadi Jothidam</li>
       <li>Original Nadi Jothidam</li>
        <li>Online Nadi Astrology with Guruji N. Sri Krishna”</li>
    </ul>
   
  </Typography>
</Card>
<h4>Archives</h4>
<Card>
  <Typography>
    <ul>
      <li>November 2023</li>
      <li>October 2023</li>
    </ul>
  </Typography>
</Card>
<h4>Categories</h4>
<Card>
<Typography>
  <ul>
    <li>Accurate Nadi Jothidam</li>
    <li>All</li>
    <li>Genuine Astrologer</li>
    <li>Original Nadi Jothidam</li>
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
  )
}
