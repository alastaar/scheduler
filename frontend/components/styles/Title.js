import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  /* margin-top: -3rem; */
/* adow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  a {

    background: white;
    display: inline;
    line-height: 1.3;
    font-size: 3rem;
    text-align: center;
    color: ${props => props.theme.black};
    padding: 0 1rem;
  }
`;

export default Title;
