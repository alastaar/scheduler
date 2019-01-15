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
import User from './User';

class UserBlock extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string,
      shop: PropTypes.string,
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
          { user.image &&
          <Link href={{
            pathname: '/artist',
            query: { id: user.id },
         }}>
               <img src={ user.image } alt={ user.name } />
            </Link>
          }
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
             <h2> { formatMoney(user.price) } per booking </h2>
             <p> Handle: { user.instagramHandle } </p><p> Shop: { user.shop } </p>
             <User>
               {({ data: { me } }) => (
                 <>
                   { me && (
             <div className="buttonList">
                <Link href={{
                  pathname: '/request',
                  query: { id: user.id, name: user.name, lastName: user.lastName, email: user.email, price: user.price },
                }}>
                  <a>
                    Request Artist
                  </a>
                </Link>
               </div>
               )}
               </>
             )}
           </User>
             </>
           }
        </ItemStyles>
      )}
    </Query>
    );
  }
}

export default UserBlock;
