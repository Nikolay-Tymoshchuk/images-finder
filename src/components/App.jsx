import Searchbar from './searchbar';
import Loader from './loader';
import ImageGallery from './gallery';
import Button from './button';
import Modal from './modal';

export const App = () => {
  return (
    <div className="container">
      <Searchbar />
      <Loader />
      <ImageGallery />
      <Button />
      <Modal />
    </div>
  );
};
