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
import formatMoney from '../lib/formatMoney';

const UPDATE_USER_MUTATION = gql`
  mutation updateUserInfo($name: String, $lastName: String, $email: String, $instagramHandle: String, $shop: String, $profileImage: String, $image: String, $price: Int, $bio: String, $timeDetails: String, $userId: ID!) {
    updateUserInfo(name: $name, lastName: $lastName, email: $email, instagramHandle: $instagramHandle, shop: $shop, profileImage: $profileImage, image: $image, price: $price, bio: $bio, timeDetails: $timeDetails, userId: $userId) {
      id
      name
      lastName
      email
      instagramHandle
      shop
      profileImage
      image
      price
      bio
      timeDetails
    }
  }
`;

class UserDetailsUpdate extends Component  {
  state = {
    imageDone: true,
  };
  handleUserChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? (parseFloat(value) * 100) : value;
    this.setState({ [name]: val });
    this.setState({ name: nameVal.value, lastName: lastName.value, email: email.value });
  };

  divideByHundred = value => {
    const newVal = value/100;
    return newVal;
  }

  updateUserInfo = async (e, updateUserInfoMutation) => {
    e.preventDefault();
    if(this.state.imageDone == true){
      const res = await updateUserInfoMutation({
        variables: {
          ...this.state,
        },
      });
    } else {
      alert("Image has not uploaded yet. Please try resubmitting.")
    }
  };

  uploadFile = async e => {
    this.setState({
      imageDone: false,
    });
    console.log('uploading file ..... ');
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const res = await fetch('https://api.cloudinary.com/v1_1/a1995/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    this.setState({
      profileImage: file.secure_url,
      image: file.eager[0].secure_url,
      imageDone: true,
    });
  }

  render() {
    return (
      <>
      <User>
        {({ data: { me } }) => (
          <>
            <h2>Account Details</h2>
              <Mutation
                mutation={UPDATE_USER_MUTATION}
                variables={{
                  ...this.state,
                  userId: this.props.id,
                }}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              >
                {(updateUserInfo, { loading, error }) => (
                  <Form onSubmit={e => {
                    this.updateUserInfo(e, updateUserInfo);
                    Router.push({
                      pathname: '/me',
                    });
                  }}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="name">
                        First Name
                        <input
                          type="text"
                          id="nameVal"
                          name="nameVal"
                          placeholder=""
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
                          placeholder=""
                          required
                          defaultValue={me.lastName}
                          onChange={this.handleUserChange}
                        />
                      </label>

                      <label htmlFor="email">
                        Email
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          required
                          defaultValue={me.email}
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label htmlFor="price">
                        Price for booking $$
                        <input
                          type="number"
                          min="0"
                          step="1"
                          data-number-to-fixed="2"
                          data-number-stepfactor="100"
                          id="price"
                          name="price"
                          placeholder=""
                          required
                          defaultValue={ this.divideByHundred(me.price) }
                          onChange={this.handleUserChange}
                        />
                      </label>
                      <label htmlFor="bio">
                        Bio
                        <textarea
                          id="bio"
                          name="bio"
                          placeholder="Enter a bio"
                          defaultValue={me.bio}
                          onChange={this.handleUserChange}
                        />
                      </label>

                      <label htmlFor="instagramHandle">
                        Handle
                        <input
                          type="text"
                          id="instagramHandle"
                          name="instagramHandle"
                          placeholder=""

                          defaultValue={me.instagramHandle}
                          onChange={this.handleUserChange}
                        />
                      </label>

                      <label htmlFor="shop">
                        Shop
                        <input
                        type="text"
                          id="shop"
                          name="shop"
                          placeholder=""
                          defaultValue={me.shop}
                          onChange={this.handleUserChange}
                        />
                      </label>

                      <label htmlFor="profileImage">
                        Profile Image
                        <input
                          type="file"
                          id="profileImage"
                          name="profileImage"
                          placeholder="Upload a Profile image"
                          onChange={ this.uploadFile }
                        />
                        { this.state.image && <img src={ this.state.image } alt="upload preview" /> }
                        <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
                      </label>
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


export default UserDetailsUpdate;
