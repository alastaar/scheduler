import React, { Component } from 'react';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import ApproveRequest from './ApproveRequest';

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

const SINGLE_REQUEST_QUERY = gql`
  query SINGLE_REQUEST_QUERY($id: ID!){
    request(where: { id: $id }) {
      id
      name
      lastName
      email
      referenceImage
      timeOne
      dateOne
      timeTwo
      dateTwo
      timeThree
      dateThree
      details
      approved
    }
  }
`;


class SingleRequest extends Component{
  render(){
    return(
      <Query query={ SINGLE_REQUEST_QUERY } variables={{
        id: this.props.id,
      }}
      >
        {({ error, loading, data }) => {
          if(error) return <Error errror={ error } />;
          if(loading) return <p>loading..</p>;
          if(!data.request) return <p>No request found </p>
          const request = data.request;
          return <SingleItemStyles>
            <Head>
              <title> Scratcher | { request.name } </title>
            </Head>
            <img src={ request.referenceImage } alt= { request.name } />
            <div className="details">
              <h2>Viewing request from { request.name } { request.lastName }</h2>
              <p>@ { request.timeOne }</p>
              <p>On { request.dateOne }</p>
              <p>{request.details}</p>
              { request.approved=="no" &&
              <>
              <ApproveRequest id={request.id}
              dateOne={request.dateOne}
              dateTwo={request.dateTwo}
              dateThree={request.dateThree}
              timeOne={request.timeOne}
              timeTwo={request.timeTwo}
              timeThree={request.timeThree}
              >Approve</ApproveRequest>
              <Link href={{
                pathname: '/request',
                query: { id: request.id, title: request.title, description: request.description, price: request.price },
              }}>
                <a>
                  Reject Request
                </a>
              </Link>
              </>
            }
            { request.approved=="yes" &&
            <>
              <Link href={{
                pathname: '/request',
                query: { id: request.id, title: request.title, description: request.description, price: request.price },
              }}>
                <a>
                  Cancel Approval
                </a>
              </Link>
              <Link href={{
                pathname: '/request',
                query: { id: request.id, title: request.title, description: request.description, price: request.price },
              }}>
                <a>
                  Reschedule Request
                </a>
              </Link>
            </>
          }
          { request.approved=="confirmed" &&
          <>
          <ApproveRequest id={request.id}
          dateOne={request.dateOne}
          dateTwo={request.dateTwo}
          dateThree={request.dateThree}
          timeOne={request.timeOne}
          timeTwo={request.timeTwo}
          timeThree={request.timeThree}
          >Approve</ApproveRequest>
          <Link href={{
            pathname: '/request',
            query: { id: request.id, title: request.title, description: request.description, price: request.price },
          }}>
            <a>
              Reschedule Request
            </a>
          </Link>
          </>
        }
            </div>
          </SingleItemStyles>;
        }}
      </Query>
    )
  }
}

export default SingleRequest;
export { SINGLE_REQUEST_QUERY };
