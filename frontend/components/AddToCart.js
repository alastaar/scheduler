
import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { TOGGLE_CART_MUTATION } from './Cart';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { error, loading }) => (
          <Mutation mutation={TOGGLE_CART_MUTATION}>
            {(toggleCart) => (
              <button disabled={loading} onClick={addToCart, toggleCart}>
                Confirm{loading && 'ing'} Request and pay
              </button>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}
export default AddToCart;
