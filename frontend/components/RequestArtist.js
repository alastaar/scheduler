import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import DateStyles from './styles/DateStyles';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import moment from "moment";
import styled from 'styled-components';
import Router from 'next/router';
import { SINGLE_ITEM_QUERY } from './UpdateItem';
import DatePicker from "react-datepicker";

const CREATE_REQUEST_MUTATION = gql`
  mutation CREATE_REQUEST_MUTATION(
    $requestedId: String
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

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!){
    user(where: { id: $id }) {
      id
      email
      name
      lastName
      instagramHandle
      shop
      price
      profileImage
      blackOut
      blackOutRanges {
        id
        weekday
        begin
        end
      }
    }
  }
`;

const REQUESTING_USER_QUERY = gql`
  query GETTING_REQUESTED($id: ID!) {
    gettingRequested(where: { id: $id }) {
      id
      email
      name
      lastName
      instagramHandle
      shop
      price
      profileImage
      blackOut
      blackOutRanges {
        id
        weekday
        begin
        end
      }
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
    referenceImage: '',
    approved: 'no',
    imageDone: true,
  };

  currentDate = new Date();


  gatherDates = (singleDays, extendedDays) => {
    var blockDays = singleDays;
    var tempArray = new Array();
    var finalArray = new Array();
    var twoYears = new Date();
    var closestDay = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var index = 0;
    for(var i=0; i < extendedDays.length; i++) {
      if(extendedDays[i].weekday != "") {
        var dayofweek = extendedDays[i].weekday;
        for(var j=0; j < days.length; j++) {
          if(days[j] == dayofweek) {
            index = j;
          }
        }
        closestDay.setDate(closestDay.getDate() + (index + 7 - closestDay.getDay()) % 7);
        twoYears = moment(closestDay).add(365, 'days');
        while(closestDay <= twoYears) {
          tempArray.push(moment(closestDay).format('YYYY-MM-DD'));
          closestDay = moment(closestDay).add(7, 'days');
        }
      } else if(extendedDays[i].begin != "" && extendedDays[i].end != "" ) {
        var beginDate = moment(extendedDays[i].begin);
        var endDate = moment(extendedDays[i].end);
        while (beginDate <= endDate) {
            tempArray.push(moment(beginDate).format('YYYY-MM-DD'));
            beginDate = moment(beginDate).add(1, 'days');
        }
      } else {

      }
    }
    finalArray = blockDays.concat(tempArray);
    return finalArray;
  }

  convertDate = (date) => {
    const complex = moment.utc(date).toDate()
    const almostDate = moment(complex).add(1, 'd').toDate();
    var newDate = new Date(almostDate),
        month = ("0" + (newDate.getMonth()+1)).slice(-2),
        day  = ("0" + newDate.getDate()).slice(-2);
    return [ newDate.getFullYear(), month, day ].join("-");

  }

  convertDateSubmit = (date) => {
    const complex = moment.utc(date).toDate()
    var newDate = new Date(complex),
        month = ("0" + (newDate.getMonth()+1)).slice(-2),
        day  = ("0" + newDate.getDate()).slice(-2);
    return [ newDate.getFullYear(), month, day ].join("-");

  }

  convertTimeSubmit = (date) => {
    var complex = date.toTimeString().split(' ')[0];
    return complex;
  }

  handleInfoChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? (parseFloat(value) * 100) : value;
    this.setState({ [name]: val });
  };

  handleChangeDateOne = e => {
    // var complex = this.convertDateSubmit(e);
    this.setState({dateOne: e})
  };

  handleChangeTimeOne = e => {
    // var complex = e.toTimeString().split(' ')[0];
    this.setState({timeOne: e})
  }

  handleChangeDateTwo = e => {
    // var complex = this.convertDateSubmit(e);
    this.setState({dateTwo: e})
  };

  handleChangeTimeTwo = e => {
    // var complex = e.toTimeString().split(' ')[0];
    this.setState({timeTwo: e})
  }

  handleChangeDateThree = e => {
    // var complex = this.convertDateSubmit(e);
    this.setState({dateThree: e})
  };

  handleChangeTimeThree = e => {
    // var complex = e.toTimeString().split(' ')[0];
    this.setState({timeThree: e})
  }

  createRequest = async (e, createRequestMutation) => {
    e.preventDefault();
    const complexOne = await this.convertDateSubmit(this.state.dateOne);
    const complexTwo = await this.convertDateSubmit(this.state.dateTwo);
    const complexThree = await this.convertDateSubmit(this.state.dateThree);
    const complexFour = await this.convertTimeSubmit(this.state.timeOne);
    const complexFive = await this.convertTimeSubmit(this.state.timeTwo);
    const complexSix = await this.convertTimeSubmit(this.state.timeThree);
    if(this.state.imageDone == true){
      const res = await createRequestMutation({
        variables: {
          ...this.state,
          dateOne: complexOne,
          dateTwo: complexTwo,
          dateThree: complexThree,
          timeOne: complexFour,
          timeTwo: complexFive,
          timeThree: complexSix,
        },
      });
    } else {
      alert("Image has not uploaded yet. Please try resubmitting.")
      this.setState({
        imageDone: false,
      });
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
    if(file) {
      this.setState({
        referenceImage: file.secure_url,
        imageDone: true,
      });
    }
  }


  render() {

    return(
      <Query query={ SINGLE_USER_QUERY } variables={{
        id: this.props.id,
      }}
      >
        {({ error, loading, data }) => {
          if(error) return <Error errror={ error } />;
          if(loading) return <p>loading..</p>;
          if(!data.user) return <p>No User found </p>
          const user = data.user;
            return (
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
                    <DateStyles>
                    <fieldset disabled={loading} aria-busy={loading}>
                        <h2>Requesting { user.name }</h2>
                        <h2>{ formatMoney(user.price) } to book</h2>
                      <p>First Available</p>
                      <TimeDate>
                        <label htmlFor="dateOne">
                          Date: &nbsp;
                          <DatePicker
                            type="date"
                            id="dateOne"
                            name="dateOne"
                            placeholder="dateOne"
                            onChange={this.handleChangeDateOne}
                            minDate={this.currentDate}
                            excludeDates={this.gatherDates(user.blackOut, user.blackOutRanges.map(blackOutItem => blackOutItem ))}
                            selected={this.state.dateOne}
                          />
                        </label>
                        <label htmlFor="timeOne">
                          Time: &nbsp;
                          <DatePicker
                            type="time"
                            id="timeOne"
                            name="timeOne"
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                            timeCaption="Time"
                            onChange={this.handleChangeTimeOne}
                            selected={this.state.timeOne}
                          />
                        </label>
                      </TimeDate>
                      <p>Second Available</p>
                      <TimeDate>
                        <label htmlFor="dateTwo">
                          Date: &nbsp;
                          <DatePicker
                            type="date"
                            id="dateTwo"
                            name="dateTwo"
                            placeholder="dateTwo"
                            onChange={this.handleChangeDateTwo}
                            minDate={this.currentDate}
                            excludeDates={this.gatherDates(user.blackOut, user.blackOutRanges.map(blackOutItem => blackOutItem ))}
                            selected={this.state.dateTwo}
                          />
                        </label>

                        <label htmlFor="timeTwo">
                          Time: &nbsp;
                          <DatePicker
                            type="time"
                            id="timeTwo"
                            name="timeTwo"
                            placeholder="timeTwo"
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                            timeCaption="Time"
                            onChange={this.handleChangeTimeTwo}
                            selected={this.state.timeTwo}
                          />
                        </label>
                      </TimeDate>
                      <p>Third Available</p>
                      <TimeDate>
                        <label htmlFor="dateThree">
                          Date: &nbsp;
                          <DatePicker
                            type="date"
                            id="dateThree"
                            name="dateThree"
                            style= {{ width: 200 }}
                            placeholder="dateThree"
                            onChange={this.handleChangeDateThree}
                            minDate={this.currentDate}
                            excludeDates={this.gatherDates(user.blackOut, user.blackOutRanges.map(blackOutItem => blackOutItem ))}
                            selected={this.state.dateThree}
                          />
                        </label>
                        <label htmlFor="timeThree">
                          Time: &nbsp;
                          <DatePicker
                            type="time"
                            id="timeThree"
                            name="timeThree"
                            style= {{ width: 200 }}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                            timeCaption="Time"
                            onChange={this.handleChangeTimeThree}
                            selected={this.state.timeThree}
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
                          onChange={this.handleInfoChange}
                        />
                      </label>

                      <label htmlFor="referenceImage">
                        Reference Image
                        <input type="file" id="referenceImage" name="referenceImage" placeholder="Upload an image" onChange={ this.uploadFile }/>
                        { this.state.image && <img src={ this.state.image } alt="upload preview" /> }
                      </label>

                      <button type="submit">Submi{loading ? 'ing' : 't'} Appointment Request</button>
                    </fieldset>
                    </DateStyles>
                  </Form>
                )}
              </Mutation>
            )
          } }
        </Query>
    );
  }
}

export default RequestArtist;
export { CREATE_REQUEST_MUTATION };
