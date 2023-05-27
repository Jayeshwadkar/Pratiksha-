import React from 'react'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const New = () => {
  return (
    <>
    <Box height={50}>
        <Box sx={{ display: 'flex' }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={1}>
            <Grid item xs={20}>
                <Stack spacing={2} direction="row">
                <Card sx={{ height: '100%', width: '40%', border: '1px solid #00b0ff'  }}>
  <div style={{ height: '50%', backgroundColor: '#0000FF' }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
        258
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
        Customer
      </Typography>
    </CardContent>
  </div>
  <div style={{ height: '50%', backgroundColor: '#FFFFFF' }}>
    <CardContent>
      <CardActions>
        <Button size="small"sx={{color:'#000000'}} >
          View Details
          <ArrowForwardIosIcon fontSize="small" style={{ marginLeft: '5px'}} />
        </Button>
      </CardActions>
    </CardContent>
  </div>
</Card>

<Card sx={{ height: '100%', width: '40%', border: '1px solid #FFD700' }}>
  <div style={{ height: '50%', backgroundColor: '#0000FF' }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
        Rs.21,207,025.00
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
        <h5>TWO CRORE TWELVE LAKH SEVEN THOUSAND TWENTY FIVE RUPEES</h5>
        Outstanding.
      </Typography>
    </CardContent>
  </div>
  <div style={{ height: '50%', backgroundColor: '#FFFFFF' }}>
    <CardContent sx={{ height: 6 }}>
      <CardActions>
        <Button size="small"  sx={{color:'#000000'}}>
          View Details
          <ArrowForwardIosIcon fontSize="small" style={{ marginLeft: '5px'}} />
        </Button>
      </CardActions>
    </CardContent>
  </div>
</Card>



                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={3} direction="row">
              <Card sx={{ height: '50%', width: '50%',backgroundColor:'#00b0ff' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        Insurance Date
                      </Typography>
                    </CardContent>
                  </Card>
                    
                  <Card sx={{ height: '50%', width: '50%' ,backgroundColor:'#00b0ff'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        Tax Date
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ height: '50%', width: '50%' ,backgroundColor:'#00b0ff'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        Fitness Date
                      </Typography>
                    </CardContent>
                  </Card>
                   

                  <Card sx={{ height: '50%', width: '50%' ,backgroundColor:'#00b0ff'}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        N/P Date
                      </Typography>
                    </CardContent>
                  </Card>
                  </Stack>
              </Grid>


              <Grid item xs={9}>
                <Stack spacing={3} direction="row">
              <Card sx={{ height: '50%', width: '50%',backgroundColor:'#00b0ff' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        5 Years Date
                      </Typography>
                    </CardContent>
                  </Card>
                    
                  <Card sx={{ height: '50%', width: '50%',backgroundColor:'#00b0ff' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        RC Date
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ height: '50%', width: '50%',backgroundColor:'#00b0ff'  }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:'#fafafa'}}>
                        0
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{color:'#fafafa'}}>
                        PUC Date
                      </Typography>
                    </CardContent>
                  </Card>
                   
                  </Stack>
              </Grid>
              </Grid>
            </Box>
            </Box>
            </Box>
    </>
  )
}

export default New