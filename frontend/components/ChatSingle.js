import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Form from './styles/Form';
import ChatMessages from './ChatMessages';
import User from './User';


const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${ props => props.theme.bs };
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details{
    margin: 3rem;
    font-size: 2rem;
  }
  button {
    background-color: black;
    color: white;
    padding: 10px 15px;
  }
  a {
    background-color: black;
    color: white;
    padding: 10px 15px;
    display: inline-block;
  }
`;

const SINGLE_CHAT_QUERY = gql`
  query SINGLE_CHAT_QUERY($id: ID!){
    chat(where: { id: $id } ) {
      id
      vendor
      client
      clientMessages {
        id
        message
        createdAt
        user{
          id
          name
          profileImage
        }
      }
    }
  }
`;


const CREATE_CHAT_MESSAGE_MUTATION = gql`
  mutation CREATE_CHAT_MESSAGE_MUTATION($message: String!, $chatId: String) {
    createChatMessage(message: $message, chatId: $chatId) {
      id
    }
  }
`;



class ChatSingle extends Component{

  state = {
    message: '',
    chatId: this.props.id,
  };

  handleMessageChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? (parseFloat(value) * 100) : value;
    this.setState({ message: val });
  };

  createChatMessage = async (e, createChatMessageMutation) => {
    e.preventDefault();
    const res = await createChatMessageMutation({variables: { ...this.state,}});
    this.setState({ message: '' });

  };

  render(){

    return(
      <User>
        {({ data: { me } }) => (
          <>
            { me && (
              <Query query={ SINGLE_CHAT_QUERY } variables={{id: this.props.id}}>
                {({ error, loading, data }) => {
                  if(error) return <Error errror={ error } />;
                  if(loading) return <p>loading..</p>;
                  if(!data.chat) return <p>No request found </p>
                  const chat = data.chat;
                  const messages = chat.clientMessages;
                  return (
                    <>
                      <div>
                        { messages.map((message, index) =>
                          <>
                            { me.id === message.user.id && (
                              <ChatMessages key={index} message={message} yes="yes"/>
                            )}
                            { me.id !== message.user.id && (
                              <ChatMessages key={index} message={message} yes="no"/>
                            )}
                          </>
                        )}
                      </div>
                    <Mutation
                      mutation={ CREATE_CHAT_MESSAGE_MUTATION }
                      variables={this.state}
                      refetchQueries={[{
                        query: SINGLE_CHAT_QUERY,
                        variables: { id: this.props.id }
                      }]}
                    >
                      {(createChatMessage, { loading, error }) => (
                        <Form className="chatMessage" onSubmit={ async e => {
                          await this.createChatMessage(e, createChatMessage);
                        }}>
                          <label htmlFor="message">
                            Send Message
                            <input
                              type="text"
                              id="message"
                              name="message"
                              placeholder=" "
                              required
                              defaultValue=''
                              onChange={this.handleMessageChange}
                            />
                          </label>
                          <button type="submit">Send{loading ? 'ing' : ''}</button>
                        </Form>
                      )}
                    </Mutation>
                    </>
                    )
                  }}
              </Query>
            )}
          </>
        )}
      </User>
    )
  }
}

export default ChatSingle;
export { SINGLE_CHAT_QUERY };
