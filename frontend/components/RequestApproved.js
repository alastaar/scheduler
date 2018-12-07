import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';

class RequestsApproved extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
  };

  render() {
    const { request } = this.props;
    return(
      <ItemStyles>
      { request.approved == 'yes' &&
      <>
          { request.referenceImage && <img src={ request.referenceImage } alt={ request.title } />}
          <Title>
            <Link href={{
              pathname: '/request',
              query: { id: request.id },
           }}>
              <a>
                { request.details }
              </a>
            </Link>
           </Title>
           <p> { request.details } </p>
           <div className="buttonList">
              <Link href={{
                pathname: '/request',
                query: { id: request.id, title: request.title, description: request.description, price: request.price },
              }}>
                <a>
                  Chat
                </a>
              </Link>
              <Link href={{
                pathname: '/request',
                query: { id: request.id, title: request.title, description: request.description, price: request.price },
              }}>
                <a>
                  Cancel Request and Notify { request.user.name }
                </a>
              </Link>
              <AddToCart id={request.id} />
           </div>
          </>
        }
      </ItemStyles>
    );
  }
}

export default RequestsApproved;
