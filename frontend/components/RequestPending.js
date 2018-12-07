import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import ApproveRequest from './ApproveRequest';

class RequestsPending extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
  };

  render() {
    const { request } = this.props;
    console.log(request);
    return(
      <ItemStyles>
      { request.approved == 'no' &&
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
           <p> { request.user.name } </p>
           <div className="buttonList">
              <ApproveRequest id={request.id}>Approve</ApproveRequest>
              <Link href={{
                pathname: '/request',
                query: { id: request.id, title: request.title, description: request.description, price: request.price },
              }}>
                <a>
                  Reject Request
                </a>
              </Link>
           </div>
          </>
        }
      </ItemStyles>
    );
  }
}

export default RequestsPending;
