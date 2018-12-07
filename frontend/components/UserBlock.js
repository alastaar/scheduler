import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import { ALL_USERS_QUERY } from './Permissions';

class UserBlock extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      email: PropTypes.string,
      price: PropTypes.integer,
      instagramHandle: PropTypes.string,
      permissions: PropTypes.array,
    }).isRequired,
  };

  render() {
    const { user } = this.props;
    console.log(this.props);
    return(
      <Query query={ALL_USERS_QUERY}>
        {({ data, loading, error }) => (
          <ItemStyles>
          { user.artist == 'yes' &&
          <>
            { user.image && <img src={ user.image } alt={ user.name } />}
            <Title>
              <Link href={{
                pathname: '/artist',
                query: { id: user.id },
             }}>
                <a>
                  { user.name }
                </a>
              </Link>
             </Title>
             <p> { user.email } </p>
             <p> { user.price } </p>
             <p> { user.instagramHandle } </p>
             <div className="buttonList">
                <Link href={{
                  pathname: '/request',
                  query: { id: user.id, name: user.name, email: user.email, price: user.price },
                }}>
                  <a>
                    Request Artist
                  </a>
                </Link>
               </div>
             </>
           }
        </ItemStyles>
      )}
    </Query>
    );
  }
}

export default UserBlock;
