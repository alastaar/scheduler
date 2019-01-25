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

const UPDATE_REQUEST_MUTATION = gql`
  mutation UPDATE_REQUEST_MUTATION(
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
    updateRequest(
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

const REQUESTING_USER_QUERY = gql`
  query {
    gettingRequested {
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

const SINGLE_REQUEST_QUERY = gql`
  query SINGLE_REQUEST_QUERY($id: ID!){
    request(where: { id: $id }) {
      id
      requestedId
      name
      lastName
      email
      price
      referenceImage
      timeOne
      dateOne
      timeTwo
      dateTwo
      timeThree
      dateThree
      details
      approved
      rejectReason
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

class RequestArtistUpdate extends Component {
  state = {
    requestedId: this.props.id,
    referenceImage: '',
    approved: '',
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

  createRequest = async (e, updateRequestMutation) => {
    e.preventDefault();
    const complexOne = await this.convertDateSubmit(this.state.dateOne);
    const complexTwo = await this.convertDateSubmit(this.state.dateTwo);
    const complexThree = await this.convertDateSubmit(this.state.dateThree);
    const complexFour = await this.convertTimeSubmit(this.state.timeOne);
    const complexFive = await this.convertTimeSubmit(this.state.timeTwo);
    const complexSix = await this.convertTimeSubmit(this.state.timeThree);
    if(this.state.imageDone == true){
      const res = await updateRequestMutation({
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
    }
  };


  uploadFile = async e => {
    this.setState({
      imageDone: false,
    });
    console.log('uploading file ..... ');
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const res = await fetch('https://api.cloudinary.com/v1_1/a1995/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    this.setState({
      referenceImage: file.secure_url,
      imageDone: true,
    });
  }


  render() {
    return(
      <Query query={ SINGLE_REQUEST_QUERY } variables={{
          id: this.props.id,
        }}>
          { ({ data, error, loading }) => {
            if ( loading ) return <p> ... loading </p>;
            if ( error ) return <p> ERROR: { error.message }</p>;
            const request = data.request;
            return (
            <Query query={ REQUESTING_USER_QUERY } variables={{
                id: request.requestedId,
              }}>
                { ({ data, error, loading }) => {
                  if ( loading ) return <p> ... loading </p>;
                  if ( error ) return <p> ERROR: { error.message }</p>;
                  const user = data.gettingRequested;
                    return (
                      <Mutation
                        mutation={UPDATE_REQUEST_MUTATION}
                        variables={this.state}
                      >
                        {(updateRequest, { loading, error }) => (
                          <Form onSubmit={ async e => {
                              e.preventDefault;
                              await this.updateRequest(e, updateRequest);
                              Router.push({
                                pathname: '/ur-request',
                              });
                            }}
                          >
                            <Error error={error} />
                            <DateStyles>
                            <fieldset disabled={loading} aria-busy={loading}>
                                {request.rejectReason &&(
                                  <h3>{request.rejectReason}</h3>
                                )}
                                <h2>Requesting { request.name }</h2>
                                <h2>{ formatMoney(request.price) } to book</h2>
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
              )
          } }
        </Query>
    );
  }
}

export default RequestArtistUpdate;
export { UPDATE_REQUEST_MUTATION };
