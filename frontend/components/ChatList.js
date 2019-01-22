import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import Error from './ErrorMessage';
import RequestsConfirmedUser from './RequestConfirmedUser';
import User from './User';
import {SINGLE_USER_QUERY} from './SingleUserBlock';

const USER_CHATS_QUERY = gql`
  query USER_CHATS_QUERY {
    chats(orderBy: createdAt_DESC) {
      id
      vendor
      client
      clientMessages {
        id
        message
        createdAt
        user {
          id
          name
          profileImage
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

class ChatList extends React.Component {
  render() {
    return(
      <User>
        {({ data: { me } }) => (
          <Query query={USER_CHATS_QUERY}>
            {({ data: { chats }, loading, error }) => {
              if(loading) return <p>...loading</p>
              if(error) return <Error error={error} />
              console.log(chats);
              return(
                <div>
                  <OrderUl>
                    {chats.map(chat => (
                      <>
                        {me.id === chat.client && me.id !== chat.vendor && (
                          <Query query={SINGLE_USER_QUERY} variables={{id: chat.vendor}}>
                            {({ data, loading, error }) => {
                              if(loading) return <p>...loading</p>
                              if(error) return <Error error={error} />
                              const user = data.user;
                              return(
                                <OrderItemStyles key={chat.id}>
                                  <Link
                                    href={{
                                      pathname: '/chat',
                                      query: { id: chat.id },
                                    }}
                                  >
                                    <a>
                                      <div className="order-meta">
                                        <p>{user.name}</p>
                                      </div>
                                    </a>
                                  </Link>
                                </OrderItemStyles>
                              );
                            }}
                          </Query>
                        )}
                        {me.id === chat.vendor && me.id !== chat.client && (
                          <Query query={SINGLE_USER_QUERY} variables={{id: chat.client}}>
                            {({ data, loading, error }) => {
                              if(loading) return <p>...loading</p>
                              if(error) return <Error error={error} />
                              const user = data.user;
                              return(
                                <OrderItemStyles key={chat.id}>
                                  <Link
                                    href={{
                                      pathname: '/chat',
                                      query: { id: chat.id },
                                    }}
                                  >
                                    <a>
                                      <div className="order-meta">
                                        <p>{user.name}</p>
                                      </div>
                                    </a>
                                  </Link>
                                </OrderItemStyles>
                              );
                            }}
                          </Query>
                        )}
                        {me.id === chat.client && me.id === chat.vendor && (
                          <Query query={SINGLE_USER_QUERY} variables={{id: chat.vendor}}>
                            {({ data, loading, error }) => {
                              if(loading) return <p>...loading</p>
                              if(error) return <Error error={error} />
                              const user = data.user;
                              return(
                                <OrderItemStyles key={chat.id}>
                                  <Link
                                    href={{
                                      pathname: '/chat',
                                      query: { id: chat.id },
                                    }}
                                  >
                                    <a>
                                      <div className="order-meta">
                                        <p>{user.name}</p>
                                      </div>
                                    </a>
                                  </Link>
                                </OrderItemStyles>
                              );
                            }}
                          </Query>
                        )}
                      </>
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

export default ChatList;
