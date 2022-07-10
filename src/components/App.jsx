import Scroll from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './searchbar';
import Loader from './loader';
import ImageGallery from './gallery';
import Button from './button';
import ToTop from './buttonUp';
import { getImages } from 'service/service';
import { Component } from 'react';
import { Container } from './App.styled';

const scroll = Scroll.animateScroll;

export class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
    isLoading: false,
    totalPages: 1,
  };

  handleSubmit = query => {
    query === this.state.query
      ? this.setState(prevState => ({ page: prevState.page + 1 }))
      : this.setState({ query, page: 1, hits: [] });
    scroll.scrollToBottom({ duration: 1000 });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.handleFetch(query, page);
    }
  }

  async handleFetch(query, page) {
    try {
      this.setState({ isLoading: true, error: null });
      const { hits, totalPages } = await getImages(query, page);
      if (totalPages === 0) {
        toast.error('No results found');
      }
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        totalPages,
      }));
    } catch ({ message }) {
      toast.error(message);
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
    const { page, totalPages, hits, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery data={hits} />
        {isLoading && <Loader />}
        {page < totalPages && <Button onClick={this.handleLoadMore} />}
        {page > 2 && <ToTop />}
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          theme={'dark'}
        />
      </Container>
    );
  }
}
