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
import StripeCheckout from 'react-stripe-checkout';

const BANK_CREATE_MUTATION = gql`
  mutation updateBankInfo($bankToken: String!) {
    updateBankInfo(bankToken: $bankToken) {
      id
      accId
    }
  }
`;

class CreateBankInfo extends Component {

  state = {
    currency: 'usd',
  };

  handleUserChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
    this.setState({ name: nameVal.value, lastName: lastName.value, type: 'individual' });
  };

  updateBankInfo = async (e, updateStripeAccountMutation) => {
    e.preventDefault();
    console.log(this.state);
    const res = await updateStripeAccountMutation({
      variables: {
        ...this.state,
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
            <h2>Bank Details</h2>
              <Mutation
                mutation={ BANK_CREATE_MUTATION }
                variables={{
                  ...this.state,
                  userId: this.props.id,
                }}
              >
                {(createBankInfo, { loading, error }) => (
                  <Form className="accountCreate" onSubmit={ async e => {
                    console.log(this.state);
                    await this.createBankInfo(e, createBankInfo);
                  }}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <StripeCheckout
                        name="Scratcher"
                        description="Put card info in to recieve payouts"
                        panelLabel="Create Card"
                        stripeKey="pk_test_K3j8JU1o7WrtlpA5zY8bavrR"
                        currency="USD"
                        email={me.email}
                        token={ res => this.setState({ bankToken: res.id }) }
                      >
                        Card Info
                      </StripeCheckout>
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
