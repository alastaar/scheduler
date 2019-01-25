import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_REQUESTS_QUERY } from './RequestList';
import Router from 'next/router';
import User, { CURRENT_USER_QUERY } from './User';
import NProgress from 'nprogress';

const CREATE_CHAT_MUTATION = gql`
  mutation createChat($vendor: String!, $client: String!) {
    createChat(vendor: $vendor, client: $client ) {
      id
      vendor
      client
    }
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
        {createChat => (
          <button onClick={() => this.chatThing(createChat)}>
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default Chat;
