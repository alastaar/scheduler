import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import User, { CURRENT_USER_QUERY } from './User';


const UPDATE_PREFERENCES_MUTATION = gql`
  mutation updatePreferences($emailPreference: [EmailPreference], $userId: ID!) {
    updatePreferences(emailPreference: $emailPreference, userId: $userId) {
      id
      emailPreference
      name
      lastName
      email
    }
  }
`;

const possiblePreferences = [
  'REQUESTCREATED',
  'REQUESTAPPROVED',
  'REQUESTCONFIRMED',
  'REQUESTREJECTED',
  'REQUESTDELETED',
  'UPDATEDSTRIPEACCOUNT',
  'UPDATEDCARD',
  'CREATECHAT',
  'NEWCHATMESSAGE'
];

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



const EmailPreferences = props => (
  <User>
      {({ data: { me } }) => (
        <Query query={CURRENT_USER_QUERY}>
          {({ data, loading, error }) => (
            <div>
              <Error error={error} />
              <div>
                <h2>Manage Email Preferences</h2>
                <Table>
                      <p>Name</p>
                      <p>Your Email</p>
                      <p>Email when someone creates a request for you</p>
                      <p>Email that your request has been approved</p>
                      <p>Email when the request has been confirmed and is all set</p>
                      <p>Email when the request has been rejected with the reason for rejection</p>
                      <p>Email when the request has been deleted</p>
                      <p>Email that you have updated your financial information</p>
                      <p>Email that you have updated your card for recieving payouts</p>
                      <p>Email that a new chat has started</p>
                      <p>Email that you received a new chat message</p>
                </Table>
                <UserPreferences user={me} key={me.id} />
              </div>
            </div>
          )}
        </Query>
      )}
  </User>
);

class UserPreferences extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      emailPreference: PropTypes.array,
    }).isRequired,
  };
  state = {
    preferences: this.props.user.emailPreference,
  };
  handlePreferenceChange = (e) => {
    const checkbox = e.target;
    // take a copy of the current permissions
    let updatedPreferences = [...this.state.preferences];
    // figure out if we need to remove or add this permission
    if (checkbox.checked) {
      // add it in!
      updatedPreferences.push(checkbox.value);
    } else {
      updatedPreferences = updatedPreferences.filter(preference => preference !== checkbox.value);
    }
    this.setState({ preferences: updatedPreferences });
  };
  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_PREFERENCES_MUTATION}
        variables={{
          emailPreference: this.state.preferences,
          userId: this.props.user.id,
        }}
      >
        {(updatePreferences, { loading, error }) => (
          <>
            <Table>
              {error && <tr><td colspan="8"><Error error={error} /></td></tr>}
                <p>{user.name} { user.lastName }</p>
                <p>{user.email}</p>
                {possiblePreferences.map(preference => (
                  <p key={preference}>
                    <label htmlFor={`${user.id}-preference-${preference}`}>
                      <input
                        id={`${user.id}-preference-${preference}`}
                        type="checkbox"
                        checked={this.state.preferences.includes(preference)}
                        value={preference}
                        onChange={this.handlePreferenceChange}
                      />
                    </label>
                  </p>
                ))}
            </Table>
            <SickNastyButton type="button" disabled={loading} onClick={updatePreferences}>
              Updat{loading ? 'ing' : 'e'}
            </SickNastyButton>
          </>
        )}
      </Mutation>
    );
  }
}

export { UPDATE_PREFERENCES_MUTATION };
export default EmailPreferences;
