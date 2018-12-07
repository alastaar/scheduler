import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import { SINGLE_ITEM_QUERY } from './UpdateItem';

const CREATE_REQUEST_MUTATION = gql`
  mutation CREATE_REQUEST_MUTATION(
    $name: String!
    $email: String!
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
      name: $name
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

class RequestArtist extends Component {
  state = {
    name: this.props.name,
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
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
    this.setState({ approved: 'no' });
    console.log(this.props);
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
    return(
            <Mutation mutation={CREATE_REQUEST_MUTATION} variables={this.state}>
              {(createRequest, { loading, error }) => (
                <Form onSubmit={ async e => {
                    e.preventDefault;
                    const res = await createRequest();
                    console.log(res);
                  }}
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                      <h2>{ this.props.name }</h2>
                      <h2>{ this.props.email }</h2>
                      <h2>{ this.props.price }</h2>
                    <label htmlFor="dateOne">
                      Date
                      <input
                        type="text"
                        id="dateOne"
                        name="dateOne"
                        placeholder="dateOne"
                        required
                        defaultValue={ this.state.dateOne }
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="timeOne">
                      Time
                      <input
                        type="text"
                        id="timeOne"
                        name="timeOne"
                        placeholder="timeOne"
                        required
                        defaultValue={ this.state.timeOne }
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="details">
                      Details
                      <input
                        type="text"
                        id="details"
                        name="details"
                        placeholder="details"
                        required
                        defaultValue={ this.state.details }
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="referenceImage">
                      Image
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
