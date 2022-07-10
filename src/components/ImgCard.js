import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { styles } from '../styles';

const ImgCard = ({ src }) => {
  const sx = styles(useTheme());

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box sx={sx.main}>
        <Card>
          <CardMedia component='img' height='300' image={src} alt='dog' />
        </Card>

        <Box sx={sx.overlay}>
          <Typography sx={sx.text}>Hello dog</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default ImgCard;
