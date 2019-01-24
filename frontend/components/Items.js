import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import { perPage } from '../config';
import { ALL_USERS_QUERY } from './Permissions';
import UserBlock from './UserBlock';
import Search from './Search';
import { prodStripe, devStripe } from '../config';



const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width = ${ props => props.theme.maxWidth }
  margin: 0 auto;
  @media ( max-width: 720px) {
    display: block;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const SearchField = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border: 1px solid ${props => props.theme.lightgrey};
  margin-bottom: 50px;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <SearchField>
          <Search />
        </SearchField>
        <Query query={ ALL_USERS_QUERY } variables={{
          skip: this.props.page * perPage - perPage,
        }}>
          { ({ data, error, loading }) => {
            if ( loading ) return <p> ... loading </p>;
            if ( error ) return <p> ERROR: { error.message }</p>;
            return <ItemsList>
              { data.users.filter(user => user.artist == 'yes' && user.stripeToken != null).map(user => <UserBlock user={user} key={ user.id }/>) }
            </ItemsList>;
          } }
        </Query>
      </Center>
    )
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
