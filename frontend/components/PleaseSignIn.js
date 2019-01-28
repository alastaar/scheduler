import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={ CURRENT_USER_QUERY }>
    {({ data, loading, error }) => {
      if(loading) return <p>Loading...</p>
      if(error) return <p>error {error.message}...</p>
      if(!data.me) {
        return (
          <div>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
