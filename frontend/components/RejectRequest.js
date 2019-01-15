import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { ALL_REQUESTS_QUERY } from './RequestList';
import { SINGLE_REQUEST_QUERY } from './SingleRequest';

const REJECT_REQUEST_MUTATION = gql`
  mutation REJECT_REQUEST_MUTATION(
    $id: ID!
    $rejectReason: String
    $approved: String
  ) {
    rejectRequests(
      id: $id
      rejectReason: $rejectReason
      approved: $approved
    ) {
      id
      rejectReason
      approved
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
`;


class RejectRequest extends Component {
  state = {
    approved: 'no',
    rejectReason: '',
  };

  update = e => {
    this.setState({ approved: 'no' });
    console.log(this.props);
  };

  handleChange = e => {
    const { name, type, value, id } = e.target;
    console.log(value)
    this.setState({ rejectReason: value });
    console.log(this.state);
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
          mutation={ REJECT_REQUEST_MUTATION }
          variables={{ id: this.props.id, rejectReason: this.state.rejectReason, approved: this.state.approved }}
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
                if(error) return <Error errror={ error } />;
                if(loading) return <p>loading..</p>;
                if(!data.request) return <p>No request found </p>
                const request = data.request;
                return <StayInline>
                  <label htmlFor="buttonOne">
                    <label> <input type="radio" name="reject" id="one" value="Need more times" onChange={this.handleChange}/>Need more times</label><br></br>
                    <label><input type="radio" name="reject"  id="two" value="Need more details" onChange={this.handleChange}/>Need more details</label><br></br>
                    <label><input type="radio" name="reject"  id="three" value="Other"  onChange={this.handleChange}/>Other</label>&nbsp;
                    <label><input type="text" name="rejectReasonOther" id="other" onChange={this.handleChange}/></label>
                  </label>
                  <button onClick={async e => {
                        e.preventDefault;
                        const res = await rejectRequest();
                        console.log(res);
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

export default RejectRequest;
