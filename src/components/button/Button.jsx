import { Loadmore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <Loadmore type="button" aria-label="load more" onClick={onClick}>
      Load more
    </Loadmore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
