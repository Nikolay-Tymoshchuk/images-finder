import styled from '@emotion/styled';
import { ImArrowUp } from 'react-icons/im';

export const Button = styled(ImArrowUp)`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  background: var(--color-accent);
  padding: 10px;
  transform: translate(-50%, -50%);
  border-radius: 10%;
  transition: 175ms ease-in-out;

  &:hover {
    background: var(--color-hover);
    transform: translate(-50%, -60%) scale(1.1);
    transition: 350ms ease-in-out;
  }
`;
