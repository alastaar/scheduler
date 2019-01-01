import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';

class RequestsConfirmed extends Component {
  static propTypes = {
    request: PropTypes.object.isRequired,
  };

  render() {
    const { request } = this.props;
    console.log(request);
    return (
      <ItemStyles>
        <>
          { request.referenceImage && <img src={ request.referenceImage } alt={ request.title } />}
            <Title>

              { request.details }

             </Title>
             <div className="buttonList">
             </div>
          </>
      </ItemStyles>
    );
  }
}

export default RequestsConfirmed;
