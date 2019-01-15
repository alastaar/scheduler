import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import moment from "moment";
import styled from 'styled-components';
import Router from 'next/router';
import { SINGLE_ITEM_QUERY } from './UpdateItem';

const CREATE_REQUEST_MUTATION = gql`
  mutation CREATE_REQUEST_MUTATION(
    $requestedId: String
    $name: String
    $lastName: String
    $email: String
    $price: Int
    $dateOne: String!
    $timeOne: String!
    $dateTwo: String
    $timeTwo: String
    $dateThree: String
    $timeThree: String
    $details: String
    $referenceImage: String
    $approved: String
  ) {
    createRequest(
      requestedId: $requestedId,
      name: $name
      lastName: $lastName
      email: $email
      price: $price
      dateOne: $dateOne
      timeOne: $timeOne
      dateTwo: $dateTwo
      timeTwo: $timeTwo
      dateThree: $dateThree
      timeThree: $timeThree
      details: $details
      referenceImage: $referenceImage
      approved: $approved
    ){
      id
    }
  }
`;

const TimeDate = styled.div`
  display: inline-block;
  border-bottom: 1px solid grey;
  margin-bottom: 25px;
  width: 100%;
  input {
    display: inline-block;
  }
  label {
    display: inherit;
    width: 300px;
    margin-bottom: 25px;
  }
`;

class RequestArtist extends Component {
  state = {
    requestedId: this.props.id,
    name: this.props.name,
    lastName: this.props.lastName,
    email: this.props.email,
    price: this.props.price,
    dateOne: '',
    timeOne: '',
    dateTwo: '',
    timeTwo: '',
    dateThree: '',
    timeThree: '',
    referenceImage: '',
    approved: '',
    currentDate: new Date(),
  };

  // blockDates = e => {
  //
  //   var array = ["2019-01-16","2013-03-15","2013-03-16"]
  //   var dateUno = document.querySelector('#dateOne').value;
  //   console.log(dateUno);
  //
  //
  // }

  convertDate = (date) => {
    const complex = moment.utc(date).toDate()
    const almostDate = moment(complex).add(1, 'd').toDate();
    var newDate = new Date(almostDate),
        month = ("0" + (newDate.getMonth()+1)).slice(-2),
        day  = ("0" + newDate.getDate()).slice(-2);
    return [ newDate.getFullYear(), month, day ].join("-");

  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
    this.setState({ approved: 'no' });
    console.log(this.props);
  };

  createRequest = async (e, createRequestMutation) => {
    e.preventDefault();
    console.log(this.state);
    const res = await createRequestMutation({
      variables: {
        ...this.state,
      },
    });
    console.log("going to the backend");
  };


  uploadFile = async e => {
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
    console.log(file);
    this.setState({
      referenceImage: file.secure_url,
    });
  }


  render() {
    console.log(this.state.currentDate);
    return(
            <Mutation
              mutation={CREATE_REQUEST_MUTATION}
              variables={this.state}
            >
              {(createRequest, { loading, error }) => (
                <Form onSubmit={ async e => {
                    e.preventDefault;
                    await this.createRequest(e, createRequest);
                    Router.push({
                      pathname: '/ur-request',
                    });
                  }}
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                      <h2>Requesting { this.props.name } { this.props.lastName }</h2>
                      <h2>{ formatMoney(this.props.price) } to book</h2>
                    <p>First Available</p>
                    <TimeDate>
                      <label htmlFor="dateOne">
                        Date: &nbsp;
                        <input
                          type="date"
                          id="dateOne"
                          name="dateOne"
                          placeholder="dateOne"
                          style= {{ width: 200 }}
                          required
                          defaultValue={ this.state.dateOne }
                          onChange={this.handleChange}
                          min = { this.convertDate(this.state.currentDate) }
                        />
                      </label>

                      <label htmlFor="timeOne">
                        Time: &nbsp;
                        <input
                          type="time"
                          id="timeOne"
                          name="timeOne"
                          placeholder="timeOne"
                          style= {{ width: 200 }}
                          required
                          defaultValue={ this.state.timeOne }
                          onChange={this.handleChange}
                        />
                      </label>
                    </TimeDate>
                    <p>Second Available</p>
                    <TimeDate>
                      <label htmlFor="dateTwo">
                        Date: &nbsp;
                        <input
                          type="date"
                          id="dateTwo"
                          name="dateTwo"
                          placeholder="dateTwo"
                          style= {{ width: 200 }}
                          required
                          defaultValue={ this.state.dateTwo }
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="timeTwo">
                        Time: &nbsp;
                        <input
                          type="time"
                          id="timeTwo"
                          name="timeTwo"
                          placeholder="timeTwo"
                          style= {{ width: 200 }}
                          required
                          defaultValue={ this.state.timeTwo }
                          onChange={this.handleChange}
                        />
                      </label>
                    </TimeDate>
                    <p>Third Available</p>
                    <TimeDate>
                      <label htmlFor="dateThree">
                        Date: &nbsp;
                        <input
                          type="date"
                          id="dateThree"
                          name="dateThree"
                          style= {{ width: 200 }}
                          placeholder="dateThree"
                          required
                          defaultValue={ this.state.dateThree }
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="timeThree">
                        Time: &nbsp;
                        <input
                          type="time"
                          id="timeThree"
                          name="timeThree"
                          style= {{ width: 200 }}
                          placeholder="timeThree"
                          required
                          defaultValue={ this.state.timeThree }
                          onChange={this.handleChange}
                        />
                      </label>
                    </TimeDate>

                    <label htmlFor="details">
                      Details
                      <textarea
                        type="text"
                        id="details"
                        name="details"
                        placeholder="Details, be specific!"
                        required
                        defaultValue={ this.state.details }
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="referenceImage">
                      Reference Image
                      <input type="file" id="referenceImage" name="referenceImage" placeholder="Upload an image" onChange={ this.uploadFile }/>
                      { this.state.image && <img src={ this.state.image } alt="upload preview" /> }
                    </label>

                    <button type="submit">Submi{loading ? 'ing' : 't'} Appointment Request</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
    );
  }
}

export default RequestArtist;
export { CREATE_REQUEST_MUTATION };
