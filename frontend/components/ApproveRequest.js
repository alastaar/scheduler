import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { ALL_REQUESTS_QUERY } from './RequestList';

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
    border: none;
  }
`;


class ApproveRequest extends Component {
  state = {
    approved: 'yes',
  };

  update = e => {
    this.setState({ approved: 'yes' });
    console.log(this.props);
  };

  handleChange = e => {
    const { name, type, value, id } = e.target;
    if(id == 'one'){
      this.setState({ dateOne: this.props.dateOne, timeOne: this.props.timeOne });
    }
    else if ( id === 'two' ) {
      this.setState({ dateOne: this.props.dateTwo, timeOne: this.props.timeTwo });
    }
    else {
      this.setState({ dateOne: this.props.dateThree, timeOne: this.props.timeThree });
    }
    console.log(this.state);
  };

  render() {
    return (
        <Mutation
          mutation={ APPROVE_REQUEST_MUTATION }
          variables={{ id: this.props.id, dateOne: this.state.dateOne, timeOne: this.state.timeOne, approved: this.state.approved }}
          update={this.update}
          refetchQueries={[{ query: ALL_REQUESTS_QUERY }]}
        >
          {(approveRequest, { error }) => (
          <StayInline>
            <label htmlFor="buttonOne">
              <input type="radio" name="datetime" value="dateOne" id="one" onChange={this.handleChange}/><label htmlFor="one"> { this.props.dateOne } { this.props.timeOne }</label><br></br>
              <input type="radio" name="datetime" value="dateTwo" id="two" onChange={this.handleChange}/><label htmlFor="two"> { this.props.dateTwo } { this.props.timeTwo }</label><br></br>
              <input type="radio" name="datetime" value="dateThree" id="three" onChange={this.handleChange}/><label htmlFor="three"> { this.props.dateThree } { this.props.timeThree }</label>
            </label>
            <button onClick={async e => {
                  e.preventDefault;
                  const res = await approveRequest();
                  console.log(res);
                }
              }
            >
              {this.props.children}
            </button>
          </StayInline>
          )}
        </Mutation>
    );
  }
}

export default ApproveRequest;
