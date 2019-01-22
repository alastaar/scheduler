import React from 'react';
import Downshift, { resetIdCounter } from 'downshift'
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ARTISTS_QUERY = gql`
  query SEARCH_ARTISTS_QUERY($searchTerm: String!) {
    users(where:{
      OR: [
        { name_contains: $searchTerm },
        { lastName_contains: $searchTerm },
        { shop_contains: $searchTerm },
        { instagramHandle_contains: $searchTerm }
      ]
    }){
      id
      image
      name
      lastName
      shop
      instagramHandle
    }
  }
`;

function routeToUser(item) {
  Router.push({
    pathname: '/artist',
    query: { id: item.id },
  });
}


class AutoComplete extends React.Component {
  state = {
    users: [],
    loading: false,
  }

  onChange = debounce(async (e, client) => {
    this.setState({ loading: true });
    const res = await client.query({
      query: SEARCH_ARTISTS_QUERY,
      variables: { searchTerm: e.target.value }
    });
    this.setState({
      users: res.data.users,
      loading: false,
    });
    console.log(res);
  }, 350);

  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift onChange={routeToUser} itemToString={ item => (item === null ? '' : item.name + ' ' + item.lastName)}>
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (

            <div>
              <ApolloConsumer>
                {(client) => (
                  <input
                    { ...getInputProps({
                      type: 'search',
                      placeholder: "Search by Artist, Shop, InstagramHandle",
                      id: "search",
                      className: this.state.loading ? 'loading' : '',
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen &&(
                <DropDown>
                  {this.state.users.map( (item, index) =>
                    <DropDownItem
                    {...getItemProps({ item })}
                    key={ item.id } highlighted={ index === highlightedIndex }>
                      <img width="50" src={ item.image } alt='' />
                      { item.name } { item.lastName } | Handle: { item.instagramHandle }
                    </DropDownItem>
                  )}
                  {!this.state.users.length && !this.state.loading && (
                    <DropDownItem>Nothing found for { inputValue }</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
