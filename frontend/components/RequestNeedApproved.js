import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import RequestStyles from './styles/RequestStyles';
import AddToCart from './AddToCart';
import Pay from './Pay';
import DeleteRequest from './DeleteRequest';
import Chat from './Chat';
import Error from './ErrorMessage';

class RequestNeedApproved extends Component {
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
          <Link href={{
            pathname: '/request-item',
            query: { id: request.id },
         }}>
            <a>
              { request.user.name }
            </a>
          </Link>
          <Link href={{
            pathname: '/request-item',
            query: { id: request.id },
         }}>
            <a>
              { request.user.email }
            </a>
          </Link>
            <Link href={{
              pathname: '/request',
              query: { id: request.id },
           }}>
              <a>
                { request.details }
              </a>
            </Link>
           <div className="buttonList">
              <AddToCart id={request.id} />
              <Pay id={request.id} />
              <DeleteRequest id={request.id}>Remove Request</DeleteRequest>
              <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
           </div>
          </>
        }
      </ItemStyles>
    );
  }
}

export default RequestNeedApproved;
