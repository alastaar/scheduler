import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import RequestStyles from './styles/RequestStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import Chat from './Chat';
import User from './User';
import Error from './ErrorMessage';

class ChatMessages extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    yes: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props.message;
    return(
      <User>
        {({ data: { me } }) => (
          <>
            { me && (
                <RequestStyles style={{background: this.props.yes === "no" ? "#bad4ff" : "white"}, {textAlign: this.props.yes === "no" ? "right" : "left"}}>
                  <p>{message}</p>
                </RequestStyles>
            )}
          </>
        )}
      </User>
    );
  }
}

export default ChatMessages;
