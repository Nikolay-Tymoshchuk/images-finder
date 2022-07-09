import Searchbar from './searchbar';
import Loader from './loader';
import ImageGallery from './gallery';
import Button from './button';
import { getImages } from 'service/service';
import { Component } from 'react';
import { Container } from './App.styled';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
    isLoading: false,
    // error: null,
    totalPages: 1,
  };

  handleSubmit = query => {
    query === this.state.query
      ? this.setState(prevState => ({ page: prevState.page + 1 }))
      : this.setState({ query, page: 1, hits: [] });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.handleFetch(query, page);
    }
  }

  async handleFetch(query, page) {
    try {
      this.setState({ isLoading: true });
      const { hits, totalPages } = await getImages(query, page);
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        totalPages,
      }));
    } catch (error) {
      console.log('object :>> ', error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollToBottom({ duration: 1000 });
  };

  render() {
    const { query, page, totalPages, hits, isLoading } = this.state;
    return (
      <Container>
        <Searchbar request={query} onSubmit={this.handleSubmit} />
        <ImageGallery data={hits} />
        {isLoading && <Loader />}
        {page < totalPages && <Button onClick={this.handleLoadMore} />}
      </Container>
    );
  }
}
