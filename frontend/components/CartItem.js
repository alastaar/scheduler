import React from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveFromCart from './RemoveFromCart';

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

const CartItem = ({ cartRequest }) => {
  if(!cartRequest.request)
  <CartItemStyles>
    <p>This request has been cancelled</p>
    <RemoveFromCart id={cartRequest.id} />
  </CartItemStyles>;
  return (
  <CartItemStyles>
    <img width="100" src={cartRequest.request.referenceImage} alt={ cartRequest.request.name } />
    <div className="cart-item-details">
      <h3>{ cartRequest.request.name } { cartRequest.request.lastName }</h3>
      <p>
        { formatMoney(cartRequest.request.price * cartRequest.quantity) }
        {' - '}
        <em>
          {cartRequest.quantity} &times; { formatMoney(cartRequest.request.price) } each
        </em>
      </p>
    </div>
    <RemoveFromCart id={cartRequest.id} />
  </CartItemStyles>
)};

CartItem.propTypes = {
  cartRequest: PropTypes.object.isRequired,

}

export default CartItem;
