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
    isDataReady: false,
    totalPages: 1,
    showModal: false
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.handleFetch(query, page);
    }
  }

  handleSubmit = request => {
    const {query, isDataReady} = this.state
    request === query
      ? this.setState(prevState => ({ page: prevState.page + 1 }))
      : this.setState({ query: request, page: 1, hits: [] });
    scroll.scrollToBottom({ duration: 1000 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollToBottom({ duration: 1000 });
  };

  handleModal = (data) => {
    
  }

  async handleFetch(query, page) {
    try {
      this.setState({ isLoading: true });
      const { hits, totalPages } = await getImages(query, page);
      if (totalPages === 0) {
        this.setState({isDataReady: false})
        toast.error('No results found');
        return
      }
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        totalPages,
        isDataReady: true,
      }));
    } catch ({ message }) {
      toast.error(message);
    } finally {
      this.setState({ isLoading: false });
    }
  }


  render() {
    const { page, totalPages, hits, isLoading, isDataReady, showModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {isDataReady && <ImageGallery data={hits} onModalShow={showModal}/>}
        {isLoading && <Loader />}
        {(page < totalPages && isDataReady) && <Button onClick={this.handleLoadMore} />}
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
