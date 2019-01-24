import styled from 'styled-components';

const CloseButton = styled.button`
  background: white;
  font-family: 'Slabo 27px', serif;
  color: black;
  font-size: 6rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  @media (max-width: 700px) {
    right: 20;
  }
`;

export default CloseButton;
