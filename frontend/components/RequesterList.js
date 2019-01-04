import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import RequesterPending from './RequesterPending';
import RequestNeedApproved from './RequestNeedApproved';
import Pagination from './Pagination';
import { perPage } from '../config';
import User from './User';
import OrderListUser from './OrderListUser';


const ALL_REQUESTS_QUERY = gql`
  query ALL_REQUESTS_QUERY($skip: Int = 0, $first: Int = ${ perPage }) {
    requests(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      name
      lastName
      price
      email
      details
      dateOne
      timeOne
      dateTwo
      timeTwo
      dateThree
      timeThree
      referenceImage
      approved
      user{
        name
        lastName
        email
      }
    }
  }
`;

const RequestsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width = ${ props => props.theme.maxWidth }
  margin: 0 auto;
`;

const Center = styled.div`
  text-align: center;
`;

class RequestList extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <Center>
            <>
              <h2>Pending Requests</h2>
              <Query query={ ALL_REQUESTS_QUERY } variables={{
                skip: this.props.page * perPage - perPage,
              }}>
                { ({ data, error, loading }) => {
                  if ( loading ) return <p> ... loading </p>;
                  if ( error ) return <p> ERROR: { error.message }</p>;
                  return <RequestsList>
                    { data.requests.filter(request => request.user.email === me.email && request.approved == 'no').map(request => <RequesterPending request={request} key={ request.id }/>) }
                  </RequestsList>;
                } }
              </Query>
              <h2>Approved Requests</h2>
              <Query query={ ALL_REQUESTS_QUERY } variables={{
                skip: this.props.page * perPage - perPage,
              }}>
                { ({ data, error, loading }) => {
                  if ( loading ) return <p> ... loading </p>;
                  if ( error ) return <p> ERROR: { error.message }</p>;
                  return <RequestsList>
                    { data.requests.filter(request => request.user.email === me.email && request.approved == 'yes').map(request =>
                      <RequestNeedApproved request={request} key={ request.id }/> ) }
                  </RequestsList>
                } }
              </Query>
              <h2>Confirmed Requests</h2>
              <OrderListUser/>
            </>
          </Center>
        )}
      </User>
    )
  }
}

export default RequestList;
export { ALL_REQUESTS_QUERY };
