import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { ALL_REQUESTS_QUERY } from './RequestList';
import { SINGLE_REQUEST_QUERY } from './SingleRequest';
import Error from './ErrorMessage';

const APPROVE_REQUEST_MUTATION = gql`
  mutation APPROVE_REQUEST_MUTATION(
    $id: ID!
    $dateOne: String!
    $timeOne: String!
    $approved: String
  ) {
    approveRequests(
      id: $id
      dateOne: $dateOne
      timeOne: $timeOne
      approved: $approved
    ) {
      id
      approved
      dateOne
      timeOne
    }
  }
`;

const StayInline = styled.div`
  button {
    display: block;
    margin: 0 auto;
    border: 1px solid black;
    font-weight: 900;
  }
  label {
    float: left;
  }
  input{
  }
`;


class ApproveRequest extends Component {
  state = {
    approved: 'yes',
    timeOne: '',
    dateOne: '',
  };

  update = e => {
    this.setState({ approved: 'yes' });
  };

  handleChange = e => {
    const { name, type, value, id } = e.target;
    if(id == 'one'){
      const time  = document.querySelector('#timeOne').value;
      this.setState({ dateOne: value, timeOne: time });
    }
    else if ( id === 'two' ) {
      const time  = document.querySelector('#timeTwo').value;
      this.setState({ dateOne: value, timeOne: time });
    }
    else {
      const time  = document.querySelector('#timeThree').value;
      this.setState({ dateOne: value, timeOne: time });
    }
  };

  convertTime = (time24) => {
    var tmpArr = time24.split(':'), time12;
    if(+tmpArr[0] == 12) {
      time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    }
    else {
      if(+tmpArr[0] == 0) {
        time12 = '12:' + tmpArr[1] + ' am';
      }
      else {
        if(+tmpArr[0] > 12) {
          time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' pm';
        }
        else {
          time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' am';
        }
      }
    }
    return time12;
  }

  render() {
    return (
        <Mutation
          mutation={ APPROVE_REQUEST_MUTATION }
          variables={{ id: this.props.id, dateOne: this.state.dateOne, timeOne: this.state.timeOne, approved: this.state.approved }}
          update={this.update}
          refetchQueries={[{ query: ALL_REQUESTS_QUERY }]}
        >
          {(approveRequest, { error }) => (
          <>
            <Query query={ SINGLE_REQUEST_QUERY } variables={{
              id: this.props.id,
            }}
            >
              {({ error, loading, data }) => {
                if(error) return <Error error={ error } />;
                if(loading) return <p>loading..</p>;
                if(!data.request) return <p>No request found </p>
                const request = data.request;
                return <StayInline>
                  <label htmlFor="buttonOne">
                    <label> <input type="radio" name="datetime" value={request.dateOne} id="one" onChange={this.handleChange}/>{ request.dateOne }<br></br>  @ { this.convertTime(request.timeOne) }</label><br></br>
                    <input type="hidden" name="datetimeOne" id="timeOne" value={request.timeOne} />
                    <label><input type="radio" name="datetime" value={request.dateTwo} id="two" onChange={this.handleChange}/> { request.dateTwo }<br></br> @ { this.convertTime(request.timeTwo) }</label><br></br>
                    <input type="hidden" name="datetimeTwo" id="timeTwo" value ={request.timeTwo} />
                    <label><input type="radio" name="datetime" value={request.dateThree} id="three" onChange={this.handleChange}/> { request.dateThree }<br></br> @ { this.convertTime(request.timeThree) }</label>
                    <input type="hidden" name="datetimeThree" id="timeThree" value={request.timeThree} />
                  </label>
                  <button onClick={async e => {
                        e.preventDefault;
                        const res = await approveRequest();
                      }
                    }
                  >
                    {this.props.children}
                  </button>
                </StayInline>
              }}
          </Query>
          </>
          )}
        </Mutation>
    );
  }
}

export default ApproveRequest;
