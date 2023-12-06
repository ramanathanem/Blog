import React from 'react'
import Card from '../components/Card'
import { Grid } from '@mui/material'

export default function Astro  () {
  const data=['1','2','3','4']
  return (
    <div>
   {data.map((item)=>{return  <Card style={{
        margin:"40px auto",
        height:"40px",
        padding:"20px",
        border:"3px solid violet",
        boxShadow:"2x 3px violet"
      }}>
<Grid container>
  <Grid xs={6} item>
    Hello
  </Grid>
  <Grid xs={6} item>
Welcome
  </Grid>
  <Grid xs={6} item>
to{''}
  </Grid>
  <Grid xs={6} item>
{`Card view ${item}`}
  </Grid>
</Grid>
      </Card>})} 
    </div>
  )
}
