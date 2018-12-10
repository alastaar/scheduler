import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      requests {
        id
        name
      }
    }
  }
`;

function totalItems(cart){
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class Money extends React.Component {
  onToken = async (res, createOrder) =>  {
    NProgress.start();
    console.log(res.id);
    const order = await createOrder({
      variables: {
        token: res.id,
      }
    }).catch(err => {
      alert(err.message);
    });
    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id }
    })
  };
  render(){
    return(
      <User>
        {({ data: { me }}) => (
          <Mutation mutation={ CREATE_ORDER_MUTATION } refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
            { createOrder => (
              <StripeCheckout
                amount={calcTotalPrice(me.cart)}
                name="Scratcher"
                description={`${totalItems(me.cart)} appointment confirmation`}
                image={me.cart.length && me.cart[0].request && me.cart[0].request.referenceImage}
                stripeKey="pk_test_K3j8JU1o7WrtlpA5zY8bavrR"
                currency="USD"
                email={me.email}
                token={res => this.onToken(res, createOrder) }
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </User>
    )
  }

}

export default Money;