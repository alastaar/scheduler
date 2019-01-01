
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      lastName
      instagramHandle
      shop
      price
      profileImage
      bio
      image
      artist
      permissions
      stripeToken
      bankToken
      cart{
        id
        quantity
        request {
          id
          name
          lastName
          price
          referenceImage
          details
        }
      }
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };
