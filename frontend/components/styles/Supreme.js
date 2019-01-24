import styled from 'styled-components';

const Supreme = styled.h3`
  background: white;
  color: ${props => props.theme.black};
  display: inline-block;
  padding: 4px 5px;
  margin: 0;
  font-size: 4rem;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export default Supreme;
