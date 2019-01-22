import React, { Component } from 'react';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import ApproveRequest from './ApproveRequest';
import User from './User';
import DeleteRequest from './DeleteRequest';
import RejectRequest from './RejectRequest';
import Chat from './Chat';
import AddToCart from './AddToCart';
import Pay from './Pay';



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
    display: inline-block;
    border: none;
    font-weight: 900;
  }
  a {
    background-color: black;
    color: white;
  }
  .suggestions{
    width: 50%;
    button {
      margin-left: 0%;
      width: 100%;
    }
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
      rejectReason
      requestedId
      user {
        id
      }
    }
  }
`;


class SingleRequest extends Component{

  convertTime = (time24) => {
    var tmpArr = time24.split(':'), time12;
    if(+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    }
    else {
      if(+tmpArr[0] == 0) {
        time12 = '12:' + tmpArr[1] + ' am';
      }
      else {
        if(+tmpArr[0] > 12) {
          time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' pm';
        }
        else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' am';
        }
      }
    }
    return time12;
  }
  render(){
    return(
      <User>
        {({ data: { me } }) => (
          <>
            <Query query={ SINGLE_REQUEST_QUERY } variables={{
              id: this.props.id,
            }}
            >
              {({ error, loading, data }) => {
                if(error) return <Error errror={ error } />;
                if(loading) return <p>loading..</p>;
                if(!data.request) return <p>No request found </p>
                const request = data.request;
                return <>
                { me.id === request.requestedId && (
                  <SingleItemStyles>
                  <Head>
                    <title> Scratcher | { request.name } </title>
                  </Head>
                  <img src={ request.referenceImage } alt= { request.name } />
                  <div className="details">
                    {request.rejectReason &&(
                      <h3>{request.rejectReason}</h3>
                    )}
                    <h2>Viewing request from { request.name }</h2>
                    <p>{request.details}</p>
                    { request.approved=="no" &&
                    <div className="suggestions">
                      <ApproveRequest id={request.id}
                      dateOne={request.dateOne}
                      dateTwo={request.dateTwo}
                      dateThree={request.dateThree}
                      timeOne={this.convertTime(request.timeOne)}
                      timeTwo={this.convertTime(request.timeTwo)}
                      timeThree={this.convertTime(request.timeThree)}
                      >Approve</ApproveRequest>
                      <RejectRequest
                      id={request.id}
                      >Reject Request</RejectRequest>
                      <DeleteRequest
                      id={request.id}
                      >
                      Remove Request
                      </DeleteRequest>
                    </div>
                  }
                  { request.approved=="yes" &&
                  <div className="suggestions">
                  <p>@ { this.convertTime(request.timeOne) }</p>
                  <p>On { request.dateOne }</p>
                  <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
                  <RejectRequest
                  id={request.id}
                  >
                  Change Request
                  </RejectRequest>
                  <DeleteRequest
                  id={request.id}
                  >
                  Remove Request
                  </DeleteRequest>
                  </div>
                }
                { request.approved=="confirmed" &&
                <div className="suggestions">
                <p>@ { this.convertTime(request.timeOne) }</p>
                <p>On { request.dateOne }</p>
                <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
                </div>
              }
                  </div>
                  </SingleItemStyles>
                  )}
                  { me.id === request.user.id && (
                    <SingleItemStyles>
                    <Head>
                      <title> Scratcher | { request.name } </title>
                    </Head>
                    <img src={ request.referenceImage } alt= { request.name } />
                    <div className="details">
                      {request.rejectReason &&(
                        <h3>{request.rejectReason}</h3>
                      )}
                      <h2>Viewing request from { request.name }</h2>
                      <p>{request.details}</p>
                      { request.approved=="no" &&
                      <div className="suggestions">
                      <button>
                      <Link href={{
                        pathname: '/update-request',
                        query: { id: request.id },
                      }}>
                        <a>
                          Update Request
                        </a>
                      </Link>
                      </button>
                      <DeleteRequest id={request.id}>Remove Request</DeleteRequest>
                      </div>
                    }
                    { request.approved=="yes" &&
                    <div className="suggestions">
                    <p>@ { this.convertTime(request.timeOne) }</p>
                    <p>On { request.dateOne }</p>
                    <AddToCart id={request.id} />
                    <Pay id={request.id} />
                    <DeleteRequest id={request.id}>Remove Request</DeleteRequest>
                    <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
                    </div>
                  }
                  { request.approved=="confirmed" &&
                  <div className="suggestions">
                  <p>@ { this.convertTime(request.timeOne) }</p>
                  <p>On { request.dateOne }</p>
                    <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
                  </div>
                }
                    </div>
                    </SingleItemStyles>
                    )}
                </>
              }}
            </Query>
            </>
          )}
        </User>
    )
  }
}

export default SingleRequest;
export { SINGLE_REQUEST_QUERY };
