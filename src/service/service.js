import axios from 'axios';

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

  try {
    const response = await axios.get(request, {
      validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
    });
    const totalHits = response.data.totalHits;
    const hits = response.data.hits;
    const totalPages = Math.ceil(totalHits / options.PER_PAGE);
    const outputData = {
      hits,
      totalPages,
    };
    return outputData;
  } catch (error) {
    throw new Error('Oops, something went wrong. Try again later.');
  }
};
