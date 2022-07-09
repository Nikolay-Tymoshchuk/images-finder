import { Component } from 'react';

import Searchbar from './searchbar';
import Loader from './loader';
import ImageGallery from './gallery';
import { getImages } from 'service/service';
import Button from './button';
// import Modal from './modal';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    queryData: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    lastPage: 1,
  };

  handleSubmit = async query => {
    this.setState({ status: 'loading' });
    const { lastPage, hits } = await this.handleData(query);
    console.log('lastPage :>> ', lastPage);
    console.log('hits :>> ', hits);
    this.setState({
      queryData: hits,
      lastPage,
      currentPage: this.state.currentPage + 1,
      status: 'success',
    });
  };

  handleLoading() {
    this.setState(prevState => prevState.currentPage + 1);
  }

  handleData = async query => {
    const { currentPage } = this.state;
    const data = await getImages(query, currentPage);
    return data;
  };

  render() {
    const { queryData, status, error, currentPage, lastPage } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === 'loading' && <Loader />}
        {status === 'success' && (
          <>
            <ImageGallery data={queryData} />
            {currentPage < lastPage && queryData.length > 0 && (
              <Button onClick={this.handleLoading} />
            )}
          </>
        )}

        {status === 'error' && <p>{error}</p>}
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
