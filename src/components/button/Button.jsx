import { Loadmore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <Loadmore type="button" aria-label="load more" onClick={onClick}>
      Load more
    </Loadmore>
  );
};

export default Button;
