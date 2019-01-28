import React from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DeleteBlackoutRanges from './DeleteBlackoutRanges';
import Error from './ErrorMessage';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const BlackOutRangeItem = ({ blackOutItem }) => {
  if(!blackOutItem)
  <CartItemStyles>
    <p>This black out has been cancelled</p>
    <DeleteBlackoutRanges id={blackOutItem.id} />
  </CartItemStyles>;
  return (
  <CartItemStyles>
    <div className="cart-item-details">
      <h3>{ blackOutItem.weekday}</h3>
      <h3>{ blackOutItem.begin}</h3>
      <h3>{ blackOutItem.end}</h3>
    </div>
    <DeleteBlackoutRanges id={blackOutItem.id} />
  </CartItemStyles>
)};

export default BlackOutRangeItem;
