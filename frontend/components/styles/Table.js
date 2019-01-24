import styled from 'styled-components';

const Table = styled.table`
font-family: 'Slabo 27px', serif;
  border-spacing: 0;
  width: auto;
  display: inline-block;
  vertical-align: top;
  margin-left: 10%;
  thead {
    font-size: 10px;
  }
  td,
  th {
    border-bottom: 1px solid ${props => props.theme.offWhite};
    border-right: 1px solid ${props => props.theme.offWhite};
    position: relative;
    padding: 3px;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
    label{
      display: block;
      padding: 10px 5px;
    }
  }
  tr {
    &:hover {
      background: ${props => props.theme.offWhite};
    }
  }
`;

export default Table;
