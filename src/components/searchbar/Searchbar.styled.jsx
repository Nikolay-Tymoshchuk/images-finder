import styled from '@emotion/styled';
import picture from '../../images/gridnew.svg';

export const Header = styled.header`
  overflow: hidden;
  top: 0;
  left: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  color: #fff;
  background: var(--color-background-header);
  background-size: contain;
  background-position: bottom;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  position: inherit;
  z-index: 1;
  display: flex;
  align-items: center;
  /* width: 100%; */
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  background-color: var(--color-input);
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const Svg = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 30 30"
      fill="var(--color-accent)"
    >
      <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
    </svg>
  );
};

export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${picture});
  width: 100%;
  height: 100%;
  z-index: 0;
  background-size: 250px;
`;
