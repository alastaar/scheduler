import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Head from 'next/head';
import gql from 'graphql-tag';
import Link from 'next/link';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderStyles from './styles/OrderStyles';
import Chat from './Chat';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!){
    order(id: $id){
      id
      charge
      total
      createdAt
      user{
        id
        name
        lastName
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
        user {
          id
          name
          lastName
        }
      }
    }
  }
`;

class Order extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  convertFee = val => {
    let finalMoney = 0;
    if(val == 0){
      finalMoney = 2;
    } else {
      finalMoney = (val / 100) + ((val / 100) * .05);
    }
    return finalMoney;
  }

  render(){
    return(
      <Query query={ SINGLE_ORDER_QUERY } variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if(error) return <Error error={error}/>
          if(loading) return <p> ... loading </p>
          const order = data.order;
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
                <span>{ order.user.name } { order.user.lastName }</span>
              </p>
              <p>
                <span>Created At</span>
                <span>{ format(order.createdAt, 'MMMM d, YYYY h:mm a',{ awareOfUnicodeTokens: true }) }</span>
              </p>
              <p>
                <span>Order Total</span>
                {order.total == 0 && (
                  <span>{ formatMoney(order.total + 200) }</span>
                )}
                {order.total !== 0 && (
                  <span>{ formatMoney(order.total + 200) }</span>
                )}
              </p>
              <p>
                <span>Request Count</span>
                <span>{ order.requests.length }</span>
              </p>
              <div className="items">
                { order.requests.map( request => (
                  <>
                    <div className="order-item" key={ request.id }>
                      <img src={ request.referenceImage } alt={ request.name } />
                      <div className="item-details">
                        <h2>{ request.name }</h2>
                        <p>Qty: {request.quantity}</p>
                        <p>SubTotal: ${this.convertFee(request.price * request.quantity)}</p>
                        <p>{request.details}</p>
                        {request.price == 0 && (
                          <p>With a fee of $2</p>
                        )}
                        {request.price !== 0 && (
                          <p>With a fee of $2</p>
                        )}
                      </div>
                    </div>
                    <div className="buttonList">
                      <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
                    </div>
                  </>
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
