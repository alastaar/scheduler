import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

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
`;

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!){
    user(where: { id: $id }) {
      id
      name
      email
      price
      image
    }
  }
`;


class SingleUserBlock extends Component{
  render(){
    return(
      <Query query={ SINGLE_USER_QUERY } variables={{
        id: this.props.id,
      }}
      >
        {({ error, loading, data }) => {
          if(error) return <Error errror={ error } />;
          if(loading) return <p>loading..</p>;
          if(!data.user) return <p>No User found </p>
          const user = data.user;
          return <SingleItemStyles>
            <Head>
              <title> Scratcher | { user.name } </title>
            </Head>
            <img src={ user.image } alt= { user.name } />
            <div className="details">
              <h2>Viewing { user.name }</h2>
              <p>{ user.email }</p>
              <p>{ user.price }</p>
            </div>
          </SingleItemStyles>;
        }}
      </Query>
    )
  }
}

export default SingleUserBlock;
