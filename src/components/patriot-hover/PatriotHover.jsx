import PropTypes from 'prop-types';
import { ColoredBlock } from './PatriotHover.styled';

const PatriotHover = ({ x, y }) => {
  return (
    <ColoredBlock style={{ left: `${x}px`, top: `${y}px` }}></ColoredBlock>
  );
};

PatriotHover.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default PatriotHover;
