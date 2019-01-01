import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import User from './User';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import Money from './Money';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }

`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;
/*esline-disable*/
const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => <Mutation mutation={ TOGGLE_CART_MUTATION }>{render}</Mutation>,
  localState: ({ render }) =>  <Query query={ LOCAL_STATE_QUERY }>{render}</Query>,
});

/*esline-enable*/
const Cart = () => (
  <Composed>
    {({ user, toggleCart, localState }) => {
      const me = user.data.me;
      if(!me) return null;
      return(

               <CartStyles open={ localState.data.cartOpen }>
                <header>
                  <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
                  <Supreme>{me.name}'s Cart</Supreme>
                  <p>You have {me.cart.length} appointment{me.cart.length === 1 ? '' : 's'} in your cart </p>
                </header>
                <ul>
                  { me.cart.map(cartRequest => <CartItem key={cartRequest.id} cartRequest={cartRequest}/> )}
                </ul>

                <p> + 5% Convenience Fee </p>
                <footer>
                  <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                  {me.cart.length && (
                    <Money>
                      <SickButton>Confirm Appointment</SickButton>
                    </Money>
                  )}
                </footer>

              </CartStyles>
        );
      }}
    </Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
