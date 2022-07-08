import { Component } from 'react';

import Searchbar from './searchbar';
// import Loader from './loader';
import ImageGallery from './gallery';
import { getImages } from 'service/service';
// import Button from './button';
// import Modal from './modal';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  handleData = async query => {
    const list = await getImages(query);
    return list;
  };

  render() {
    const { query, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {/* <Button /> */}
        {/* <Modal /> */}
      </Container>
    );
  }
}
