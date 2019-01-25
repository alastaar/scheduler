import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import moment from "moment";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Form from './styles/Form';
import User, { CURRENT_USER_QUERY } from './User';
import BlackOutRangeItem from './BlackOutRangeItem';

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

const ADD_TO_BLACKOUTS_MUTATION = gql`
  mutation addBlackoutRanges($weekday: String, $begin: String, $end: String) {
    addBlackoutRanges(weekday: $weekday, begin: $begin, end: $end) {
      id
      begin
      end
      weekday
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

const NastyButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red };
    cursor: pointer;
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
                <UserBlackOutRepeatingDates user={me} key={me.blackOutRanges} />
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
    if(date == "") {
      return "";
    }
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

  removeBlackOutDate = (e) => {
    const remove = e.target;
    const index = e.target.id;
    const arrayTemp = this.state.blackOutDates;
    arrayTemp.splice(index, 1);
    for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp[i] = this.convertDate(arrayTemp[i]);
    }
    this.setState({blackOutDates: [...arrayTemp]});
  }


  handleBlackOutChange = (e) => {
    const addDate = e.target;


    const index = addDate.id;

    const date = this.convertDate(addDate.value);

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
                      value={`${blackOut}`}
                      onChange={this.handleBlackOutChange}
                      min={ this.convertDate(this.state.currentDate) }
                    />
                  </label>
                  <NastyButton key={index} id={`${index}`} type="button" onClick={this.removeBlackOutDate}>&times;</NastyButton>
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
    }).isRequired,
  };

  state = {
      weekday: '',
      end: '',
      begin:'',
      currentDate: new Date(),
  };


  convertDate = (almostDate) => {
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

  handleBlackOutRepeat = (e) => {
    const addDate = e.target;

    var date = new Date();
    var dayofweek = '';

    const addDateRepeating = addDate.name.split("-");

    if(addDateRepeating[0] == "weekday") {
      this.setState({weekday: addDate.value, end: '', begin: ''});
    } else if (addDateRepeating[0] == "begin") {
      var date = this.convertDate(addDate.value);
      this.setState({begin: date});
    } else {
      var date = this.convertDate(addDate.value);
      this.setState({end: date});
    }

  };

  render() {

    return (
      <Mutation
        mutation={ADD_TO_BLACKOUTS_MUTATION}
        variables={{
          ...this.state,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addBlackoutRanges, { loading, error }) => (
          <User>
            {({ data: { me } }) => (
              <>
              { me.blackOutRanges.map(blackOutItem => <BlackOutRangeItem key={blackOutItem.id} blackOutItem={blackOutItem}/> )}
              <Form>
                {error && <Error error={error} />}
                    <TimeDate>
                      <label htmlFor={`weekday`}>
                       Day of the week that should be repeatedly closed
                        <select
                          id={`weekday`}
                          name={`weekday`}
                          onChange={this.handleBlackOutRepeat}
                        >
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                      </select>
                      </label>
                      <br></br>
                      OR set up a range of dates
                      <br></br>
                      <br></br>
                      <label htmlFor={`begin`}>
                        Begin Date: &nbsp;
                        <input
                          type="date"
                          id={`begin`}
                          name={`begin`}
                          style= {{ width: 200 }}
                          onChange={this.handleBlackOutRepeat}
                          min = { this.convertDate(this.state.currentDate) }
                        />
                      </label>
                      <label htmlFor={`end`}>
                        End Date: &nbsp;
                        <input
                          type="date"
                          id={`end`}
                          name={`end}`}
                          style= {{ width: 200 }}
                          onChange={this.handleBlackOutRepeat}
                          min = { this.convertDate(this.state.currentDate) }
                        />
                      </label>
                    </TimeDate>
                <br></br>
                <SickNastyButton type="button" disabled={loading} onClick={addBlackoutRanges}>
                  Add{loading ? 'ing': ''}
                </SickNastyButton>
              </Form>
            </>
            )}
          </User>
        )}
      </Mutation>
    );
  }
}



export { UPDATE_BLACKOUT_MUTATION };
export default BlackOutDates;
