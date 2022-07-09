import axios from 'axios';

// const data = {
//   KEY: '27097192-0671b14f562b4984cf83e0bbe',
//   URL: 'https://pixabay.com/api/',
//   perPage: 'per_page=12',
//   imageType: 'image_type=photo',
//   orientation: '&orientation=horizontal',
// };
const defaultUrl =
  'https://pixabay.com/api/?key=27097192-0671b14f562b4984cf83e0bbe&q=yellow+flowers&image_type=photo';

export const getImages = async (query = '', page = 1) => {
  const options = {
    KEY: '27097192-0671b14f562b4984cf83e0bbe',
    IMAGE_TYPE: 'photo',
    ORIENTATION: 'horizontal',
    SAFESEARCH: 'true',
    BASE_URL: 'https://pixabay.com/api/',
    PER_PAGE: 12,
    query,
    page,
  };

  const getOptions = () => {
    const searchParams = new URLSearchParams({
      key: options.KEY,
      q: options.query,
      image_type: options.IMAGE_TYPE,
      orientation: options.ORIENTATION,
      safesearch: options.SAFESEARCH,
      page: options.page,
      per_page: options.PER_PAGE,
    });

    const url = `${options.BASE_URL}?${searchParams}`;

    return url;
  };

  const request = getOptions();
  const response = await axios.get(request);
  const totalHits = response.data.totalHits;
  const hits = response.data.hits;
  const totalPages = Math.ceil(totalHits / options.PER_PAGE);
  const outputData = {
    hits,
    totalPages,
  };
  console.log('totalPages :>> ', totalPages);
  return outputData;
};
