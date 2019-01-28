import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_USERS_QUERY } from './Permissions';
import SickButton from './styles/SickButton';
import Error from './ErrorMessage';

const DELETE_USER_MUTATION = gql`
  mutation DELETE_USER_MUTATION($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

class DeleteUser extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_USERS_QUERY });
    // 2. Filter the deleted itemout of the page
    data.users = data.users.filter(user => user.id !== payload.data.deleteUser.id);
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_USERS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_USER_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        refetchQueries={[{ query: ALL_USERS_QUERY }]}
      >
        {(deleteUser, { error }) => (
          <SickButton
            onClick={() => {
              if (confirm('Are you sure you want to delete this user?')) {
                deleteUser().catch(error => {
                  alert(error.message);
                });
              }
            }}
          >
            {this.props.children}
          </SickButton>
        )}
      </Mutation>
    );
  }
}

export default DeleteUser;
