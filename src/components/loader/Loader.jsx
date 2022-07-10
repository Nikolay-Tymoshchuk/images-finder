import { Metronome } from '@uiball/loaders';
import { Box } from './Loader.styled';

function Loader() {
  return (
    <Box aria-live="polite">
      <Metronome size={80} speed={1.6} color="#3f51b5" />
    </Box>
  );
}

export default Loader;
