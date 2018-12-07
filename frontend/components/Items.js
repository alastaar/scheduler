import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import { perPage } from '../config';
import { ALL_USERS_QUERY } from './Permissions';
import UserBlock from './UserBlock';

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width = ${ props => props.theme.maxWidth }
  margin: 0 auto;
`;

const Center = styled.div`
  text-align: center;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Pagination page={ this.props.page } />
        <Query query={ ALL_USERS_QUERY } variables={{
          skip: this.props.page * perPage - perPage,
        }}>
          { ({ data, error, loading }) => {
            if ( loading ) return <p> ... loading </p>;
            if ( error ) return <p> ERROR: { error.message }</p>;
            return <ItemsList>
              { data.users.map(user => <UserBlock user={user} key={ user.id }/>) }
            </ItemsList>;
          } }
        </Query>
        <Pagination page={ this.props.page } />
      </Center>
    )
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
