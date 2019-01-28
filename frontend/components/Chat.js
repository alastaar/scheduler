import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_REQUESTS_QUERY } from './RequestList';
import Router from 'next/router';
import User, { CURRENT_USER_QUERY } from './User';
import NProgress from 'nprogress';
import Error from './ErrorMessage';
import styled from 'styled-components';

const CREATE_CHAT_MUTATION = gql`
  mutation createChat($vendor: String!, $client: String!) {
    createChat(vendor: $vendor, client: $client ) {
      id
      vendor
      client
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red };
    cursor: pointer;
  }
`;

class Chat extends Component {
  state = {
    vendor: this.props.vendor,
    client: this.props.client,
  };

  chatThing = async (createChat) =>  {
    NProgress.start();

    const chat = await createChat({
      variables: {
        vendor: this.state.vendor,
        client: this.state.client,
      }
    }).catch(err => {
      alert(err.message);
    });

    Router.push({
      pathname: '/chat',
      query: { id: chat.data.createChat.id }
    })
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_CHAT_MUTATION}
      >
        {(createChat, {error, loading}) =>
          <BigButton disabled={loading}
          onClick={() => {this.chatThing(createChat)}}
          title="Create Messafe">{this.props.children}</BigButton>
        }
      </Mutation>
    );
  }
}

export default Chat;
