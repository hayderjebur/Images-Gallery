import React from 'react';
import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';

import { styles } from '../styles';

const ImgCard = ({ src }) => {
  const { main, text, overlay, image } = styles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box sx={main}>
        <Card>
          <CardMedia
            component='img'
            height='300'
            image={src}
            alt='dog'
            sx={image}
          />
        </Card>
        <Box sx={overlay}>
          <Typography sx={text}>Hello dog</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default ImgCard;
