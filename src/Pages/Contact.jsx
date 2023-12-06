import React from 'react'
import "./Contact.css"
import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Grid,Card,CardContent,Typography } from '@mui/material'




export const Contact = () => {
  const a={backgroundColor:"#FAEBD7"}
  return (
   
    <div style={a} maxWidth="lg xs md" >
<h1 class="text-center text-danger"  style={{marginTop:"1px"}}>NEED HELP CONTACT US</h1>
<h4 class="text-center">"Now we are doing this Nadi Astrology service trough Online for the convenience of our customers.
   Many of our customers told they did much of expense for travel and hotel rooms to 
   get Nadi Astrology by direct visit. Also some of our customers were misguided to some fake places 
   by some local brokers. So we have started our service through Online."</h4>
<h3 class="text-center text-danger">Kindly free to contact us phone or email at anytime! We are happy to help you!</h3>
<hr/>

<div class="container">
  <div class="row">
    <div class="col-sm lg xs">
      <Container>
        <Typography variant='h4' align='center' style={{marginTop:"20px"}} >
          <Grid>
            <Card sx={{midWidth:800}}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <FontAwesomeIcon icon={faLocationDot} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
       <h2>No.12 East Street vaitheeswaran koil
Tamil Nadu, 609117.</h2> 
        </Typography>
              </CardContent>

            </Card>
          </Grid>

        </Typography>
      </Container>
    </div>



    <div class="col-sm lg xs">
<Container>
  <Typography variant='h4' align='center'  style={{marginTop:"20px"}} >
    <Grid>
<Card sx={{maxWidth:800}}>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    <h2><FontAwesomeIcon icon={faPhone} />6385573966</h2> 
    <h2>+91 8978509234</h2>
  <h2><FontAwesomeIcon icon={faEnvelope} />astrology@gmail.com</h2>

    </Typography>
    
  </CardContent>
</Card>
    </Grid>
  </Typography>
</Container>
    </div>
   
  </div>
</div>

<section>
    <div class="container-fluid p-0" maxWidth="lg md xs" style={{marginTop:"20px"}}>
      <div class="row">
        {/* <!-- Google Map HTML Codes --> */}
        <iframe frameborder="0" scrolling="no" height="250" width="250" src="https://maps.google.com/maps?q=55%2C%20Cheran%20St%2C%20Anjugam%20Nagar%2C%20West%20Jafferkhanpet%2C%20Chennai%2C%20Tamil%20Nadu%20600083&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="55, Cheran St, Anjugam Nagar, West Jafferkhanpet, Chennai, Tamil Nadu 600083" aria-label="55, Cheran St, Anjugam Nagar, West Jafferkhanpet, Chennai, Tamil Nadu 600083"></iframe>
    </div>
    </div>
  </section>
  <div class="last-footer" maxWidth="lg md xs" style={{marginTop:"20px"}}>
<h2>Copyright © 2020 Astrology | All Rights Reserved. Powered By Sanishsoft</h2>
        </div>
    </div>
    
  
  )
}
