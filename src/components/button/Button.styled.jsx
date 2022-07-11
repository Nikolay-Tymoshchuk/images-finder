import styled from '@emotion/styled';
import backgroundImg from '../../images/gridnew.svg';

export const Loadmore = styled.button`
  background: url(${backgroundImg});
  background-color: var(--color-accent);
  background-size: 8em;
  border: 2px solid var(--color-accent);
  border-radius: 5px;
  box-shadow: inset 0px 0px 16px 5px var(--color-background-header);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  left: 50%;
  min-width: 180px;
  max-width: 300px;
  overflow: hidden;
  padding: 13px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  top: 50%;
  text-transform: uppercase;
  transform: translate(-50%, -25%);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: var(--color-background-header);
    letter-spacing: 0.4em;
  }

  &::before,
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 50%;
    width: 50%;
    height: 100%;
    background-color: var(--color-background-header);
    background-size: cover;
  }
  &::after {
    left: 50%;
  }

  &:hover::before,
  &:focus::before {
    transform: translateX(-100%);
    transition: 1000ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    transform: translateX(100%);
    transition: 1000ms ease-in-out;
  }
`;
