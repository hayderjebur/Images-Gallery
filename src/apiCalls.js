const URL = 'https://dog.ceo/api/breeds/image/random';

export const fetchData = async (numberOfImgs = 5) => {
  let imagesArray = [];
  let error = [];
  //Building array of images because the API return only one image each call
  for (let i = 0; i < numberOfImgs; i++) {
    await fetch(URL)
      .then((data) => data.json())
      .then((image) => {
        if (image.status === 'success') {
          imagesArray.push(image);
        } else if (image.status === 'error') {
          error.push(image.message);
        }
      });
  }
  return { data: imagesArray, error };
};
