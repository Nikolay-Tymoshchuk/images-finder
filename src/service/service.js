import axios from 'axios';

const data = {
  KEY: '27097192-0671b14f562b4984cf83e0bbe',
  URL: 'https://pixabay.com/api/',
  perPage: 'per_page=12',
  imageType: 'image_type=photo',
  orientation: '&orientation=horizontal',
};
const defaultUrl =
  'https://pixabay.com/api/?key=27097192-0671b14f562b4984cf83e0bbe&q=yellow+flowers&image_type=photo';

export const getImages = async query => {
  const url = `${data.URL}?key=${data.KEY}&q=${query}&${data.imageType}&${data.orientation}&${data.perPage}`;
  console.log('url :>> ', url);
  const response = await axios.get(url);
  return response.data.hits;
};
