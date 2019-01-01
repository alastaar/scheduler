import React, { Component } from 'react';
import Link from 'next/link';
import User from './User';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Form from './styles/Form';
import Table from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';



const BANK_UPDATE_MUTATION = gql`
  mutation updateBankInfo($bankToken: String!) {
    updateBankInfo(bankToken: $bankToken) {
      id
      accId
    }
  }
`;

const StripedElement = styled.div`
.StripeElement {
  background-color: white;
  height: 40px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
`;



class UpdateBankInfo extends Component {

  componentDidMount(){
    this.stripe = Stripe('pk_test_K3j8JU1o7WrtlpA5zY8bavrR');

    // Create an instance of Elements.
    this.elements = this.stripe.elements();

    // Custom styling can be passed to options when creating an Element.
    // (Note that this demo uses a wider set of styles than the guide below.)
     this.style = {
      base: {
        color: '#32325d',
        lineHeight: '18px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    // Create an instance of the card Element.
     this.card = this.elements.create('card', {style: this.style});

    // Add an instance of the card Element into the `card-element` <div>.
      // Custom styling can be passed to options when creating an Element.
    this.card.mount('#card-element');
  }

  // Create a Stripe client
  state = {
    currency: 'usd',
    token: '',
  };

  handleUserChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
    this.setState({ name: nameVal.value, lastName: lastName.value, type: 'individual' });
  };

  updateBankInfo = async (e, updateStripeAccountMutation) => {
    e.preventDefault();
    const {token, error} = await this.stripe.createToken(this.card, {
      currency: 'usd',
    });

    console.log(token);

    if (error) {
      // Inform the customer that there was an error.
      const errorElement = document.getElementById('card-errors');
      errorElement.textContent = error.message;
    }

    this.state.token= token.id;

    const res = await updateStripeAccountMutation({
      variables: {
        bankToken: token.id,
      },
    });
    console.log("going to the backend");
  };


  render() {
    return (
      <>
      <User>
        {({ data: { me } }) => (
          <>
            <h2>Card Details</h2>
              <Mutation
                mutation={ BANK_UPDATE_MUTATION }
                variables={{
                  bankToken: this.state.token
                }}
              >
                {(updateBankInfo, { loading, error }) => (
                  <Form className="accountUpdate" onSubmit={ async e => {
                    console.log(this.state);
                    await this.updateBankInfo(e, updateBankInfo);
                  }}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <StripedElement>
                        <div className="form-row">
                            <label htmlFor="card-element">
                              Debit card
                            </label>
                            <div id="card-element">
                            </div>

                            <div id="card-errors" role="alert"></div>
                          </div>
                        </StripedElement>
                      <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
                    </fieldset>
                  </Form>
                )}
              </Mutation>
            { me && (
              <>

              </>
            )}
            { !me && (
              <>
                <h2>Sorry this is not your account please move along </h2>
              </>
            )}
          </>
        )}

      </User>
      </>
    );
  }
}

export default UpdateBankInfo;
