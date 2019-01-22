import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';


const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: auto;
  padding-bottom: 50px;
  img{
    width: 300px;
    height: 300px;
    background-size: cover;
    display: block;
    border-radius: 150px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  .details{
    font-size: 2rem;
  }
`;

const Something = styled.div`
  a {
    background-color: ${ props => props.theme.red };
    padding: 15px 20px;
    color: white;
    font-size: 25px;
    font-weight: 800;
    margin-left: 30%;
  }
`;

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!){
    user(where: { id: $id }) {
      id
      name
      lastName
      email
      price
      image
      shop
      instagramHandle
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
          return <>
          <SingleItemStyles>
            <Head>
              <title> Palazar | { user.name } </title>
            </Head>
            <img src={ user.image } alt= { user.name } />
            <div className="details">
              <h2>Viewing { user.name } { user.lastName }</h2>
              {user.instagramHandle && (
                 <p> Handle: { user.instagramHandle }</p>
              )}
              {user.shop && (
                 <p> Shop: { user.shop } </p>
              )}
              <p>{ formatMoney(user.price) } per deposit</p>
            </div>
          </SingleItemStyles>
          <Something>
            <Link href={{
              pathname: '/request',
              query: { id: user.id, name: user.name, lastName: user.lastName, email: user.email, price: user.price },
            }}>
              <a>
                Request Appointment
              </a>
            </Link>
          </Something>
          </>
        }}
      </Query>
    )
  }
}

export default SingleUserBlock;
export { SINGLE_USER_QUERY};
