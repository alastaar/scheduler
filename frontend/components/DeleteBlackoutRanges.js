import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const DELETE_BLACK_OUT_MUTATION = gql`
  mutation deleteBlackOutRanges($id: ID!){
    deleteBlackOutRanges(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red };
    cursor: pointer;
  }
`;

class DeleteBlackoutRanges extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
  update = (cache, payload) => {
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY,
    });
    const blackOutId = payload.data.deleteBlackOutRanges.id;
    data.me.blackOutRanges = data.me.blackOutRanges.filter(blackOut =>
      blackOut.id !== blackOutId);

    cache.writeQuery({ query: CURRENT_USER_QUERY, data})

  }
  render(){
    return (
      <Mutation mutation={ DELETE_BLACK_OUT_MUTATION } variables={{id: this.props.id}} update={this.update}
        optimisticResponse={{__typename: 'Mutation', deleteBlackOutRanges: {
          __typename: 'BlackOutDates',
          id: this.props.id,
        },
      }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {
          (deleteBlackOutRanges, { loading, error }) =>
          <BigButton disabled={loading}
            onClick={() => {deleteBlackOutRanges().catch(err => alert(err.message));}}
            title="Delete Item">&times;</BigButton>
        }
      </Mutation>
    );
  }
}

export default DeleteBlackoutRanges;
