import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={ CURRENT_USER_QUERY }>
    {({ data, loading }) => {
      console.log(data.me);
      if(loading) return <p>Loading...</p>
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
