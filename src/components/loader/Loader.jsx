import { Metronome } from '@uiball/loaders';
import { Trinity } from './Loader.styled';

function Loader() {
  return (
    <Trinity aria-live="polite">
      <Metronome size={80} speed={1.6} color="#3f51b5" />
    </Trinity>
  );
}

export default Loader;
