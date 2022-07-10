import React from 'react';
import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';

const ImgCard = ({ src }) => {
  return (
    <Grid item sm={6} md={4} lg={3}>
      <Box className='main'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={src}
            alt='dog'
            className='image'
          />
        </Card>

        <Box className='overlay'>
          <Typography className='text'>Hello dog</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default ImgCard;
