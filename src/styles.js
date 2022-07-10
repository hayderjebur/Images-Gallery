export const styles = (theme) => {
  return {
    main: {
      position: 'relative',
      cursor: 'pointer',
      //layover class
      '&:hover .css-1o8sc7t': {
        opacity: 1,
      },
      //text class
      '&:hover .css-1d4pmoe-MuiTypography-root': {
        transition: 'all 0.3s ease',
        transform: 'scale(1.8)',
      },
      //image class
      '&:hover  .css-azgjdk-MuiCardMedia-root': {
        transition: 'all 1s ease',
        transform: 'scale(3)',
      },
    },

    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      opacity: 0,
      transition: '0.5s ease',
      backgroundColor: '#fff',
    },
    text: {
      color: '#000',
      fontSize: '20px',
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      left: '35%',
      transition: 'visibility 0.14s ease-in, opacity 0.14s ease-in',
      transform: '0.24s ease',
    },
    image: {
      transform: 'scale(1)',
    },
  };
};
