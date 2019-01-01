import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Head from 'next/head';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderStyles from './styles/OrderStyles';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!){
    order(id: $id){
      id
      charge
      total
      createdAt
      user{
        id
      }
      requests{
        id
        requestedId
        name
        lastName
        details
        price
        referenceImage
        quantity
        approved
      }
    }
  }
`;

class Order extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render(){
    return(
      <Query query={ SINGLE_ORDER_QUERY } variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if(error) return <Error error={error}/>
          if(loading) return <p> ... loading </p>
          const order = data.order;
          console.log(order);
          return (
            <OrderStyles>
              <Head>
                <title>Palazar | Order { order.id } </title>
              </Head>
              <p>
                <span>Order Id:</span>
                <span>{ this.props.id }</span>
              </p>
              <p>
                <span>Charge</span>
                <span>{ order.charge }</span>
              </p>
              <p>
                <span>Created At</span>
                <span>{ format(order.createdAt, 'MMMM d, YYYY h:mm a',{ awareOfUnicodeTokens: true }) }</span>
              </p>
              <p>
                <span>Order Total</span>
                <span>{ formatMoney(order.total) }</span>
              </p>
              <p>
                <span>Request Count</span>
                <span>{ order.requests.length }</span>
              </p>
              <div className="items">
                { order.requests.map( request => (
                  <div className="order-item" key={ request.id }>
                    <img src={ request.referenceImage } alt={ request.name } />
                    <div className="item-details">
                      <h2>{ request.name } { request.lastName } </h2>
                      <p>Qty: {request.quantity}</p>
                      <p>Each: {formatMoney(request.price)}</p>
                      <p>SubTotal: {formatMoney(request.price * request.quantity)}</p>
                      <p>{request.details}</p>
                      <p>With a convenience fee of $5.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </OrderStyles>
          )
        }}
      </Query>
    );
  }
}

export default Order;
