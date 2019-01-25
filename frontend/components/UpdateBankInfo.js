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
import { prodStripe, devStripe } from '../config';


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
    const token = process.env.NODE_ENV === 'development' ? devStripe : prodStripe;
    this.stripe = Stripe(token);

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
    addressLineOne: '',
    addressLineTwo: '',
    addressCity: '',
    addressState: '',
    addressCountry: '',
    addressPostalCode: '',
  };

  handleUserChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateBankInfo = async (e, updateStripeAccountMutation) => {
    e.preventDefault();
    const {token, error} = await this.stripe.createToken(this.card, {
      address_line1: this.state.addressLineOne,
      address_line2: this.state.addressLineTwo,
      address_city: this.state.addressCity,
      address_state: this.state.addressState,
      address_zip: this.state.addressPostalCode,
      address_country: this.state.addressCountry,
      currency: 'usd',
    });


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
  };


  render() {
    return (
      <>
      <User>
        {({ data: { me } }) => (
          <>
              <Mutation
                mutation={ BANK_UPDATE_MUTATION }
                variables={{
                  bankToken: this.state.token
                }}
              >
                {(updateBankInfo, { loading, error }) => (
                  <Form className="accountUpdate" onSubmit={ async e => {
                    await this.updateBankInfo(e, updateBankInfo);
                    Router.push({
                      pathname: '/me',
                    });
                  }}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <StripedElement>
                        <div className="form-row">
                            <label htmlFor="card-element">
                            </label>
                            <h2>Billing Info</h2>
                            <br></br>
                            <label>
                              <span>Street Address Line 1</span>
                              <input
                                type="text"
                                id="addressLineOne"
                                name="addressLineOne"
                                placeholder="addressLineOne"
                                required
                                defaultValue={me.addressLineOne}
                                onChange={this.handleUserChange}
                              />
                            </label>
                            <label>
                              <span>Street Address Line 2</span>
                              <input
                                type="text"
                                id="addressLineTwo"
                                name="addressLineTwo"
                                placeholder="addressLineTwo"
                                required
                                defaultValue={me.addressLineTwo}
                                onChange={this.handleUserChange}
                              />
                            </label>
                            <label>
                              <span>City</span>
                              <input
                                type="text"
                                id="addressCity"
                                name="addressCity"
                                placeholder="addressCity"
                                required
                                defaultValue={me.addressCity}
                                onChange={this.handleUserChange}
                              />
                            </label>
                            <label>
                              <span>State</span>
                              <input
                                type="text"
                                id="addressState"
                                name="addressState"
                                placeholder="addressState"
                                required
                                defaultValue={me.addressState}
                                onChange={this.handleUserChange}
                              />
                            </label>
                            <label>
                              <span>Country</span>
                              <input
                                type="text"
                                id="addressCountry"
                                name="addressCountry"
                                placeholder="addressCountry"
                                required
                                defaultValue={me.addressCountry}
                                onChange={this.handleUserChange}
                              />
                            </label>
                            <label>
                              <span>Postal Code (Zip)</span>
                              <input
                                type="text"
                                id="addressPostalCode"
                                name="addressPostalCode"
                                placeholder="addressPostalCode"
                                required
                                defaultValue={me.addressPostalCode}
                                onChange={this.handleUserChange}
                              />
                            </label>
                            <br></br>
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
