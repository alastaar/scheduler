import React, { Component } from 'react';
import Link from 'next/link';
import User from './User';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Table from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';
import { prodStripe, devStripe } from '../config';

const ACCOUNT_CREATION_MUTATION = gql`
  mutation createStripeAccount($name: String, $lastName: String, $country: String, $type: String, $addressCity: String, $addressLineOne: String, $addressPostalCode: String, $addressState: String, $dobDay: String, $dobMonth: String, $dobYear: String, $ssnLastFour: String, $userId: ID!, $stripeToken: String!) {
    createStripeAccount(name: $name, lastName: $lastName, country : $country, type : $type, addressCity : $addressCity,  addressLineOne : $addressLineOne, addressPostalCode : $addressPostalCode, addressState : $addressState, dobDay : $dobDay, dobMonth : $dobMonth, dobYear : $dobYear, ssnLastFour : $ssnLastFour, userId : $userId, stripeToken: $stripeToken) {
      id
      name
      lastName
      country
      type
      addressCity
      addressLineOne
      addressPostalCode
      addressState
      dobDay
      dobMonth
      dobYear
      accId
      ssnLastFour
    }
  }
`;

class StripeAccountCreation extends Component {

  state = {

  };

  handleUserChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
    this.setState({ name: nameVal.value, lastName: lastName.value, type: 'individual' });
  };

  createStripeAccount = async (e, createStripeAccountMutation) => {
    e.preventDefault();
    const res = await createStripeAccountMutation({
      variables: {
        ...this.state,
      },
    });
  };



  handleForm = async e => {
    e.preventDefault();
    const token = process.env.NODE_ENV === 'development' ? devStripe : prodStripe;
    const stripe = Stripe(token);
    const myForm = document.querySelector('.my-form')

    const res = await stripe.createToken('account', {
      legal_entity: {
        first_name: document.querySelector('#nameVal').value,
        last_name: document.querySelector('#lastName').value,
        ssn_last_4: document.querySelector('#ssnLastFour').value,
        type: 'individual',
        dob: {
          day: document.querySelector('#dobDay').value,
          month: document.querySelector('#dobMonth').value,
          year: document.querySelector('#dobYear').value,
        },
        address: {
          line1: document.querySelector('#addressLineOne').value,
          city: document.querySelector('#addressCity').value,
          state: document.querySelector('#addressState').value,
          postal_code: document.querySelector('#addressPostalCode').value,
        },
      },
      tos_shown_and_accepted: true,
    }).catch(err => {
      alert(err.message);
    });

    if (res.token) {
      this.setState({ stripeToken: res.token.id });
    }
  };

  render() {
    return (
      <>
      <User>
        {({ data: { me } }) => (
          <>
            <h2>Account Details</h2>
              <Mutation
                mutation={ ACCOUNT_CREATION_MUTATION }
                variables={{
                  ...this.state,
                  userId: this.props.id,
                }}
              >
                {(createStripeAccount, { loading, error }) => (
                  <Form className="accountCreation" onSubmit={ async e => {
                    await this.handleForm(e);
                    await this.createStripeAccount(e, createStripeAccount);
                    Router.push({
                      pathname: '/me',
                    });
                  }}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <input type="hidden" name="token" id="token" />
                      <label htmlFor="nameVal">
                        First Name
                        <input
                          type="text"
                          id="nameVal"
                          name="nameVal"
                          placeholder="nameVal"
                          required
                          defaultValue={me.name}
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label htmlFor="lastName">
                        Last Name
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="lastName"
                          required
                          defaultValue={me.lastName}
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label>
                        <span>Date of Birth Day</span>
                        <input
                          type="text"
                          id="dobDay"
                          name="dobDay"
                          placeholder="dobDay"
                          required
                          defaultValue={me.dobDay}
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label>
                        <span>Date of Birth Month</span>
                        <input
                          type="text"
                          id="dobMonth"
                          name="dobMonth"
                          placeholder="dobMonth"
                          required
                          defaultValue={me.dobMonth}
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label>
                        <span>Date of Birth Year</span>
                        <input
                          type="text"
                          id="dobYear"
                          name="dobYear"
                          placeholder="dobYear"
                          required
                          defaultValue={me.dobYear}
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label>
                        <span>Social Security (last 4 digits)</span>
                        <input
                          type="text"
                          id="ssnLastFour"
                          name="ssnLastFour"
                          placeholder="ssnLastFour"
                          required
                          defaultValue={me.ssnLastFour}
                          onChange={this.handleUserChange}
                        />
                      </label>

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
                      <p>By clicking Save, you agree to <a href="our-terms">our terms</a> and the <a href="https://stripe.com/us/connect-account/legal">Stripe Connected Account Agreement</a>.</p>
                      <button type="submit">Sav{loading ? 'ing' : 'e'}</button>
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

export default StripeAccountCreation;
