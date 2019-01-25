import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_REQUESTS_QUERY } from './RequestList';

const DELETE_REQUEST_MUTATION = gql`
  mutation DELETE_REQUEST_MUTATION($id: ID!) {
    deleteRequest(id: $id) {
      id
    }
  }
`;

class DeleteRequest extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_REQUESTS_QUERY });
    // 2. Filter the deleted itemout of the page
    data.requests = data.requests.filter(request => requests.id !== payload.data.deleteRequest.id);
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_REQUESTS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_REQUEST_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        refetchQueries={[{ query: ALL_REQUESTS_QUERY }]}
      >
        {(deleteRequest, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this request?')) {
                deleteRequest().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteRequest;
