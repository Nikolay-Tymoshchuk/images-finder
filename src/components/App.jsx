import Searchbar from './searchbar';
import Loader from './loader';
import ImageGallery from './gallery';
import Button from './button';
import { getImages } from 'service/service';
import { Component } from 'react';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
    status: 'idle',
    // error: null,
    lastPage: 1,
    showModal: false,
  };

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.handleFetch();
    }
  }

  async handleFetch() {
    try {
      this.setState({ status: 'loading' });
      const { query, page } = this.state;
      const { hits, lastPage } = await getImages(query, page);
      this.setState({ hits, lastPage, status: 'success' });
    } catch (error) {
      console.log('object :>> ', error.message);
    }
  }

  handleLoadMore = () =>
    this.setState(prevState => ({
      page: prevState.page + 1,
      hits: prevState['hits'].concat(this.state.hits),
    }));

  render() {
    const { page, lastPage, hits, status } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === 'loading' && <Loader />}
        {status === 'success' && (
          <>
            <ImageGallery data={hits} />
            {page < lastPage && <Button onClick={this.handleLoadMore} />}
          </>
        )}
      </Container>
    );
  }
}

{
  /* <Searchbar onSubmit={this.handleSubmit} />; */
}

{
  /* <Button /> */
}
{
  /* <Modal /> */
}
