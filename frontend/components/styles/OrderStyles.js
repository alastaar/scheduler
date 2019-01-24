import styled from 'styled-components';

const OrderStyles = styled.div`
font-family: 'Slabo 27px', serif;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  padding: 2rem;
  border-top: 5px solid ${props => props.theme.red};;
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.offWhite};
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid ${props => props.theme.offWhite};
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    /* margin: 2rem 0; */
    padding-bottom: 2rem;
    img {
      width: 100%;
      /* height: 100%; */
      object-fit: cover;
    }
  }
  .buttonList {
    display: grid;
    width: 100%;
    /* border-top: 1px solid ${props => props.theme.lightgrey}; */
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1.5rem;
      padding: 1rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;
export default OrderStyles;
