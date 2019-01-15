import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import moment from "moment";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Form from './styles/Form';
import User, { CURRENT_USER_QUERY } from './User';

const UPDATE_BLACKOUT_MUTATION = gql`
  mutation updateBlackoutDates($blackOut: [String], $userId: ID!) {
    updateBlackoutDates(blackOut: $blackOut, userId: $userId) {
      id
      blackOut
      name
      lastName
      email
    }
  }
`;


const SickNastyButton = styled.button`
    display: block;
    width: 50%;
    margin: 0 auto;
    background: ${ props => props.theme.red };
    color: white;
    font-weight: 500;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 2rem;
    padding: 0.8rem 1.5rem;
    transform: skew(-2deg);
    transition: all 0.5s;
    &[disabled] {
      opacity: 0.5;
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



const BlackOutDates = props => (
  <User>
      {({ data: { me } }) => (
        <Query query={CURRENT_USER_QUERY}>
          {({ data, loading, error }) => (
            <div>
              <Error error={error} />
              <div>
                <h2>Add Dates that you will not be booking appointsments</h2>
                <UserBlackOutDates user={me} key={me.id} />
                <UserBlackOutRepeatingDates user={me} key={me.id} />
                <UserBlackOutRangeDates user={me} key={me.id} />
              </div>
            </div>
          )}
        </Query>
      )}
  </User>
);

class UserBlackOutDates extends React.Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      blackOut: PropTypes.array,
    }).isRequired,
  };

  state = {
      blackOutDates: this.props.user.blackOut,
      currentDate: new Date(),
  };

  componentWillMount() {
    if(this.props.user.blackOut.length == 0) {
      this.setState({blackOutDates: [""]})
    } else {
      this.setState({blackOutDates: this.props.user.blackOut})
    }
  }


  convertDate = (date) => {
    const complex = moment.utc(date).toDate()
    const almostDate = moment(complex).add(1, 'd').toDate();
    var newDate = new Date(almostDate),
        month = ("0" + (newDate.getMonth()+1)).slice(-2),
        day  = ("0" + newDate.getDate()).slice(-2);
    return [ newDate.getFullYear(), month, day ].join("-");

  }

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

  addBlackOutDate = (e) => {
    this.setState((prevState) => ({
      blackOutDates: [...prevState.blackOutDates, ""],
    }));
  }

  handleBlackOutChange = (e) => {
    const addDate = e.target;

    console.log(addDate);

    const index = addDate.id;

    const date = this.convertDate(addDate.value);

    console.log(date);
    // take a copy of the current permissions
    let updatedDates = [...this.state.blackOutDates];
    // figure out if we need to remove or add this permission
    // add it in!
    if(updatedDates.length >= index){
      updatedDates[index] = date;
    } else {
      updatedDates.push(date);
    }

    this.setState({ blackOutDates: updatedDates });
  };

  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_BLACKOUT_MUTATION}
        variables={{
          blackOut: this.state.blackOutDates,
          userId: this.props.user.id,
        }}
      >
        {(updateBlackoutDates, { loading, error }) => (
          <Form>
            {error && <Error error={error} />}
            {this.state.blackOutDates.map((blackOut, index) => (
                <TimeDate key={index}>
                  <label htmlFor={`${blackOut}-${index}`}>
                    Date: &nbsp;
                    <input
                      type="date"
                      id={`${index}`}
                      name={`${blackOut}-${index}`}
                      style= {{ width: 200 }}
                      defaultValue={blackOut}
                      onChange={this.handleBlackOutChange}
                      min = { this.convertDate(this.state.currentDate) }
                    />
                  </label>
                </TimeDate>
            ))}
            <SickNastyButton type="button" onClick={this.addBlackOutDate}>Add new Blackout Date</SickNastyButton>
            <br></br>
            <SickNastyButton type="button" disabled={loading} onClick={updateBlackoutDates}>
              Updat{loading ? 'ing' : 'e'}
            </SickNastyButton>
          </Form>
        )}
      </Mutation>
    );
  }
}

class UserBlackOutRepeatingDates extends React.Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      blackOut: PropTypes.array,
    }).isRequired,
  };

  state = {
      blackOutDates: this.props.user.blackOut,
  };

  componentWillMount() {
    if(this.props.user.blackOut.length == 0) {
      this.setState({blackOutDates: [""]})
    } else {
      this.setState({blackOutDates: this.props.user.blackOut})
    }
  }


  convertDate = (date) => {
    const complex = moment.utc(date).toDate()
    const almostDate = moment(complex).add(1, 'd').toDate();
    var newDate = new Date(almostDate),
        month = ("0" + (newDate.getMonth()+1)).slice(-2),
        day  = ("0" + newDate.getDate()).slice(-2);
    return [ newDate.getFullYear(), month, day ].join("-");

  }

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

  addBlackOutDate = (e) => {
    this.setState((prevState) => ({
      blackOutDates: [...prevState.blackOutDates, ""],
    }));
  }

  handleBlackOutChange = (e) => {
    const addDate = e.target;

    console.log(addDate);

    const index = addDate.id;

    const date = this.convertDate(addDate.value);

    console.log(date);
    // take a copy of the current permissions
    let updatedDates = [...this.state.blackOutDates];
    // figure out if we need to remove or add this permission
    // add it in!
    if(updatedDates.length >= index){
      updatedDates[index] = date;
    } else {
      updatedDates.push(date);
    }

    this.setState({ blackOutDates: updatedDates });
  };

  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_BLACKOUT_MUTATION}
        variables={{
          blackOut: this.state.blackOutDates,
          userId: this.props.user.id,
        }}
      >
        {(updateBlackoutDates, { loading, error }) => (
          <Form>
            {error && <Error error={error} />}
            {this.state.blackOutDates.map((blackOut, index) => (
                <TimeDate key={index}>
                  <label htmlFor={`${blackOut}-${index}`}>
                    Date: &nbsp;
                    <input
                      type="date"
                      id={`${index}`}
                      name={`${blackOut}-${index}`}
                      style= {{ width: 200 }}
                      defaultValue={blackOut}
                      onChange={this.handleBlackOutChange}
                    />
                  </label>
                </TimeDate>
            ))}
            <SickNastyButton type="button" onClick={this.addBlackOutDate}>Add new Repeating Blackout Date</SickNastyButton>
            <br></br>
            <SickNastyButton type="button" disabled={loading} onClick={updateBlackoutDates}>
              Updat{loading ? 'ing' : 'e'}
            </SickNastyButton>
          </Form>
        )}
      </Mutation>
    );
  }
}

class UserBlackOutRangeDates extends React.Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      blackOut: PropTypes.array,
    }).isRequired,
  };

  state = {
      blackOutDates: this.props.user.blackOut,
  };

  componentWillMount() {
    if(this.props.user.blackOut.length == 0) {
      this.setState({blackOutDates: [""]})
    } else {
      this.setState({blackOutDates: this.props.user.blackOut})
    }
  }


  convertDate = (date) => {
    const complex = moment.utc(date).toDate()
    const almostDate = moment(complex).add(1, 'd').toDate();
    var newDate = new Date(almostDate),
        month = ("0" + (newDate.getMonth()+1)).slice(-2),
        day  = ("0" + newDate.getDate()).slice(-2);
    return [ newDate.getFullYear(), month, day ].join("-");

  }

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

  addBlackOutDate = (e) => {
    this.setState((prevState) => ({
      blackOutDates: [...prevState.blackOutDates, ""],
    }));
  }

  handleBlackOutChange = (e) => {
    const addDate = e.target;

    console.log(addDate);

    const index = addDate.id;

    const date = this.convertDate(addDate.value);

    console.log(date);
    // take a copy of the current permissions
    let updatedDates = [...this.state.blackOutDates];
    // figure out if we need to remove or add this permission
    // add it in!
    if(updatedDates.length >= index){
      updatedDates[index] = date;
    } else {
      updatedDates.push(date);
    }

    this.setState({ blackOutDates: updatedDates });
  };

  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_BLACKOUT_MUTATION}
        variables={{
          blackOut: this.state.blackOutDates,
          userId: this.props.user.id,
        }}
      >
        {(updateBlackoutDates, { loading, error }) => (
          <Form>
            {error && <Error error={error} />}
            {this.state.blackOutDates.map((blackOut, index) => (
                <TimeDate key={index}>
                  <label htmlFor={`${blackOut}-${index}`}>
                    Date: &nbsp;
                    <input
                      type="date"
                      id={`${index}`}
                      name={`${blackOut}-${index}`}
                      style= {{ width: 200 }}
                      defaultValue={blackOut}
                      onChange={this.handleBlackOutChange}
                    />
                  </label>
                </TimeDate>
            ))}
            <SickNastyButton type="button" onClick={this.addBlackOutDate}>Add new Range of Blackout Dates</SickNastyButton>
            <br></br>
            <SickNastyButton type="button" disabled={loading} onClick={updateBlackoutDates}>
              Updat{loading ? 'ing' : 'e'}
            </SickNastyButton>
          </Form>
        )}
      </Mutation>
    );
  }
}

export { UPDATE_BLACKOUT_MUTATION };
export default BlackOutDates;
