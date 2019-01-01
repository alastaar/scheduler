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
      <ItemStyles>
      { request.approved == 'no' &&
      <>
          { request.referenceImage && <img src={ request.referenceImage } alt={ request.title } />}
          <Title>
            <Link href={{
              pathname: '/request-item',
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
              <ApproveRequest id={request.id}
              dateOne={request.dateOne}
              dateTwo={request.dateTwo}
              dateThree={request.dateThree}
              timeOne={request.timeOne}
              timeTwo={request.timeTwo}
              timeThree={request.timeThree}
              >Approve</ApproveRequest>
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
