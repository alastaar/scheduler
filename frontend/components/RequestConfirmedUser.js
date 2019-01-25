import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import Chat from './Chat';

class RequestsConfirmedUser extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
  };

  render() {
    const { request } = this.props;
    return (
      <ItemStyles>
        <>
          { request.referenceImage && <img src={ request.referenceImage } alt={ request.title } />}
            <Title>
              { request.name }
             </Title>
             <p>{ request.email }</p>
             <p>{ request.details }</p>
             <div className="buttonList">
               <Chat vendor={request.requestedId} client={request.user.id}>Chat</Chat>
             </div>
          </>
      </ItemStyles>
    );
  }
}

export default RequestsConfirmedUser;
