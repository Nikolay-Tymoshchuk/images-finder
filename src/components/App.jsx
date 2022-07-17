import Scroll from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './searchbar';
import Loader from './loader';
import ImageGallery from './gallery';
import Button from './button';
import ToTop from './buttonUp';
import Modal from './modal';
import { ToastContainer, toast } from 'react-toastify';
import { getImages } from 'service/service';
import { useState, useEffect, useRef } from 'react';
import { Container } from './App.styled';

const scroll = Scroll.animateScroll;

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataReady, setIsDataReady] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [dataForModal, setDataForModal] = useState(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current || query === '') {
      console.log('I can load more by enter key :-) Very useful :-D');
      isFirstLoad.current = false;
      return;
    }
    setIsLoading(true);
    handleFetch(query, page);
  }, [page, query]);

  function handleSubmit(request) {
    if (request === query) {
      setPage(prevState => prevState + 1);
      return;
    }
    setQuery(request);
    setPage(1);
    setHits([]);
  }

  function handleLoadMore() {
    setPage(prevState => prevState + 1);
    scroll.scrollToBottom({ duration: 1000 });
  }

  function handleModalOpen(e) {
    setDataForModal({ image: e.target.dataset.modal, alt: e.target.alt });
  }

  async function handleFetch(request, page) {
    try {
      const { hits, totalPages } = await getImages(request, page);
      if (totalPages === 0) {
        setIsDataReady(false);
        toast.error('No results found');
        return;
      }
      setHits(prevState => [...prevState, ...hits]);
      setTotalPages(totalPages);
      setIsDataReady(true);
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {isDataReady && (
        <ImageGallery data={hits} onModalShow={handleModalOpen} />
      )}
      {isLoading && <Loader />}
      {page < totalPages && isDataReady && <Button onClick={handleLoadMore} />}
      {page > 2 && <ToTop />}
      {dataForModal && (
        <Modal onClose={() => setDataForModal(null)}>
          <img src={dataForModal.image} alt={dataForModal.alt} />
        </Modal>
      )}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme={'dark'}
      />
    </Container>
  );
}
