import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import RequestsPending from './RequestPending';
import RequestsApproved from './RequestApproved';
import Pagination from './Pagination';
import { perPage } from '../config';

const ALL_REQUESTS_QUERY = gql`
  query ALL_REQUESTS_QUERY($skip: Int = 0, $first: Int = ${ perPage }) {
    requests(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      name
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
      <Center>
        <>
          <h2>Pending Requests</h2>
          <Pagination page={ this.props.page } />
          <Query query={ ALL_REQUESTS_QUERY } variables={{
            skip: this.props.page * perPage - perPage,
          }}>
            { ({ data, error, loading }) => {
              if ( loading ) return <p> ... loading </p>;
              if ( error ) return <p> ERROR: { error.message }</p>;
              return <RequestsList>
                { data.requests.map(request => <RequestsPending request={request} key={ request.id }/>) }
              </RequestsList>;
            } }
          </Query>
          <Pagination page={ this.props.page } />
          <h2>Approved Requests</h2>
          <Pagination page={ this.props.page } />
          <Query query={ ALL_REQUESTS_QUERY } variables={{
            skip: this.props.page * perPage - perPage,
          }}>
            { ({ data, error, loading }) => {
              if ( loading ) return <p> ... loading </p>;
              if ( error ) return <p> ERROR: { error.message }</p>;
              return <RequestsList>
                { data.requests.map(request => <RequestsApproved request={request} key={ request.id }/>) }
              </RequestsList>;
            } }
          </Query>
          <Pagination page={ this.props.page } />
        </>
      </Center>
    )
  }
}

export default RequestList;
export { ALL_REQUESTS_QUERY };
