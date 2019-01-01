import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import Error from './ErrorMessage';
import RequestConfirmed from './RequestConfirmed';
import User from './User';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY{
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      requests{
        id
        requestedId
        name
        lastName
        price
        details
        email
        user{
          id
        }
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends React.Component {
  render() {
    return(
      <User>
        {({ data: { me } }) => (
          <Query query={USER_ORDERS_QUERY}>
            {({ data: { orders }, loading, error }) => {
              if(loading) return <p>...loading</p>
              if(error) return <Error error={error} />
              return(
                <div>
                  <h2>you have {orders.length} confirmed requests</h2>
                  <OrderUl>
                    {orders.map(order => (
                      <OrderItemStyles key={order.id}>
                        <Link
                          href={{
                            pathname: '/order',
                            query: { id: order.id },
                          }}
                        >
                          <a>
                            <div className="order-meta">
                              <p>{order.requests.length} Request</p>
                              <p>{formatDistance(order.createdAt, new Date())} ago</p>
                              <p>{formatMoney(order.total)}</p>
                            </div>
                            <div className="images">
                              {order.requests.filter(request => request.email).map(request => (
                                <RequestConfirmed request={request} key={ request.id }/>
                              ))}
                            </div>
                          </a>
                        </Link>
                        <div className="buttonList">
                           <Link href={{
                             pathname: '/request',
                           }}>
                             <a>
                               Chat
                             </a>
                           </Link>
                           <Link href={{
                             pathname: '/request',
                           }}>
                             <a>
                               Cancel Request and Notify
                             </a>
                           </Link>
                        </div>
                      </OrderItemStyles>
                    ))}
                  </OrderUl>
                </div>
              );
            }}
          </Query>
      )}
    </User>
    )
  }
}

export default OrderList;
