import PropTypes from 'prop-types';
import PatriotHover from '../patriot-hover';

import { Component } from 'react';
import { Header, Form, Button, Svg, Input, Grid } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
    clientX: 200,
    clientY: 56,
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleMouseMove = e => {
    this.setState({
      clientX: e.clientX,
      clientY: e.clientY,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query.trim());
    this.setState({ query: '' });
  };

  render() {
    const { query, clientX, clientY } = this.state;
    return (
      <Header onMouseMove={this.handleMouseMove}>
        <PatriotHover x={clientX} y={clientY}></PatriotHover>
        <Grid></Grid>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">{Svg()}</Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
            required
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
