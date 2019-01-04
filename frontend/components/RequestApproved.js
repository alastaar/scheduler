import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import RequestStyles from './styles/RequestStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';

class RequestsApproved extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
  };

  convertTime = (time24) => {
    var tmpArr = time24.split(':'), time12;
    if(+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    }
    else {
      if(+tmpArr[0] == 0) {
        time12 = '12:' + tmpArr[1] + ' am';
      }
      else {
        if(+tmpArr[0] > 12) {
          time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' pm';
        }
        else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' am';
        }
      }
    }
    return time12;
  }

  render() {
    const { request } = this.props;
    return(
      <RequestStyles>
      { request.approved == 'yes' &&
      <>
          { request.referenceImage && <img src={ request.referenceImage } alt={ request.title } />}
          <Link href={{
            pathname: '/request-item',
            query: { id: request.id },
         }}>
            <a>
              { request.name } { request.lastName }
            </a>
          </Link>
          <Link href={{
            pathname: '/request-item',
            query: { id: request.id },
         }}>
            <a>
              { request.email }
            </a>
          </Link>
            <Link href={{
              pathname: '/request-item',
              query: { id: request.id },
           }}>
              <a>
                { request.details }
              </a>
            </Link>
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
           </div>
          </>
        }
      </RequestStyles>
    );
  }
}

export default RequestsApproved;
