import PropTypes from 'prop-types';
import PatriotHover from '../patriot-hover';

import { toast } from 'react-toastify';
import { useState } from 'react';
import { Header, Form, Button, Svg, Input, Grid } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [clientX, setClientX] = useState(200);
  const [clientY, setClientY] = useState(56);

  const handleMouseMove = e => {
    setClientX(e.clientX);
    setClientY(e.clientY);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const request = query.trim();
    if (request.length === 0) {
      toast.error('Request could not be empty');
      setQuery('');
      return;
    }
    onSubmit(request);
    setQuery('');
  };

  return (
    <Header onMouseMove={handleMouseMove}>
      <PatriotHover x={clientX} y={clientY}></PatriotHover>
      <Grid></Grid>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">{Svg()}</Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.target.value)}
          value={query}
          required
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
