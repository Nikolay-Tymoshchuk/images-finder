import { Button } from './ButtonUp.styled';

const ToTop = () => {
  return (
    <Button
      size={30}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  );
};

export default ToTop;
