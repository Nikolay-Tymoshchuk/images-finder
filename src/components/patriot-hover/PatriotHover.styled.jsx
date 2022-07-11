import styled from '@emotion/styled';

export const ColoredBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 4em;
  height: 4em;
  filter: blur(15px);
  background: linear-gradient(
    #0084ff 0%,
    #0084ff 45%,
    #fffb00 55%,
    #fffb00 100%
  );
  /* background-color: goldenrod; */
  z-index: 0;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;
