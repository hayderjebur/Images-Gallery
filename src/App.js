import { useState, useEffect } from 'react';
import { CssBaseline, Grid, Typography, Container } from '@mui/material';
import imgPlaceHolder from './images/image-placeholder.gif';
import ImgCard from './components/ImgCard';
import { fetchData } from './apiCalls';

import './App.css';

function App() {
  //Number of images will render in home page
  const numberOfImgs = 12;

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function loadImages() {
      setIsLoading(true);
      const { data, error } = await fetchData(numberOfImgs);
      setIsLoading(false);
      setImages(data);
      setIsError(error[0]);
    }
    loadImages();
  }, []);

  return (
    <Container>
      <CssBaseline />
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        margin={4}
      >
        <Typography
          sx={{ fontWeight: 'bold' }}
          variant='h3'
          gutterBottom
          component='div'
        >
          Portfolio Grid 4
        </Typography>
        <Typography
          sx={{ opacity: '.7' }}
          variant='h6'
          gutterBottom
          component='div'
        >
          This grid shows the items pages in a popup
        </Typography>

        {isLoading && (
          <Typography variant='h4' gutterBottom component='div'>
            Loading....
          </Typography>
        )}
        {isError && (
          <Typography variant='h4' gutterBottom component='div'>
            Server Error. Please try to reload the page!.
          </Typography>
        )}
      </Grid>
      <Grid container spacing={0.5} marginBottom={3}>
        {/* Showing image placeholder when it's loading */}
        {isLoading
          ? Array(numberOfImgs)
              .fill()
              .map((_, index) => <ImgCard src={imgPlaceHolder} key={index} />)
          : images.map((image) => (
              <ImgCard src={image.message} key={image.message} />
            ))}
      </Grid>
    </Container>
  );
}

export default App;
