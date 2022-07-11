import styled from '@emotion/styled';
import { ImArrowUp } from 'react-icons/im';

export const Button = styled(ImArrowUp)`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
  color: var(--color-background-primary);
  background: var(--color-accent);
  padding: 15px;
  transform: translate(-50%, -50%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  transition: 175ms ease-in-out;

  &:hover {
    background: transparent;
    color: #fff;
    transform: translate(-50%, -60%) scale(1.1);
    transition: 350ms ease-in-out;
  }
`;
