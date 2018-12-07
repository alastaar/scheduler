import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_REQUESTS_QUERY } from './RequestList';

const APPROVE_REQUEST_MUTATION = gql`
  mutation APPROVE_REQUEST_MUTATION(
    $id: ID!
    $approved: String
  ) {
    approveRequests(
      id: $id
      approved: $approved
    ) {
      id
      approved
    }
  }
`;

class ApproveRequest extends Component {
  state = {
    approved: 'yes',
  };

  update = e => {
    this.setState({ approved: 'yes' });
    console.log(this.props);
  };

  render() {
    return (
      <Mutation
        mutation={ APPROVE_REQUEST_MUTATION }
        variables={{ id: this.props.id, approved: this.state.approved }}
        update={this.update}
        refetchQueries={[{ query: ALL_REQUESTS_QUERY }]}
      >
        {(approveRequest, { error }) => (
          <button onClick={async e => {
              if (confirm('Are you sure you want to approve this request?')) {
                e.preventDefault;
                const res = await approveRequest();
                console.log(res);
                };
              }
            }
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default ApproveRequest;
