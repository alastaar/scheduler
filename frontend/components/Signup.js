import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $lastName: String!, $password: String!, $artist: String, $permissions: [Permission]) {
    signup(email: $email, name: $name, lastName: $lastName, password: $password, artist: $artist, permissions: $permissions) {
      id
      email
      name
      lastName
      artist
      permissions
    }
  }
`;

class Signup extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    artist: '',
    permissions: [],
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', lastName: '', email: '', password: '', artist: '' });
              Router.push({
                pathname: '/me',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign Up for An Account</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="name">
                First Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  value={this.state.lastName}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <p>By joining, you agree to Palazar’s <a href="/terms">Terms of Services</a> as well as to receive occasional emails from us.</p>
              <label htmlFor="artist">
                <button type="submit" name="artist" value="yes" onClick={this.saveToState}>Service Sign Up!</button>
              </label>
              <label htmlFor="artist">
                <button type="submit" name="artist" value="no" onClick={this.saveToState}>Customer Sign Up!</button>
              </label>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
export { SIGNUP_MUTATION };
